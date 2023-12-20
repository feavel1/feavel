<script lang="ts">
	import Tags from '$lib/components/ui/Posts/Tags.svelte';
	import Time from 'svelte-time';

	import { generateHTML } from '@tiptap/html';
	import StarterKit from '@tiptap/starter-kit';
	import TaskItem from '@tiptap/extension-task-item';
	import TextStyle from '@tiptap/extension-text-style';
	import Highlight from '@tiptap/extension-highlight';
	import TaskList from '@tiptap/extension-task-list';
	import TiptapImage from '@tiptap/extension-image';
	import TiptapLink from '@tiptap/extension-link';

	import { defaultExtensions } from '$lib/components/editor/novel/ui/editor/extensions/index.js';
	import UploadImagesPlugin from '$lib/components/editor/novel/ui/editor/plugins/upload-images.js';

	export let data;
	let { supabase, session, post } = data;
	$: ({ supabase, session, post } = data);

	let comments: any = data.comments,
		tags = post.posts_tags_rel;

	const json = post.content;

	let output = generateHTML(json, [
		StarterKit.configure({
			bulletList: {
				HTMLAttributes: {
					class: 'list-disc list-outside leading-3 -mt-2'
				}
			},
			orderedList: {
				HTMLAttributes: {
					class: 'list-decimal list-outside leading-3 -mt-2'
				}
			},
			listItem: {
				HTMLAttributes: {
					class: 'leading-normal -mb-2'
				}
			},
			blockquote: {
				HTMLAttributes: {
					class: 'blockquote'
				}
			},
			codeBlock: {
				HTMLAttributes: {
					class:
						'rounded-sm dark:bg-stone-900 dark:text-stone-100 bg-stone-100 p-5 font-mono font-medium text-stone-800',
					spellcheck: 'false'
				}
			},
			code: {
				HTMLAttributes: {
					class: 'code',
					spellcheck: 'false'
				}
			},
			dropcursor: {
				color: '#DBEAFE',
				width: 4
			},
			gapcursor: false
		}),
		TiptapLink.configure({
			HTMLAttributes: {
				class: 'anchor'
			}
		}),
		TaskItem.configure({
			HTMLAttributes: {
				class: 'flex items-start my-4'
			},
			nested: true
		}),
		TaskList.configure({
			HTMLAttributes: {
				class: 'not-prose pl-2'
			}
		}),
		TiptapImage.extend({
			addProseMirrorPlugins() {
				return [UploadImagesPlugin()];
			}
		}).configure({
			allowBase64: true,
			HTMLAttributes: {
				class: 'rounded-lg border border-stone-200'
			}
		}),
		Highlight.configure({
			multicolor: true
		}),
		TextStyle
	]);
</script>

<div>
	<div class="p-3 mb-3">
		<Time relative timestamp={post.created_at} />

		<h1 class="h1 font-bold">{post.title}</h1>
		<Tags {tags} />
	</div>
	<div
		class="relative p-3 gap-3 w-full font-sans max-w-screen-2xl border-stone-200 prose dark:prose-invert"
	>
		{@html output}
	</div>
</div>
