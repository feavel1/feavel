<script lang="ts">
	import ServicePublicCard from '$lib/components/ui/services/ServicePublicCard.svelte';
	import { ListBox, ListBoxItem, popup, type PopupSettings } from '@skeletonlabs/skeleton';

	export let data;

	let { transformedServices, supabase } = data;
	$: ({ transformedServices, supabase } = data);

	let all_tags: string[] = [];

	$: all_tags = [...new Set(transformedServices!.map((x) => x.category_name).flat())];

	let selectable: string[] = [];

	$: if (selectable) filtered(selectable);

	let filteredArray: any;

	function filtered(selectable: string[]) {
		// filter the array with "selectable", if [] is empty return everything
		filteredArray =
			selectable.length > 0
				? transformedServices!.filter((item) =>
						item.category_name.some((cat) => selectable.includes(cat))
					)
				: transformedServices!;
		return filteredArray;
	}

	const categoryPopup: PopupSettings = {
		event: 'click',
		target: 'categoryPopup',
		placement: 'bottom'
	};

	import * as m from '$paraglide/messages';
</script>

<main class="pt-14">
	<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
		<div class="py-24 text-center">
			<h1 class="text-4xl font-bold tracking-tight">{m.new_services()}</h1>
			<p class="mx-auto mt-4 max-w-3xl text-base text-gray-500">
				{m.thoughtfully_designed_for()}
			</p>
		</div>

		<hr />

		<!-- Filters -->
		<section aria-labelledby="filter-heading" class="pt-6">
			<h2 id="filter-heading" class="sr-only">Product filters</h2>

			<div class="flex items-center justify-between">
				<label class="label relative inline-block text-left">
					<select class="select rounded-md">
						<option value="1">{m.newest()}</option>
						<option value="2">Most Viewed</option>
						<option value="3">Price: High to Low</option>
						<option value="4">Prise: Low to High</option>
					</select>
				</label>

				<div class="flex sm:items-baseline sm:space-x-8">
					<div id="menu" class="relative inline-block text-left">
						<button class="btn variant-filled" use:popup={categoryPopup}>{m.category()}</button>

						<div
							class="p-4 w-72 shadow-2xl bg-secondary-50 dark:bg-secondary-800 dark:text-white rounded-lg z-50"
							data-popup="categoryPopup"
						>
							<ListBox
								multiple={true}
								active="variant-filled-primary"
								hover="hover:variant-soft-primary"
							>
								{#each all_tags as category}
									<ListBoxItem bind:group={selectable} name="medium" value={category}>
										{category}
									</ListBoxItem>
								{/each}
							</ListBox>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Product grid -->
		<section aria-labelledby="products-heading" class="mt-8">
			<h2 id="products-heading" class="sr-only">Products</h2>
			<div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
				{#each filteredArray as service}
					<ServicePublicCard {service} {supabase} />
				{/each}
			</div>
		</section>
	</div>
</main>
