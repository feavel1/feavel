<script lang="ts">
	import Tags from '$lib/components/ui/Posts/Tags.svelte';
	import Time from 'svelte-time';
	import { generateHTML } from '@tiptap/html';
	import { readExtentions } from '$lib/components/editor/novel/ui/editor/extensions/index.js';
	import '$lib/components/editor/novel/styles/prosemirror.css';
	import '$lib/components/editor/novel/styles/index.css';

	export let data;
	let { supabase, session, post } = data;
	$: ({ supabase, session } = data);

	const comments: any = data.comments,
		tags = post.posts_tags_rel;

	const json = post.content;
	const output = generateHTML(json, readExtentions);
</script>

<div>
	<div class="p-3 mb-3">
		<Time relative timestamp={post.created_at} />

		<h1 class="h1 font-bold">{post.title}</h1>
		<Tags {tags} />
	</div>
	<div
		class="prose dark:prose-invert relative p-3 gap-3 w-full font-sans max-w-screen-2xl border-stone-200"
	>
		{@html output}
	</div>
</div>
