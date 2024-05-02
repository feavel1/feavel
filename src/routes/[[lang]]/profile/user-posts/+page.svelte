<script lang="ts">
	export let data;
	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	import * as m from '$paraglide/messages';

	let isLoading = false;

	import PostsDashboard from '$lib/components/ui/Posts/PostsDashboard.svelte';
</script>

<div class="mx-auto max-w-7xl sm:px-2 lg:px-8">
	<div class="mx-auto max-w-2xl px-4 lg:max-w-4xl lg:px-0">
		<h1 class="text-2xl font-bold tracking-tight sm:text-3xl">{m.user_posts()}</h1>
		<p class="mt-2 text-sm text-gray-500">Check out your posts and texts.</p>
		<div class="w-full">
			{#if session}
				<PostsDashboard {session} {supabase} />
			{:else}
				<span><a class="underline" href="/auth">Login</a> to see your posts</span>
				<div>You can play around, things would still be saved on your local device.</div>
			{/if}
		</div>
	</div>
</div>
