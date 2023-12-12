<script lang="ts">
	import PostPlaceHolder from '$lib/components/ui/PostPlaceHolder.svelte';
	import PostCard from '$lib/components/ui/Posts/PostCard.svelte';
	import { Paginator, type PaginationSettings } from '@skeletonlabs/skeleton';

	export let data;
	let { supabase } = data;
	$: ({ supabase } = data);

	let source = [];

	let paginationSettings = {
		amounts: [],
		limit: 5,
		page: 0,
		size: source.length
	} satisfies PaginationSettings;

	async function getPosts() {
		const { data: totalCountData, error: totalCountErr } = await supabase
			.from('posts')
			.select('count', { count: 'exact' })
			.eq('publicVisibility', 'true');

		const { data: post_data, error: post_data_err } = await supabase
			.from('posts')
			.select(`id, created_at, user_id, title, posts_tags_rel(post_tags(tag_name))`)
			.eq('publicVisibility', 'true')
			.range(
				paginationSettings.page * paginationSettings.limit,
				paginationSettings.page * paginationSettings.limit + paginationSettings.limit
			);

		if (post_data) {
			paginationSettings.size = totalCountData ? totalCountData[0].count : 0;
			source = [...post_data];
			return source;
		} else {
			return post_data_err;
		}
	}

	// Search 🔍
	let inputDemo = ' ';
</script>

<div class="flex justify-between flex-col-reverse md:flex-row">
	<div class="flex flex-col gap-4 h-1/2">
		<a href="/posts/create-post" class="btn variant-filled">I also want to write ✍️!</a>
		<div class="input-group input-group-divider grid-cols-[auto_1fr_auto] border-0">
			<div class="input-group-shim">/posts/</div>
			<input type="search" name="demo" bind:value={inputDemo} placeholder="Search..." />
			<button class="variant-filled-secondary">Search</button>
		</div>
	</div>
	<div class="text-right">
		<p class="text-xs italic text-gray-500 py-2">
			Read, comment, like, create right here! - Feavel
		</p>
		<h1 class="h1">Read Posts</h1>
		<p class="italic text-lg">阅读帖子 📖</p>
	</div>
</div>

<div class="grid grid-cols-1 grid-rows-3 lg:grid-cols-2 gap-4 first:row-span-1">
	{#await getPosts()}
		<PostPlaceHolder />
	{:then post_data}
		{#each source as post}
			<PostCard {post} />
		{/each}
	{/await}
</div>

<Paginator
	class="mx-auto w-min"
	bind:settings={paginationSettings}
	showFirstLastButtons={true}
	showPreviousNextButtons={true}
	on:page={getPosts}
/>
