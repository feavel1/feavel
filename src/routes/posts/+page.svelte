<script lang="ts">
	import PostPlaceHolder from '$lib/components/ui/PostPlaceHolder.svelte';
	import PostCard from '$lib/components/ui/Posts/PostCard.svelte';
	import { Paginator, type PaginationSettings } from '@skeletonlabs/skeleton';

	export let data;
	let { supabase } = data;
	$: ({ supabase } = data);

	let source: any[] = [];

	async function getPosts() {
		const { data: post_data, error: post_data_err } = await supabase
			.from('posts')
			.select('id, created_at, user_id, title')
			.eq('publicVisibility', 'true');

		if (post_data) {
			source = [...post_data];
			return source;
		} else {
			return post_data_err;
		}
	}

	let inputDemo = ' ';

	let paginationSettings = {
		page: 0,
		limit: 5,
		size: source.length,
		amounts: []
	} satisfies PaginationSettings;

	$: paginationSettings.size = source.length;

	$: paginatedSource = source.slice(
		paginationSettings.page * paginationSettings.limit,
		paginationSettings.page * paginationSettings.limit + paginationSettings.limit
	);
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
	{:then source}
		{#each paginatedSource as post}
			<PostCard {post} />
		{/each}
	{/await}
</div>

<Paginator
	class="mx-auto w-min"
	bind:settings={paginationSettings}
	showFirstLastButtons={true}
	showPreviousNextButtons={true}
/>
