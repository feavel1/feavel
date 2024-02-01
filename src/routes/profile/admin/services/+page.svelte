<script lang="ts">
	import ServiceCard from '$lib/components/ui/services/ServiceCard.svelte';
	import { LucideBadge, LucideBadgeCheck, LucideFolderPlus, LucidePlus } from 'lucide-svelte';
	export let data;

	let { services, supabase } = data;
	$: ({ services, supabase } = data);

	function serFilter(arr: Array<typeof services>, condition: typeof services.status) {
		return arr.filter((service) => service.status == condition);
	}
</script>

{#if services == null}
	<div class="text-center">
		<LucideFolderPlus class="mx-auto h-12 w-12 text-gray-400" />
		<h3 class="mt-2 text-sm font-semibold text-gray-900">You have no services available</h3>
		<p class="mt-1 text-sm text-gray-500">Get started by creating a new service.</p>
		<div class="mt-6">
			<a
				href="/profile/admin/services/create"
				type="button"
				class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
			>
				<LucidePlus class="-ml-0.5 mr-1.5 h-5 w-5" />
				New Service
			</a>
		</div>
	</div>
{:else}
	<div class="mx-auto max-w-7xl sm:px-2 lg:px-8">
		<div class="mx-auto max-w-2xl px-4 lg:max-w-4xl lg:px-0">
			<div class="flex items-center">
				<LucideBadgeCheck />
				<p class="ml-2 text-sm font-medium text-gray-500 first-letter:capitalize"></p>
				<h1 class="text-2xl font-bold tracking-tight sm:text-3xl">Services Approved</h1>
			</div>
			<p class="mt-2 text-sm text-gray-500">
				Check the status of recently created services, manage visability, and create similar
				services.
			</p>
		</div>
	</div>

	<div class="mt-10">
		<div class="mx-auto max-w-7xl sm:px-2 lg:px-8">
			<div class="mx-auto max-w-2xl space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
				<div
					class="border-b border-t border-gray-200 dark:bg-surface-800 bg-white shadow-sm sm:rounded-lg sm:border"
				>
					<div
						class="flex items-center border-b border-gray-200 p-4 sm:grid sm:grid-cols-4 sm:gap-x-6 sm:p-6"
					>
						<dl
							class="grid flex-1 grid-cols-2 gap-x-6 text-sm sm:col-span-3 sm:grid-cols-3 lg:col-span-2"
						>
							<div>
								<dt class="font-medium">Total amount</dt>
								<dd class="mt-1 text-gray-500">{serFilter(services, 'approved').length}</dd>
							</div>
						</dl>
					</div>

					<!-- Products -->
					<h4 class="sr-only">Items</h4>
					<ul role="list" class="divide-y divide-gray-200">
						{#each serFilter(services, 'approved') as service}
							<ServiceCard {service} {supabase} />
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</div>

	<hr class="my-10" />

	<div class="mx-auto max-w-7xl sm:px-2 lg:px-8">
		<div class="mx-auto max-w-2xl px-4 lg:max-w-4xl lg:px-0">
			<div class="flex items-center">
				<LucideBadge />
				<p class="ml-2 text-sm font-medium text-gray-500 first-letter:capitalize"></p>
				<h1 class="text-2xl font-bold tracking-tight sm:text-3xl">Services Applied</h1>
			</div>
			<p class="mt-2 text-sm text-gray-500">
				Check the status of recently created services, manage visability, and create similar
				services.
			</p>
		</div>
	</div>

	<div class="mt-10">
		<div class="mx-auto max-w-7xl sm:px-2 lg:px-8">
			<div class="mx-auto max-w-2xl space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
				<div
					class="border-b border-t border-gray-200 bg-white dark:bg-surface-800 shadow-sm sm:rounded-lg sm:border"
				>
					<div
						class="flex items-center border-b border-gray-200 p-4 sm:grid sm:grid-cols-4 sm:gap-x-6 sm:p-6"
					>
						<dl
							class="grid flex-1 grid-cols-2 gap-x-6 text-sm sm:col-span-3 sm:grid-cols-3 lg:col-span-2"
						>
							<div>
								<dt class="font-medium">Total amount</dt>
								<dd class="mt-1 text-gray-500">{serFilter(services, 'applied').length}</dd>
							</div>
						</dl>
					</div>

					<!-- Products -->
					<h4 class="sr-only">Items</h4>
					<ul role="list" class="divide-y divide-gray-200">
						{#each serFilter(services, 'applied') as service}
							<ServiceCard {supabase} {service} />
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</div>

	<hr class="my-10" />

	<div class="text-center">
		<LucideFolderPlus class="mx-auto h-12 w-12 text-gray-400" />
		<h3 class="mt-2 text-sm font-semibold text-gray-900">Add new service</h3>
		<p class="mt-1 text-sm text-gray-500">Creating a new service.</p>
		<div class="mt-6">
			<a
				href="/profile/admin/services/create"
				type="button"
				class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
			>
				<LucidePlus class="-ml-0.5 mr-1.5 h-5 w-5" />
				New Service
			</a>
		</div>
	</div>
{/if}
