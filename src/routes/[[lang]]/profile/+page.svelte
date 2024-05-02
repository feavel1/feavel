<script lang="ts">
	import PostsDashboard from '$lib/components/ui/Posts/PostsDashboard.svelte';
	import Avatar from '$lib/components/ui/User/Avatar.svelte';

	export let data;

	let { supabase, session, userdata } = data;
	$: ({ session, supabase, userdata } = data);

	let date = new Date();

	import * as m from '$paraglide/messages';
</script>

<div class="mx-auto max-w-7xl sm:px-2 lg:px-8">
	<div class="mx-auto max-w-2xl px-4 lg:max-w-4xl lg:px-0">
		<h1 class="text-2xl font-bold tracking-tight sm:text-3xl">{m.user_profile()}</h1>
		<p class="mt-2 text-sm text-gray-500">
			{m.user_profile_description()}
		</p>
		<div class="flex flex-row w-full mt-16">
			<Avatar {supabase} uploadable={false} bind:url={userdata.avatar_url} size={14} />

			<div class="flex flex-col ml-4">
				<div class="text-lg">{m.full_name()}: {userdata.full_name}</div>
				<div>{m.user_id()}: @{userdata.username}</div>
			</div>
		</div>
		<div>{m.my_description()}: {userdata.description}</div>
		<div>{m.local_time()}: {date.toString()}</div>
		<hr class="my-4" />

		<h1 class="text-2xl font-bold tracking-tight sm:text-3xl mt-16">{m.user_posts()}</h1>
		<p class="mt-2 text-sm text-gray-500">
			{m.user_posts_description()} 📑
		</p>
		{#if session}
			<PostsDashboard {session} {supabase} />
		{:else}
			<span><a class="underline" href="/auth">Login</a> to see your posts</span>
			<div>You can play around, things would still be saved on your local device.</div>
		{/if}
	</div>
</div>
