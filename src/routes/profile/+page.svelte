<script>
	import PostsDashboard from '$lib/components/ui/Posts/PostsDashboard.svelte';
	import Avatar from '$lib/components/ui/User/Avatar.svelte';

	export let data;
	let user = data.userdata;
	let { supabase, session } = data;
	$: ({ session, supabase } = data);

	let date = new Date();
</script>

<div class="flex flex-col mx-auto items-center">
	<Avatar {supabase} uploadable={false} bind:url={user.avatar_url} size={14} />
	<div>@{user.username}</div>
	<div>{user.full_name}</div>
	<div>{user.description}</div>
	<div>Local time: {date.toString()}</div>
</div>

<hr class="my-4" />

<div class="w-full">
	<div class="mb-5">User posts:</div>
	{#if session}
		<PostsDashboard {session} {supabase} />
	{:else}
		<span><a class="underline" href="/auth">Login</a> to see your posts</span>
		<div>You can play around, things would still be saved on your local device.</div>
	{/if}
</div>
