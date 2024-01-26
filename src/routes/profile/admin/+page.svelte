<script lang="ts">
	import { LucideArrowUp, LucideUserX } from 'lucide-svelte';
	import type { SubmitFunction } from '@sveltejs/kit';

	export let data;

	let { supabase, session, applicationStatus } = data;
	$: ({ session, supabase, applicationStatus } = data);

	let loading = false;

	const handleSubmit: SubmitFunction = () => {
		loading = true;
		return async () => {
			loading = false;
		};
	};

	let profileForm: HTMLFormElement;
</script>

{#if applicationStatus == null}
	<div class="text-center">
		<LucideUserX class="mx-auto h-12 w-12 text-secondary-400" />
		<h3 class="mt-2 text-sm font-semibold text-gray-900">You don't have admin permission</h3>
		<p class="mt-1 text-sm text-gray-500">Get started by joining as admin.</p>
		<div class="mt-6">
			<a
				href="/profile/admin/join"
				type="button"
				class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
			>
				<svg
					class="-ml-0.5 mr-1.5 h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"
					/>
				</svg>
				Join admin
			</a>
		</div>
	</div>
{:else if applicationStatus.status == 'applied'}
	2
{:else if applicationStatus.status == 'blocked'}
	Sorry, you are blocked. plese contact the manager
{:else if applicationStatus.status == 'approved'}
	<div
		class="flex mb-6 items-center w-full space-y-4 md:space-x-4 md:space-y-0 flex-col md:flex-row"
	>
		<div class="w-full md:w-6/12">
			<div class="shadow-lg w-full bg-white relative overflow-hidden">
				<a href="/" class="w-full h-full block">
					<div class="flex items-center justify-between px-4 py-6 space-x-4">
						<div class="flex items-center">
							<span class="rounded-full relative p-5 bg-yellow-100">
								<svg
									width="40"
									fill="currentColor"
									height="40"
									class="text-yellow-500 h-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
									viewBox="0 0 1792 1792"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z"
									/>
								</svg>
							</span>
							<p class="text-sm ml-2 font-semibold border-b border-gray-200">Max earnings</p>
						</div>
						<div class="border-b border-gray-200 mt-6 md:mt-0 font-bold text-xl">
							0
							<span class="text-xs text-secondary-400">/¥10000</span>
						</div>
					</div>
					<div class="w-full h-1 bg-gray-100">
						<div class="w-0 h-full text-center text-xs text-white bg-green-400" />
					</div>
				</a>
			</div>
		</div>
		<div class="flex items-center w-full md:w-1/2 space-x-4">
			<div class="w-1/2">
				<div class="shadow-lg px-4 py-6 w-full bg-white relative">
					<p class="text-2xl font-bold">0</p>
					<p class="text-secondary-400 text-sm">Active projects</p>
				</div>
			</div>
			<div class="w-1/2">
				<div class="shadow-lg px-4 py-6 w-full bg-white relative">
					<p class="text-2xl font-bold">¥0</p>
					<p class="text-secondary-400 text-sm">Commission in approval</p>
					<span class="rounded-full absolute p-4 bg-purple-500 top-2 right-4">
						<svg
							width="40"
							fill="currentColor"
							height="40"
							class="text-white h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
							viewBox="0 0 1792 1792"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z"
							/>
						</svg>
					</span>
				</div>
			</div>
		</div>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
		<div class="w-full">
			<div class="shadow-lg px-4 py-6 w-full bg-white relative">
				<p class="text-sm w-max font-semibold border-b border-gray-200">My services</p>
				<div class="flex items-end space-x-2 my-6">
					<p class="text-5xl font-bold">12</p>
					<span class="text-green-500 text-xl font-bold flex items-center">
						<LucideArrowUp />
						22%
					</span>
				</div>
				<div>
					<div
						class="flex items-center pb-2 mb-2 text-sm sm:space-x-12 justify-between border-b border-gray-200"
					>
						<p>Applied</p>
						<div class="flex items-end text-xs">34</div>
					</div>
					<div
						class="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200"
					>
						<p>Approved</p>
						<div class="flex items-end text-xs">13</div>
					</div>
					<div class="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
						<p>Disabled</p>
						<div class="flex items-end text-xs">45</div>
					</div>
				</div>
			</div>
		</div>
		<div class="w-full">
			<div class="shadow-lg px-4 py-6 w-full bg-white relative">
				<p class="text-sm w-max font-semibold border-b border-gray-200">Orders</p>
				<div class="flex items-end space-x-2 my-6">
					<p class="text-5xl font-bold">23</p>
				</div>
				<div>
					<div
						class="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200"
					>
						<p>Order created</p>
						<div class="flex items-end text-xs">21</div>
					</div>
					<div
						class="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200"
					>
						<p>User paid</p>
						<div class="flex items-end text-xs">10</div>
					</div>
					<div class="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
						<p>Finished</p>
						<div class="flex items-end text-xs">434</div>
					</div>
				</div>
			</div>
		</div>

		<div class="w-full">
			<div class="shadow-lg px-4 py-6 w-full bg-white relative">
				<p class="text-sm w-max font-semibold border-b border-gray-200">New features</p>
				<div class="flex items-end space-x-2 my-6">
					<p class="text-5xl font-bold">12</p>
					<span class="text-red-500 text-xl font-bold flex items-center">
						<svg
							width="20"
							fill="currentColor"
							height="20"
							class="h-3 rotate-180 transform"
							viewBox="0 0 1792 1792"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"
							/>
						</svg>
						2%
					</span>
				</div>
				<div>
					<div
						class="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200"
					>
						<p>Down</p>
						<div class="flex items-end text-xs">
							34
							<span class="flex items-center">
								<svg
									width="20"
									fill="currentColor"
									height="20"
									class="h-3 text-red-500 rotate-180 transform"
									viewBox="0 0 1792 1792"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"
									/>
								</svg>
								22%
							</span>
						</div>
					</div>
					<div
						class="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200"
					>
						<p>Up</p>
						<div class="flex items-end text-xs">
							13
							<span class="flex items-center">
								<svg
									width="20"
									fill="currentColor"
									height="20"
									class="h-3 text-green-500"
									viewBox="0 0 1792 1792"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"
									/>
								</svg>
								12%
							</span>
						</div>
					</div>
					<div class="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
						<p>No developed</p>
						<div class="flex items-end text-xs">
							45
							<span class="flex items-center">
								<svg
									width="20"
									fill="currentColor"
									height="20"
									class="h-3 text-red-500 rotate-180 transform"
									viewBox="0 0 1792 1792"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"
									/>
								</svg>
								41%
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- <div class="w-full">
			<div class="shadow-lg px-4 py-6 w-full bg-white relative">
				<p class="text-sm w-max font-semibold border-b border-gray-200">Sign in</p>
				<div class="flex items-end space-x-2 my-6">
					<p class="text-5xl font-bold">16</p>
					<span class="text-red-500 text-xl font-bold flex items-center">
						<svg
							width="20"
							fill="currentColor"
							height="20"
							class="h-3 transform rotate-180"
							viewBox="0 0 1792 1792"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"
							/>
						</svg>
						14%
					</span>
				</div>
				<div>
					<div
						class="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200"
					>
						<p>America</p>
						<div class="flex items-end text-xs">
							43
							<span class="flex items-center">
								<svg
									width="20"
									fill="currentColor"
									height="20"
									class="h-3 text-red-500 rotate-180 transform"
									viewBox="0 0 1792 1792"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"
									/>
								</svg>
								12%
							</span>
						</div>
					</div>
					<div
						class="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200"
					>
						<p>Europe</p>
						<div class="flex items-end text-xs">
							133
							<span class="flex items-center">
								<svg
									width="20"
									fill="currentColor"
									height="20"
									class="h-3 text-green-500"
									viewBox="0 0 1792 1792"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"
									/>
								</svg>
								19%
							</span>
						</div>
					</div>
					<div class="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
						<p>Asia</p>
						<div class="flex items-end text-xs">
							23
							<span class="flex items-center">
								<svg
									width="20"
									fill="currentColor"
									height="20"
									class="h-3 text-red-500 rotate-180 transform"
									viewBox="0 0 1792 1792"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"
									/>
								</svg>
								4%
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="w-full">
			<div class="shadow-lg px-4 py-6 w-full bg-white relative">
				<p class="text-sm w-max font-semibold border-b border-gray-200">Sales</p>
				<div class="flex items-end space-x-2 my-6">
					<p class="text-5xl font-bold">9</p>
					<span class="text-green-500 text-xl font-bold flex items-center">
						<svg
							width="20"
							fill="currentColor"
							height="20"
							class="h-3"
							viewBox="0 0 1792 1792"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"
							/>
						</svg>
						34%
					</span>
				</div>
				<div>
					<div
						class="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200"
					>
						<p>Templates</p>
						<div class="flex items-end text-xs">
							345
							<span class="flex items-center">
								<svg
									width="20"
									fill="currentColor"
									height="20"
									class="h-3 text-red-500 rotate-180 transform"
									viewBox="0 0 1792 1792"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"
									/>
								</svg>
								12%
							</span>
						</div>
					</div>
					<div
						class="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200"
					>
						<p>Components</p>
						<div class="flex items-end text-xs">
							139
							<span class="flex items-center">
								<svg
									width="20"
									fill="currentColor"
									height="20"
									class="h-3 text-green-500"
									viewBox="0 0 1792 1792"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"
									/>
								</svg>
								10%
							</span>
						</div>
					</div>
					<div class="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
						<p>Icons</p>
						<div class="flex items-end text-xs">
							421
							<span class="flex items-center">
								<svg
									width="20"
									fill="currentColor"
									height="20"
									class="h-3 text-red-500 rotate-180 transform"
									viewBox="0 0 1792 1792"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"
									/>
								</svg>
								4%
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="w-full">
			<div class="shadow-lg px-4 py-6 w-full bg-white relative">
				<p class="text-sm w-max font-semibold border-b border-gray-200">Maintenance</p>
				<div class="flex items-end space-x-2 my-6">
					<p class="text-5xl font-bold">15</p>
					<span class="text-green-500 text-xl font-bold flex items-center">
						<svg
							width="20"
							fill="currentColor"
							height="20"
							class="h-3"
							viewBox="0 0 1792 1792"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"
							/>
						</svg>
						34%
					</span>
				</div>
				<div>
					<div
						class="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200"
					>
						<p>Cloud</p>
						<div class="flex items-end text-xs">
							123
							<span class="flex items-center">
								<svg
									width="20"
									fill="currentColor"
									height="20"
									class="h-3 text-red-500 rotate-180 transform"
									viewBox="0 0 1792 1792"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"
									/>
								</svg>
								22%
							</span>
						</div>
					</div>
					<div
						class="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200"
					>
						<p>Infra</p>
						<div class="flex items-end text-xs">
							134
							<span class="flex items-center">
								<svg
									width="20"
									fill="currentColor"
									height="20"
									class="h-3 text-green-500"
									viewBox="0 0 1792 1792"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"
									/>
								</svg>
								9%
							</span>
						</div>
					</div>
					<div class="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
						<p>Office</p>
						<div class="flex items-end text-xs">
							23
							<span class="flex items-center">
								<svg
									width="20"
									fill="currentColor"
									height="20"
									class="h-3 text-green-500"
									viewBox="0 0 1792 1792"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"
									/>
								</svg>
								41%
							</span>
						</div>
					</div>
				</div>
			</div>
		</div> -->
	</div>
{/if}
