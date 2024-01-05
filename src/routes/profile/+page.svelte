<script lang="ts">
	import Avatar from '$lib/components/ui/User/Avatar.svelte';
	import { postData } from '$lib/utils/helpers';

	export let data;
	let user = data.userdata;

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
			window.location = url;
		} catch (error) {
			if (error) return alert((error as Error).message);
		} finally {
			loading = false;
		}
	};

	const interval = subscription?.prices?.interval;

	let profileForm: HTMLFormElement;
</script>

<!-- 
<div class="flex justify-between flex-col-reverse md:flex-row">
	<div class="flex flex-col gap-4">
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
			<h1 class="card-header h3">Logged in as:</h1>
			<div class="w-full grid grid-cols-[auto_1fr_auto] gap-1 ml-4 pt-4">
				<Avatar {supabase} uploadable={false} bind:url={user.avatar_url} size={10} />
				<p class="card-footer">
					{session.user.email}
				</p>
			</div>
		</div>

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
			<h1 class="card-header h3">My posts:</h1>
			<details class="card-footer">
				<p class="card-footer">Post name 1</p>
				<p class="card-footer">Post name 2</p>
			</details>
		</div>
		{#if user != null}
			<div class="card max-w-3xl mx-auto p-3">
				<form
					method="POST"
					class="flex flex-col gap-2"
					action="?/updateUser"
					bind:this={profileForm}
				>
					<Avatar
						{supabase}
						uploadable={true}
						bind:url={user.avatar_url}
						size={20}
						on:upload={() => {
							profileForm.requestSubmit();
						}}
					/>
					<div class="field">
						<label for="full_name" class="label">Full Name</label>
						<p class="control">
							<input
								id="full_name"
								name="full_name"
								class="input"
								type="text"
								value={user.full_name}
								required
							/>
						</p>
					</div>
					<div class="field">
						<label for="username" class="label">Username</label>
						<p class="control">
							<input
								id="username"
								name="username"
								class="input"
								type="text"
								value={user.username}
								required
							/>
						</p>
					</div>

					<div class="field">
						<label for="address" class="label">Address</label>
						<p class="control">
							<input
								id="address"
								name="address"
								class="input"
								type="text"
								value={user.billing_address}
								required
							/>
						</p>
					</div>
					<div class="mx-auto">
						<button class="btn btn-filled-primary">Save</button>
					</div>
				</form>
			</div>

			<button class="btn variant-filled" on:click={handleSignOut}>Sign out</button>

			<details>
				<summary>More data in: session.user</summary>
				<pre class="pre">{JSON.stringify(session?.user, null, 2)}</pre>
			</details>
		{:else}
			<a href="/">Return</a>
		{/if}
	{/if}
</section> -->

<!-- Settings forms -->
<div class="divide-y divide-white/5 lg:pl-72">
	<div
		class="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8"
	>
		<div>
			<h2 class="text-base font-semibold leading-7">Personal Information</h2>
			<p class="mt-1 text-sm leading-6 text-gray-400">
				Use a permanent address where you can receive mail.
			</p>
		</div>

		<form class="md:col-span-2">
			<div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
				<div class="col-span-full flex items-center gap-x-8">
					<img
						src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
						alt=""
						class="h-24 w-24 flex-none rounded-lg bg-gray-800 object-cover"
					/>
					<div>
						<button
							type="button"
							class="rounded-md bg-white/10 px-3 py-2 text-sm font-semibold shadow-sm hover:bg-white"
							>Change avatar</button
						>
						<p class="mt-2 text-xs leading-5 text-gray-400">JPG, GIF or PNG. 1MB max.</p>
					</div>
				</div>

				<div class="sm:col-span-3">
					<label for="first-name" class="block text-sm font-medium leading-6">First name</label>
					<div class="mt-2">
						<input
							type="text"
							name="first-name"
							id="first-name"
							autocomplete="given-name"
							class="input"
						/>
					</div>
				</div>

				<div class="sm:col-span-3">
					<label for="last-name" class="block text-sm font-medium leading-6">Last name</label>
					<div class="mt-2">
						<input
							type="text"
							name="last-name"
							id="last-name"
							autocomplete="family-name"
							class="input"
						/>
					</div>
				</div>

				<div class="col-span-full">
					<label for="email" class="block text-sm font-medium leading-6">Email address</label>
					<div class="mt-2">
						<input id="email" name="email" type="email" autocomplete="email" class="input" />
					</div>
				</div>

				<div class="col-span-full">
					<label for="username" class="block text-sm font-medium leading-6">Username</label>
					<div class="mt-2">
						<div
							class="flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
						>
							<span class="flex select-none items-center pl-3 text-gray-400 sm:text-sm"
								>example.com/</span
							>
							<input
								type="text"
								name="username"
								id="username"
								autocomplete="username"
								class="flex-1 border-0 bg-transparent py-1.5 pl-1 focus:ring-0 sm:text-sm sm:leading-6"
								placeholder="janesmith"
							/>
						</div>
					</div>
				</div>

				<div class="col-span-full">
					<label for="timezone" class="block text-sm font-medium leading-6">Timezone</label>
					<div class="mt-2">
						<select id="timezone" name="timezone" class="input [&_*]:text-black">
							<option>Pacific Standard Time</option>
							<option>Eastern Standard Time</option>
							<option>Greenwich Mean Time</option>
						</select>
					</div>
				</div>
			</div>

			<div class="mt-8 flex">
				<button
					type="submit"
					class="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
					>Save</button
				>
			</div>
		</form>
	</div>

	<div
		class="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8"
	>
		<div>
			<h2 class="text-base font-semibold leading-7">Change password</h2>
			<p class="mt-1 text-sm leading-6 text-gray-400">
				Update your password associated with your account.
			</p>
		</div>

		<form class="md:col-span-2">
			<div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
				<div class="col-span-full">
					<label for="current-password" class="block text-sm font-medium leading-6"
						>Current password</label
					>
					<div class="mt-2">
						<input
							id="current-password"
							name="current_password"
							type="password"
							autocomplete="current-password"
							class="input"
						/>
					</div>
				</div>

				<div class="col-span-full">
					<label for="new-password" class="block text-sm font-medium leading-6">New password</label>
					<div class="mt-2">
						<input
							id="new-password"
							name="new_password"
							type="password"
							autocomplete="new-password"
							class="input"
						/>
					</div>
				</div>

				<div class="col-span-full">
					<label for="confirm-password" class="block text-sm font-medium leading-6"
						>Confirm password</label
					>
					<div class="mt-2">
						<input
							id="confirm-password"
							name="confirm_password"
							type="password"
							autocomplete="new-password"
							class="input"
						/>
					</div>
				</div>
			</div>

			<div class="mt-8 flex">
				<button
					type="submit"
					class="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
					>Save</button
				>
			</div>
		</form>
	</div>

	<div
		class="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8"
	>
		<div>
			<h2 class="text-base font-semibold leading-7">Log out other sessions</h2>
			<p class="mt-1 text-sm leading-6 text-gray-400">
				Please enter your password to confirm you would like to log out of your other sessions
				across all of your devices.
			</p>
		</div>

		<form class="md:col-span-2">
			<div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
				<div class="col-span-full">
					<label for="logout-password" class="block text-sm font-medium leading-6"
						>Your password</label
					>
					<div class="mt-2">
						<input
							id="logout-password"
							name="password"
							type="password"
							autocomplete="current-password"
							class="input"
						/>
					</div>
				</div>
			</div>

			<div class="mt-8 flex">
				<button
					type="submit"
					class="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
					>Log out other sessions</button
				>
			</div>
		</form>
	</div>

	<div
		class="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8"
	>
		<div>
			<h2 class="text-base font-semibold leading-7">Delete account</h2>
			<p class="mt-1 text-sm leading-6 text-gray-400">
				No longer want to use our service? You can delete your account here. This action is not
				reversible. All information related to this account will be deleted permanently.
			</p>
		</div>

		<form class="flex items-start md:col-span-2">
			<button
				type="submit"
				class="rounded-md bg-red-500 px-3 py-2 text-sm font-semibold shadow-sm hover:bg-red-400"
				>Yes, delete my account</button
			>
		</form>
	</div>
</div>
