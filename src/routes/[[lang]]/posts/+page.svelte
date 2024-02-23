<script lang="ts">
	import PostsBlock from '$lib/components/ui/Posts/PostsBlock.svelte';

	export let data;
	let { supabase } = data;
	$: ({ supabase } = data);
</script>

<svelte:head>
	<title>Posts - Blog</title>
</svelte:head>

<div class="flex justify-between flex-col-reverse md:flex-row px-4 py-4 sm:px-6">
	<div class="flex flex-col gap-4 h-1/2">
		<a href="/posts/create-post" class="btn variant-filled">I also want to write ✍️!</a>
		<a href="/posts/guide" class="btn variant-filled">Read community guide 📚!</a>

		<!-- <SearchButton /> -->
	</div>
	<div class="text-right">
		<p class="text-xs italic text-gray-500 py-2">
			Read, comment, like, create right here! - Feavel
		</p>
		<h1 class="h1">Read Posts</h1>
		<p class="italic text-lg">阅读帖子 📖</p>
	</div>
</div>

<PostsBlock {supabase} />
