<script lang="ts">
	import { onMount } from 'svelte';
	import PostPlaceHolder from '../PostPlaceHolder.svelte';
	import PostDashboardCard from './PostDashboardCard.svelte';

	export let supabase: any;

	let source: string | any[] = [];
	let isLoading = false;

	onMount(async () => {
		getPosts();
	});

	async function getPosts() {
		try {
			isLoading = true;

			// Check if the posts for the current page are already cached
			const { data: post_data, error: post_data_err } = await supabase
				.from('posts')
				.select(`id, created_at, user_id, title, posts_tags_rel(post_tags(tag_name))`)
				.eq('publicVisibility', 'true');

			if (post_data) {
				source = [...post_data];
				// Update the cached posts array with the new data
			} else {
				console.error('Error fetching posts:', post_data_err);
			}
		} catch (error) {
			console.error('Error fetching posts:', error);
		} finally {
			isLoading = false;
		}
	}
</script>

<ul class="list space-y-4">
	{#if isLoading}
		<PostPlaceHolder />
	{:else}
		{#each source as post}
			<PostDashboardCard {post} />
		{/each}
	{/if}
</ul>
