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

	const popupFeatured: PopupSettings = {
		event: 'click',
		target: 'popupFeatured',
		placement: 'bottom'
	};
</script>

<main class="pt-14">
	<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
		<div class="py-24 text-center">
			<h1 class="text-4xl font-bold tracking-tight">New Services</h1>
			<p class="mx-auto mt-4 max-w-3xl text-base text-gray-500">
				Thoughtfully designed for the musicians, buisneses, and artists.
			</p>
		</div>

		<hr />

		<!-- Filters -->
		<section aria-labelledby="filter-heading" class="pt-6">
			<h2 id="filter-heading" class="sr-only">Product filters</h2>

			<div class="flex items-center justify-between">
				<label class="label relative inline-block text-left">
					<select class="select rounded-md">
						<option value="1">Newest</option>
						<option value="2">Most Viewed</option>
						<option value="3">Price: High to Low</option>
						<option value="4">Prise: Low to High</option>
					</select>
				</label>

				<div class="flex sm:items-baseline sm:space-x-8">
					<div id="menu" class="relative inline-block text-left">
						<button class="btn variant-filled" use:popup={popupFeatured}>Category</button>

						<div class="card p-4 w-72 shadow-xl" data-popup="popupFeatured">
							<ListBox multiple>
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

		<!-- <section
			aria-labelledby="featured-heading"
			class="relative mt-16 overflow-hidden rounded-lg lg:h-96"
		>
			<div class="absolute inset-0">
				<img
					src="https://tailwindui.com/img/ecommerce-images/category-page-01-featured-collection.jpg"
					alt=""
					class="h-full w-full object-cover object-center"
				/>
			</div>
			<div aria-hidden="true" class="relative h-96 w-full lg:hidden"></div>
			<div aria-hidden="true" class="relative h-32 w-full lg:hidden"></div>
			<div
				class="absolute inset-x-0 bottom-0 rounded-bl-lg rounded-br-lg bg-black bg-opacity-75 p-6 backdrop-blur backdrop-filter sm:flex sm:items-center sm:justify-between lg:inset-x-auto lg:inset-y-0 lg:w-96 lg:flex-col lg:items-start lg:rounded-br-none lg:rounded-tl-lg"
			>
				<div>
					<h2 id="featured-heading" class="text-xl font-bold text-white">Buisiness Entery</h2>
					<p class="mt-1 text-sm text-gray-300">
						If you need a buisneses design, contact me with your details.
					</p>
				</div>
				<a
					href="#"
					class="mt-6 flex flex-shrink-0 items-center justify-center rounded-md border border-white border-opacity-25 bg-white bg-opacity-0 px-4 py-3 text-base font-medium text-white hover:bg-opacity-10 sm:ml-8 sm:mt-0 lg:ml-0 lg:w-full"
					>View the collection</a
				>
			</div>
		</section> -->

		<!-- <section aria-labelledby="more-products-heading" class="mt-16 pb-24">
			<h2 id="more-products-heading" class="sr-only">More products</h2>

			<div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
				<a href="#" class="group">
					<div
						class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2"
					>
						<img
							src="https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-07.jpg"
							alt="Close up of long kettle spout pouring boiling water into pour-over coffee mug with frothy coffee."
							class="h-full w-full object-cover object-center group-hover:opacity-75"
						/>
					</div>
					<div class="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
						<h3>Electric Kettle</h3>
						<p>$149</p>
					</div>
					<p class="mt-1 text-sm italic text-gray-500">Black</p>
				</a>
				<a href="#" class="group">
					<div
						class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2"
					>
						<img
							src="https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-08.jpg"
							alt="Extra large black leather workspace pad on desk with computer, wooden shelf, desk organizer, and computer peripherals."
							class="h-full w-full object-cover object-center group-hover:opacity-75"
						/>
					</div>
					<div class="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
						<h3>Leather Workspace Pad</h3>
						<p>$165</p>
					</div>
					<p class="mt-1 text-sm italic text-gray-500">Black</p>
				</a>
				<a href="#" class="group">
					<div
						class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2"
					>
						<img
							src="https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-09.jpg"
							alt="Leather long wallet held open with hand-stitched card dividers, full-length bill pocket, and simple tab closure."
							class="h-full w-full object-cover object-center group-hover:opacity-75"
						/>
					</div>
					<div class="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
						<h3>Leather Long Wallet</h3>
						<p>$118</p>
					</div>
					<p class="mt-1 text-sm italic text-gray-500">Natural</p>
				</a>
			</div>
		</section> -->
	</div>
</main>
