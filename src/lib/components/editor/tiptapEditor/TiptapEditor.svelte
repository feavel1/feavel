<script lang="ts">
	import { onMount } from 'svelte';
	import cx from 'clsx';
	import type { Readable } from 'svelte/store';
	import { createEditor, Editor, EditorContent } from 'svelte-tiptap';
	import StarterKit from '@tiptap/starter-kit';

	// import { SvelteCounterExtension, SvelteEditableExtension } from './SvelteExtension';

	let editor: Readable<Editor>;
	onMount(() => {
		editor = createEditor({
			extensions: [
				StarterKit
				// SvelteCounterExtension,
				// SvelteEditableExtension
			],
			content: `
        <p>This is still the text editor you're used to, but enriched with node views.</p>
        <svelte-counter-component count="0"></svelte-counter-component>
        <p>This is an editable component</p>
        <svelte-editable-component>This is editable</svelte-editable-component>
        <p>Did you see that? That's a Svelte component. We are really living in the future.</p>
      `,
			editorProps: {
				attributes: {
					class:
						'dark:prose-invert border-2 border-black border-t-0 rounded-b-md p-3 outline-none prose prose-2xl mx-auto focus:outline-none'
				}
			}
		});
	});

	const toggleHeading = (level: 1 | 2) => {
		return () => {
			$editor.chain().focus().toggleHeading({ level }).run();
		};
	};

	const toggleBold = () => {
		$editor.chain().focus().toggleBold().run();
	};

	const toggleItalic = () => {
		$editor.chain().focus().toggleItalic().run();
	};

	const setParagraph = () => {
		$editor.chain().focus().setParagraph().run();
	};

	$: isActive = (name: string, attrs = {}) => $editor.isActive(name, attrs);

	$: menuItems = [
		{
			name: 'heading-1',
			command: toggleHeading(1),
			content: 'H1',
			active: () => isActive('heading', { level: 1 })
		},
		{
			name: 'heading-2',
			command: toggleHeading(2),
			content: 'H2',
			active: () => isActive('heading', { level: 2 })
		},
		{
			name: 'bold',
			command: toggleBold,
			content: 'B',
			active: () => isActive('bold')
		},
		{
			name: 'italic',
			command: toggleItalic,
			content: 'I',
			active: () => isActive('italic')
		},
		{
			name: 'paragraph',
			command: setParagraph,
			content: 'P',
			active: () => isActive('paragraph')
		}
	];
</script>

<div class="w-full max-w-2xl mx-auto">
	{#if editor}
		<div
			class="border-black border-2 border-b-0 bg-surface-400 rounded-t-md p-2 flex gap-1 mx-auto sticky top-0 z-10"
		>
			{#each menuItems as item (item.name)}
				<button
					type="button"
					class={cx('hover:bg-black hover:text-white w-7 h-7 rounded', {
						'bg-black text-white': item.active()
					})}
					on:click={item.command}
				>
					{item.content}
				</button>
			{/each}
		</div>
	{/if}

	<EditorContent editor={$editor} />
</div>
