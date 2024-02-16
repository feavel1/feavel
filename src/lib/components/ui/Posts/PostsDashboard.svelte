<script lang="ts">
	import { onMount } from 'svelte';
	import PostPlaceHolder from '../PostPlaceHolder.svelte';
	import PostDashboardCard from './PostDashboardCard.svelte';
	import { LucideFilePlus, LucidePlus } from 'lucide-svelte';

	export let supabase: any, session: any;

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
				.eq('user_id', session.user.id);

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

<ul class="list space-y-4 my-16">
	{#if isLoading}
		<PostPlaceHolder />
	{:else if source.length != 0}
		{#each source as post}
			<PostDashboardCard {post} />
		{/each}
	{:else}
		<div class="text-center">
			<LucideFilePlus class="mx-auto h-12 w-12 text-gray-400" />
			<h3 class="mt-2 text-sm font-semibold text-gray-900">You have no posts available</h3>
			<p class="mt-1 text-sm text-gray-500">Get started by creating a new post.</p>
			<div class="mt-6">
				<a
					href="/posts/create-post"
					type="button"
					class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>
					<LucidePlus class="-ml-0.5 mr-1.5 h-5 w-5" />
					New Post
				</a>
			</div>
		</div>
	{/if}
</ul>
