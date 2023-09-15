<script lang="ts">
	import { goto } from '$app/navigation';
	import { postData } from '$lib/utils/helpers';

	export let data;
	let { supabase, session, subscription } = data;
	$: ({ session, supabase } = data);

	let loading = false;

	const subscriptionPrice =
		subscription &&
		new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: subscription?.prices?.currency!,
			minimumFractionDigits: 0
		}).format((subscription?.prices?.unit_amount || 0) / 100);
	const handleSignOut = async () => {
		await supabase.auth.signOut();
	};

	const redirectToCustomerPortal = async () => {
		loading = true;
		try {
			const { url } = await postData({
				url: '/api/create-portal-link'
			});
			goto(url);
		} catch (error) {
			if (error) return alert((error as Error).message);
		} finally {
			loading = false;
		}
	};

	const interval = subscription?.prices?.interval;
</script>

<div class="flex justify-between flex-col-reverse md:flex-row">
	<div class="flex flex-col gap-4">
		<a href="/profile/settings" class="btn variant-filled-primary">Settings</a>
		<button class="btn variant-filled" on:click={handleSignOut}>Sign out</button>
	</div>
	<div class="text-right h-full">
		<p class="text-xs italic text-gray-500 py-2">Manage your profile right here! - Feavel</p>
		<h1 class="h1">My profile</h1>
		<p class=" text-lg">账号管理 📑</p>
	</div>
</div>

<section>
	{#if !session}
		<div>Not logged in</div>
		<a href="/auth" class="border-l-pink-200 btn variant-filled">Return to login</a>
	{:else}
		<div class="card mb-4">
			<h1 class="card-header h3">Current plan:</h1>
			<div class="p-4">
				{subscription
					? `You are currently on the ${subscription?.prices?.products?.name} plan.`
					: 'You are not currently subscribed to any plan.'}
			</div>
			<div class="text-3xl p-4">
				{#if subscription}
					{subscriptionPrice} / {interval}
				{:else}
					<a href="/">Choose your plan</a>
				{/if}
			</div>
			<button class="btn m-4 variant-filled-tertiary" on:click={redirectToCustomerPortal}>
				{loading == false ? 'Open customer portal' : 'loading customer portal...'}
			</button>
		</div>

		<div class="card mb-4">
			<h1 class="card-header h3">Logged in as:</h1>
			<p class="card-footer">
				{session.user.email}
			</p>
		</div>

		<div class="card mb-4">
			<h1 class="card-header h3">My posts:</h1>
			<details class="card-footer">
				<p class="card-footer">Post name 1</p>
				<p class="card-footer">Post name 2</p>
			</details>
		</div>

		<!-- <details>
			<summary>More data in : session.user</summary>
			<pre class="pre">{JSON.stringify(session.user, null, 2)}</pre>
		</details> -->
	{/if}
</section>
