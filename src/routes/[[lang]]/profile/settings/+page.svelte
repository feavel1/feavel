<script lang="ts">
	import { enhance } from '$app/forms';
	import Avatar from '$lib/components/ui/User/Avatar.svelte';
	import type { SubmitFunction } from '@sveltejs/kit';

	export let data;
	let user = data.userdata;

	let { supabase, session } = data;
	$: ({ session, supabase } = data);

	let loading = false;

	const handleSubmit: SubmitFunction = () => {
		loading = true;
		return async () => {
			loading = false;
		};
	};

	let profileForm: HTMLFormElement;
</script>

<div class="divide-y dark:divide-white divide-black">
	{#if !session}
		<div>Not logged in</div>
		<a href="/auth" class="border-l-pink-200 btn variant-filled">Return to login</a>
	{:else}
		<div
			class="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 sm:px-6 md:grid-cols-3 lg:px-8 pb-16"
		>
			<div>
				<h2 class="text-base font-semibold leading-7">Personal Information</h2>
				<p class="mt-1 text-sm leading-6 text-gray-400">
					Use a permanent address where you can receive mail.
				</p>
			</div>

			<form
				action="?/updateUser"
				bind:this={profileForm}
				class="md:col-span-2 md:col-start-2"
				method="POST"
				use:enhance={handleSubmit}
				enctype="multipart/form-data"
			>
				<Avatar
					{supabase}
					uploadable={true}
					bind:url={user.avatar_url}
					size={14}
					on:upload={() => {
						profileForm.requestSubmit();
					}}
				/>
				<div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
					<div class="col-span-full">
						<label for="full-name" class="block text-sm font-medium leading-6">Full name</label>
						<div class="mt-2">
							<input
								type="text"
								name="full_name"
								id="full_name"
								autocomplete="name"
								value={user.full_name}
								class="input"
							/>
						</div>
					</div>

					<div class="col-span-full">
						<label for="email" class="block text-sm font-medium leading-6">Email address</label>
						<div class="mt-2">
							<input
								disabled
								id="email"
								name="email"
								placeholder={session.user.email}
								type="email"
								autocomplete="email"
								class="input"
							/>
						</div>
					</div>

					<div class="col-span-full">
						<label for="username" class="block text-sm font-medium leading-6">Username</label>
						<div class="mt-2">
							<div class="input flex">
								<span class="flex select-none items-center pl-3 text-gray-400 sm:text-sm"
									>feavel.com/user/</span
								>
								<input
									id="username"
									name="username"
									type="text"
									autocomplete="username"
									class="flex-1 border-0 bg-transparent py-1.5 pl-1 focus:ring-0 sm:text-sm sm:leading-6"
									value={user.username}
								/>
							</div>
						</div>
					</div>
				</div>

				<div class="mt-8 flex">
					<button
						type="submit"
						class="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
					>
						{loading ? 'Loading...' : 'Save'}
					</button>
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
						<label for="new-password" class="block text-sm font-medium leading-6"
							>New password</label
						>
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
					>
						Save
					</button>
				</div>
			</form>
		</div>

		<div
			class="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8"
		>
			<div>
				<h2 class="text-base font-semibold leading-7">Apply for studio</h2>
				<p class="mt-1 text-sm leading-6 text-gray-400">
					Please enter credentials to join us as a music studio. You can make money and create
					services with our platform.
				</p>
			</div>

			<div class="md:col-span-2">
				<div class="flex">
					<a
						href="/profile/admin/join"
						class="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
						>Join studio</a
					>
				</div>
			</div>
		</div>

		<div
			class="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8"
		>
			<div>
				<h2 class="text-base font-semibold leading-7">Log Out</h2>
				<p class="mt-1 text-sm leading-6 text-gray-400">
					Want to log-in using another account? You can log out your account here. You can always
					log back in. All information related to this account will be saved.
				</p>
			</div>

			<form method="post" action="?/signout" class="flex items-start md:col-span-2">
				<button
					type="submit"
					class="rounded-md bg-warning-400 text-black px-3 py-2 text-sm font-semibold shadow-sm hover:bg-warning-100"
					>Log out your account</button
				>
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
					>Yes, delete my account
				</button>
			</form>
		</div>
	{/if}
</div>
