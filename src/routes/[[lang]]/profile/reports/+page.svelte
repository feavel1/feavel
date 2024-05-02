<script lang="ts">
	import ServiceReportCard from '$lib/components/ui/services/ServiceReportCard.svelte';
	import { LucidePlus, LucideReceipt } from 'lucide-svelte';
	import * as m from '$paraglide/messages';

	export let data;

	let { supabase, digital_purchase } = data;
	$: ({ supabase, digital_purchase } = data);
</script>

{#if digital_purchase.length == 0}
	<div class="text-center">
		<LucideReceipt class="mx-auto h-12 w-12 text-gray-400" />
		<h3 class="mt-2 text-sm font-semibold text-gray-900">{m.no_reports()}</h3>
		<p class="mt-1 text-sm text-gray-500">{m.no_reports_description()}</p>
		<div class="mt-6">
			<a
				href="/services"
				type="button"
				class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
			>
				<LucidePlus class="-ml-0.5 mr-1.5 h-5 w-5" />
				Create New Order
			</a>
		</div>
	</div>
{:else}
	<div class="">
		<div class="">
			<div class="mx-auto max-w-7xl sm:px-2 lg:px-8">
				<div class="mx-auto max-w-2xl px-4 lg:max-w-4xl lg:px-0">
					<h1 class="text-2xl font-bold tracking-tight sm:text-3xl">Reports</h1>
					<p class="mt-2 text-sm text-gray-500">
						Check the status of recent orders, manage returns, and discover similar products.
					</p>
				</div>
			</div>

			<div class="mt-16">
				<h2 class="sr-only">Recent orders</h2>
				<div class="mx-auto max-w-7xl sm:px-2 lg:px-8">
					<div class="mx-auto max-w-2xl space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
						{#each digital_purchase as service}
							<ServiceReportCard {supabase} {service} />
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
