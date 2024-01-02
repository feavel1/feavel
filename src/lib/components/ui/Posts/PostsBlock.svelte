<script lang="ts">
	import PostPlaceHolder from '$lib/components/ui/PostPlaceHolder.svelte';
	import PostCard from '$lib/components/ui/Posts/PostCard.svelte';
	import { Paginator, type PaginationSettings } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';

	export let supabase: any;

	let isLoading = false;
	let source: string | any[] = [];
	let cachedPosts: any[] = [];

	let paginationSettings: PaginationSettings = {
		amounts: [],
		limit: 6,
		page: 0,
		size: source.length
	};

	onMount(async () => {
		await getTotal();
		getPosts();
	});

	async function getTotal() {
		try {
			isLoading = true;
			const { data: totalCountData, error: totalCountErr } = await supabase
				.from('posts')
				.select('count', { count: 'exact' })
				.eq('publicVisibility', 'true');

			if (totalCountData) {
				paginationSettings.size = totalCountData[0].count;
			}
		} catch (error) {
			console.error('Error fetching total count:', error);
		} finally {
			isLoading = false;
		}
	}

	async function getPosts() {
		try {
			isLoading = true;
			const startRange = paginationSettings.page * paginationSettings.limit;

			// Adjust endRange to avoid exceeding the total count
			let endRange = startRange + paginationSettings.limit - 1;
			if (startRange >= paginationSettings.size) {
				// If startRange is beyond the total count, set endRange to startRange
				endRange = startRange;
			} else if (endRange >= paginationSettings.size) {
				// If endRange exceeds the total count, adjust it to the last index
				endRange = paginationSettings.size - 1;
			}

			// Check if the posts for the current page are already cached
			if (cachedPosts[startRange] !== undefined && cachedPosts[endRange] !== undefined) {
				source = cachedPosts.slice(startRange, endRange + 1);
			} else {
				const { data: post_data, error: post_data_err } = await supabase
					.from('posts')
					.select(`id, created_at, user_id, title, posts_tags_rel(post_tags(tag_name))`)
					.eq('publicVisibility', 'true')
					.range(startRange, endRange);

				if (post_data) {
					source = [...post_data];
					// Update the cached posts array with the new data
					cachedPosts.splice(startRange, paginationSettings.limit, ...post_data);
				} else {
					console.error('Error fetching posts:', post_data_err);
				}
			}
		} catch (error) {
			console.error('Error fetching posts:', error);
		} finally {
			isLoading = false;
		}
	}

	// $: (() => {
	// 	filterTag;
	// 	// the svelte compiler will infer that this anonymous function needs to run every time input changes
	// 	console.log('This function is running' + filterTag);
	// 	getByTag('%' + filterTag + '%');
	// })();

	// async function getByTag(filterTag: string) {
	// 	if (filterTag === 'none') {
	// 		console.log('ABC');
	// 	} else if (filterTag != 'none') {
	// 		const { data: post_id_ByTag, error: post_id_ByTag_err } = await supabase
	// 			.from('posts')
	// 			.select('id, posts_tags_rel!inner(post_tags!inner(tag_name))')
	// 			.eq('publicVisibility', 'true')
	// 			.like('posts_tags_rel.post_tags.tag_name', filterTag);
	// 		if (post_id_ByTag) {
	// 			console.log(post_id_ByTag.length);
	// 			paginationSettings.size = post_id_ByTag.length;
	// 			paginationSettings.page = 0;
	// 			try {
	// 				isLoading = true;
	// 				const startRange = paginationSettings.page * paginationSettings.limit;

	// 				// Adjust endRange to avoid exceeding the total count
	// 				let endRange = startRange + paginationSettings.limit - 1;
	// 				if (startRange >= paginationSettings.size) {
	// 					// If startRange is beyond the total count, set endRange to startRange
	// 					endRange = startRange;
	// 				} else if (endRange >= paginationSettings.size) {
	// 					// If endRange exceeds the total count, adjust it to the last index
	// 					endRange = paginationSettings.size - 1;
	// 				}

	// 				// Check if the posts for the current page are already cached
	// 				if (cachedPosts[startRange] !== undefined && cachedPosts[endRange] !== undefined) {
	// 					source = cachedPosts.slice(startRange, endRange + 1);
	// 				} else {
	// 					const { data: post_data, error: post_data_err } = await supabase
	// 						.from('posts')
	// 						.select(
	// 							'id, created_at, user_id, title, posts_tags_rel!inner(post_tags!inner(tag_name))'
	// 						)
	// 						.eq('publicVisibility', 'true')
	// 						.like('posts_tags_rel.post_tags.tag_name', filterTag)
	// 						.range(startRange, endRange);

	// 					if (post_data) {
	// 						source = [...post_data];
	// 						// Update the cached posts array with the new data
	// 						cachedPosts.splice(startRange, paginationSettings.limit, ...post_data);
	// 					} else {
	// 						console.error('Error fetching posts:', post_data_err);
	// 					}
	// 				}
	// 			} catch (error) {
	// 				console.error('Error fetching posts:', error);
	// 			} finally {
	// 				isLoading = false;
	// 			}
	// 		} else {
	// 			console.error('Error fetching posts by tag:', post_id_ByTag_err);
	// 		}
	// 	}
	// }
</script>

<div class="grid grid-cols-1 grid-rows-3 lg:grid-cols-2 gap-4 first:row-span-1">
	{#if isLoading}
		<PostPlaceHolder />
	{:else}
		{#each source as post}
			<PostCard {post} />
		{/each}
	{/if}
</div>

<Paginator
	class="mx-auto w-min"
	showFirstLastButtons={true}
	showPreviousNextButtons={true}
	bind:settings={paginationSettings}
	on:page={getPosts}
/>
