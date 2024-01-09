<script lang="ts">
	import Tags from '$lib/components/ui/Posts/Tags.svelte';
	import Time from 'svelte-time';
	import { generateHTML } from '@tiptap/html';
	import { readExtentions } from '$lib/components/editor/novel/ui/editor/extensions/index.js';
	import '$lib/components/editor/novel/styles/prosemirror.css';
	import '$lib/components/editor/novel/styles/index.css';
	import { browser, dev } from '$app/environment';

	export let data;
	let { supabase, post } = data;
	$: ({ supabase } = data);

	const date = new Date();

	async function updateViews() {
		// Call our stored procedure with the page_slug set by the request params slug
		const { error: update_err } = await supabase.rpc('update_views', {
			page_id: post.id
		});

		if (update_err) {
			console.log(json({ error: update_err.message }));
		} else {
			console.log(
				// json({
				// 	success: true,
				// 	message: `Successfully incremented page: ${params.postId}`
				// })
				`Successfully incremented page: ${post.id}. Time:`,
				date.toString()
			);
		}
	}

	if (browser && !dev) {
		updateViews();
	}

	const comments: any = data.comments,
		tags = post.posts_tags_rel;

	const json = post.content;
	const output = generateHTML(json, readExtentions);
</script>

<div class="max-w-7xl px-2 mx-auto">
	<div class="p-3 mb-3">
		<Time relative timestamp={post.created_at} />

		<h1 class="h1 font-bold mb-2">{post.title}</h1>
		<Tags {tags} />
		<div>Post views: {post.post_views}</div>
	</div>
	<hr />
	<div
		class="prose dark:prose-invert relative p-3 gap-3 w-full font-sans max-w-screen-2xl border-stone-200"
	>
		{@html output}
	</div>
</div>
