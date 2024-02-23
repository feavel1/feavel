<script lang="ts">
	import Avatar from '$lib/components/ui/User/Avatar.svelte';
	import { LucideArrowUp, LucideUserX, LucideCheckCheck, LucideDollarSign } from 'lucide-svelte';

	export let data;

	let { supabase, session, studio, userdata, services } = data;
	$: ({ session, supabase, studio, userdata, services } = data);

	function serLenCalc(arr: Array<typeof services>, condition: typeof services.status) {
		return arr.filter((service) => service.status == condition).length;
	}
</script>

{#if studio == null}
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
{:else if studio.status == 'applied'}
	<div class="rounded-md bg-green-50 p-4">
		<div class="flex">
			<div class="flex-shrink-0">
				<LucideCheckCheck class="stroke-success-800" />
			</div>
			<div class="ml-3">
				<p class="font-medium text-success-800">Successfully uploaded. Plese wait for review</p>
			</div>
		</div>
	</div>
{:else if studio.status == 'blocked'}
	Sorry, you are blocked. plese contact the manager.
{:else if studio.status == 'approved'}
	<div class="flex">
		<Avatar {supabase} uploadable={false} bind:url={userdata.avatar_url} size={20} />
		<div class="ml-4">
			<div class="label">
				<div class="h3">{studio.name}</div>
			</div>

			<div class="label">
				<div class="">{studio.description}</div>
			</div>
		</div>
	</div>

	<hr class="my-3" />

	<div
		class="flex mb-6 items-center w-full space-y-4 md:space-x-4 md:space-y-0 flex-col md:flex-row"
	>
		<div class="w-full md:w-6/12">
			<div class="shadow-lg w-full bg-secondary-50-900-token relative overflow-hidden">
				<a href="/" class="w-full h-full block">
					<div class="flex items-center justify-between px-4 py-6 space-x-4">
						<div class="flex items-center">
							<span class="rounded-full relative p-5 bg-yellow-100">
								<LucideDollarSign
									class="text-yellow-500 h-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
								/>
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
				<div class="shadow-lg px-4 py-6 w-full bg-secondary-50-900-token relative">
					<p class="text-2xl font-bold">0</p>
					<p class="text-secondary-400 text-sm">Active projects</p>
				</div>
			</div>
			<div class="w-1/2">
				<div class="shadow-lg px-4 py-6 w-full bg-secondary-50-900-token relative">
					<p class="text-2xl font-bold">¥0</p>
					<p class="text-secondary-400 text-sm">Commission in approval</p>
					<span class="rounded-full absolute p-4 bg-purple-500 top-2 right-4">
						<LucideDollarSign
							class="text-white h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
						/>
					</span>
				</div>
			</div>
		</div>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
		<a href="/profile/admin/services" class="w-full">
			<div class="shadow-lg px-4 py-6 w-full bg-secondary-50-900-token relative">
				<p class="text-sm w-max font-semibold border-b border-gray-200">My services</p>
				<div class="flex items-end space-x-2 my-6">
					<p class="text-5xl font-bold">{services.length}</p>
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
						<div class="flex items-end text-xs">{serLenCalc(services, 'applied')}</div>
					</div>
					<div
						class="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200"
					>
						<p>Approved</p>
						<div class="flex items-end text-xs">{serLenCalc(services, 'approved')}</div>
					</div>
					<div class="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
						<p>Blocked</p>
						<div class="flex items-end text-xs">{serLenCalc(services, 'blocked')}</div>
					</div>
				</div>
			</div>
		</a>

		<a href="/profile/admin/orders" class="w-full">
			<div class="shadow-lg px-4 py-6 w-full bg-secondary-50-900-token relative">
				<p class="text-sm w-max font-semibold border-b border-gray-200">Orders</p>
				<div class="flex items-end space-x-2 my-6">
					<p class="text-5xl font-bold">23</p>
				</div>
				<div>
					<div
						class="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200"
					>
						<p>Orders placed</p>
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
		</a>

		<a href="/profile/admin/orders" class="w-full">
			<div class="shadow-lg px-4 py-6 w-full bg-secondary-50-900-token relative">
				<p class="text-sm w-max font-semibold border-b border-gray-200">Refund History</p>
				<div class="flex items-end space-x-2 my-6">
					<p class="text-5xl font-bold">12</p>
				</div>
				<div>
					<div
						class="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200"
					>
						<p>Refund started</p>
						<div class="flex items-end text-xs">34</div>
					</div>
					<div
						class="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200"
					>
						<p>Refund finished</p>
						<div class="flex items-end text-xs">13</div>
					</div>
					<div class="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
						<p>Order Canceled</p>
						<div class="flex items-end text-xs">45</div>
					</div>
				</div>
			</div>
		</a>
	</div>
{/if}
