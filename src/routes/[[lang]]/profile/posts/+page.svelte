<script>
	export let data;
	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	let isLoading = false;

	import PostsDashboard from '$lib/components/ui/Posts/PostsDashboard.svelte';
</script>

<div class="w-full">
	{#if session}
		<PostsDashboard {session} {supabase} />
	{:else}
		<span><a class="underline" href="/auth">Login</a> to see your posts</span>
		<div>You can play around, things would still be saved on your local device.</div>
	{/if}
</div>
