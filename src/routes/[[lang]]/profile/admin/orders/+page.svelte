<script>
	import ServiceAdminOrder from '$lib/components/ui/services/ServiceAdminOrder.svelte';
	import * as m from '$paraglide/messages';

	export let data;

	let { ordered_services, supabase } = data;
	$: ({ ordered_services, supabase } = data);
</script>

<div class="">
	<div class="">
		<div class="mx-auto max-w-7xl sm:px-2 lg:px-8">
			<div class="mx-auto max-w-2xl px-4 lg:max-w-4xl lg:px-0">
				<h1 class="text-2xl font-bold tracking-tight sm:text-3xl">{m.studio_orders()}</h1>
				<p class="mt-2 text-sm text-gray-500">
					Your studio's orders are located right here. You can manage your clients from here.
				</p>
			</div>
		</div>
		<div class="mt-16">
			<h2 class="sr-only">Recent orders</h2>
			<div class="mx-auto max-w-7xl sm:px-2 lg:px-8">
				<div class="mx-auto max-w-2xl space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
					{#each ordered_services as service}
						<ServiceAdminOrder {supabase} {service} />
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
