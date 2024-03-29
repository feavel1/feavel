<script lang="ts">
	import '$lib/components/editor/novel/styles/prosemirror.css';
	import '$lib/components/editor/novel/styles/index.css';
	import { getPrevText } from '../../editor.js';
	import { createLocalStorageStore } from '../../stores/localStorage.js';
	import { createDebouncedCallback, noop } from '../../utils.js';
	import { Editor, Extension, type JSONContent } from '@tiptap/core';
	import { useCompletion } from 'ai/svelte';
	import { onMount } from 'svelte';
	import { defaultEditorContent } from './default-content.js';
	import { defaultExtensions } from './extensions/index.js';
	import { defaultEditorProps } from './props.js';
	import ImageResizer from './extensions/ImageResizer.svelte';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import EditorBubbleMenu from './bubble-menu/index.svelte';
	import type { EditorProps } from '@tiptap/pm/view';

	const toastStore = getToastStore();

	/**
	 * Disable local storage read/save.
	 * @default false
	 */
	export let disableLocalStorage = false;
	/**
	 * The API route to use for the OpenAI completion API.
	 * Defaults to "/api/generate".
	 */
	export let completionApi = '/api/generate';
	/**
	 * Additional classes to add to the editor container.
	 * Defaults to "relative min-h-[500px] w-full max-w-screen-lg border-stone-200 bg-white p-12 px-8 sm:mb-[calc(20vh)] sm:rounded-lg sm:border sm:px-12 sm:shadow-lg".
	 */
	let className =
		'relative gap-3 w-full font-sans max-w-screen-lg border-stone-200 sm:mb-[calc(10vh)] sm:rounded-lg sm:border variant-ringed-tertiary sm:shadow-lg';
	export { className as class };
	/**
	 * The default value to use for the editor.
	 * Defaults to defaultEditorContent.
	 */
	export let defaultValue: JSONContent | string = defaultEditorContent;
	/**
	 * A list of extensions to use for the editor, in addition to the default Novel extensions.
	 * Defaults to [].
	 */
	export let extensions: Extension[] = [];
	/**
	 * Props to pass to the underlying Tiptap editor, in addition to the default Novel editor props.
	 * Defaults to {}.
	 */
	export let editorProps: EditorProps = {};
	/**
	 * A callback function that is called whenever the editor is updated.
	 * Defaults to () => {}.
	 */
	export let onUpdate: (editor?: Editor) => void | Promise<void> = noop;
	/**
	 * A callback function that is called whenever the editor is updated, but only after the defined debounce duration.
	 * Defaults to () => {}.
	 */
	export let onDebouncedUpdate: (editor?: Editor) => void | Promise<void> = noop;
	/**
	 * The duration (in milliseconds) to debounce the onDebouncedUpdate callback.
	 * Defaults to 1000.
	 */
	export let debounceDuration = 1000;
	/**
	 * The key to use for storing the editor's value in local storage.
	 * Defaults to "novel__content".
	 */
	export let storageKey = 'novel__content';

	let element: Element;
	let editor: Editor;

	const { complete, completion, isLoading, stop } = useCompletion({
		id: 'novel',
		api: completionApi,
		onFinish: (_prompt, completion) => {
			editor?.commands.setTextSelection({
				from: editor.state.selection.from - completion.length,
				to: editor.state.selection.from
			});
		},
		onError: (err) => {
			toastStore.trigger({
				message: 'Error: ' + err.message,
				background: 'variant-filled-warning'
			});
		}
	});

	const content = createLocalStorageStore(storageKey, defaultValue);
	let hydrated = false;

	$: if (editor && !hydrated) {
		const value = disableLocalStorage ? defaultValue : $content;
		if (value) {
			editor.commands.setContent(value);
		}
		hydrated = true;
	}

	let prev = '';

	function insertAiCompletion() {
		const diff = $completion.slice(prev.length);

		prev = $completion;
		editor?.commands.insertContent(diff);
	}

	$: {
		[$completion];
		insertAiCompletion();
	}

	const debouncedUpdates = createDebouncedCallback(async ({ editor }) => {
		const json = editor.getJSON();

		if (!disableLocalStorage) {
			content.set(json);
		}

		onDebouncedUpdate(editor);
	}, debounceDuration);

	onMount(() => {
		editor = new Editor({
			element: element,
			onTransaction: () => {
				// force re-render so `editor.isActive` works as expected
				editor = editor;
			},
			extensions: [...defaultExtensions, ...extensions],
			editorProps: {
				...defaultEditorProps,
				...editorProps
			},
			onUpdate: (e) => {
				const selection = e.editor.state.selection;
				const lastTwo = getPrevText(e.editor, {
					chars: 2
				});

				if (lastTwo === '++' && !$isLoading) {
					e.editor.commands.deleteRange({
						from: selection.from - 2,
						to: selection.from
					});
					complete(
						getPrevText(e.editor, {
							chars: 5000
						})
					);
					// complete(e.editor.storage.markdown.getMarkdown());
				} else {
					onUpdate(e.editor);
					debouncedUpdates(e);
				}
			},
			autofocus: 'end'
		});

		return () => editor.destroy();
	});
</script>

<div id="editor" class={className} bind:this={element}>
	{#if editor}
		<EditorBubbleMenu {editor} />
	{/if}
	{#if editor?.isActive('image')}
		<ImageResizer {editor} />
	{/if}
	<slot />
</div>

<!-- <Toasts /> -->
