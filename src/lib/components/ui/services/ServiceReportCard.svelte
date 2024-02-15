<script lang="ts">
	// This card is used in /profile/reports

	import type { SupabaseClient } from '@supabase/supabase-js';
	export let service: any;
	export let supabase: SupabaseClient;

	let publicUrl: string;

	const downloadImage = async (path: string) => {
		try {
			const { data, error } = await supabase.storage.from('storage').download(path);
			if (error) {
				throw error;
			}
			const url = URL.createObjectURL(data);
			publicUrl = url;
		} catch (error) {
			if (error instanceof Error) {
				console.log('Error downloading image: ', error.message);
			}
		}
	};

	let iconColor = 'text-yellow-500';
	if (service.status == 'approved') {
		iconColor = 'text-green-500';
	}

	$: if (service) downloadImage(service.cover_url);
</script>

<!-- <li class="p-4 sm:p-6">
	<div class="flex items-center sm:items-start">
		<div class="w-20 flex-shrink-0 overflow-hidden rounded-lg bg-gray-200 sm:w-40">
			<img
				src={publicUrl}
				alt="Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps."
				class="h-full w-full object-contain object-center"
			/>
		</div>
		<div class="mx-6 flex-1 text-sm">
			<div class="font-medium sm:flex sm:justify-between">
				<h5>{service.name}</h5>
				<p class="mt-2 sm:mt-0">{service.price} ¥</p>
			</div>
			<p class="whitespace-pre-line hidden text-gray-500 sm:mt-2 sm:block">
				{service.description}
			</p>
		</div>
	</div>

	<div class="mt-6 sm:flex sm:justify-between">
		<div class="flex items-center">
			<svg class="h-5 w-5 {iconColor}" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
					clip-rule="evenodd"
				/>
			</svg>
			<p class="ml-2 text-sm font-medium text-gray-500 first-letter:capitalize">{service.status}</p>
		</div>

		<div
			class="mt-6 flex items-center space-x-4 divide-x divide-gray-200 border-t border-gray-200 pt-4 text-sm font-medium sm:ml-4 sm:mt-0 sm:border-none sm:pt-0"
		>
			<div class="flex flex-1 justify-center">
				<a
					href="/profile/admin/services/{service.id}"
					class="whitespace-nowrap text-indigo-600 hover:text-indigo-500">Edit Service</a
				>
			</div>
			<div class="flex flex-1 justify-center pl-4">
				<div class="whitespace-nowrap text-indigo-600 hover:text-indigo-500">Share</div>
			</div>
		</div>
	</div>
</li> -->

<div class="border-b border-t border-gray-200 bg-white shadow-sm sm:rounded-lg sm:border">
	<h3 class="sr-only">
		Order placed on <time datetime="2021-07-06">Jul 6, 2021</time>
	</h3>

	<div
		class="flex items-center border-b border-gray-200 p-4 sm:grid sm:grid-cols-4 sm:gap-x-6 sm:p-6"
	>
		<dl class="grid flex-1 grid-cols-2 gap-x-6 text-sm sm:col-span-3 sm:grid-cols-3 lg:col-span-2">
			<div>
				<dt class="font-medium text-gray-900">Order number</dt>
				<dd class="mt-1 text-gray-500">WU88191111</dd>
			</div>
			<div class="hidden sm:block">
				<dt class="font-medium text-gray-900">Date placed</dt>
				<dd class="mt-1 text-gray-500">
					<time datetime="2021-07-06">Jul 6, 2021</time>
				</dd>
			</div>
			<div>
				<dt class="font-medium text-gray-900">Total amount</dt>
				<dd class="mt-1 font-medium text-gray-900">$160.00</dd>
			</div>
		</dl>

		<div class="relative flex justify-end lg:hidden">
			<div class="flex items-center">
				<button
					type="button"
					class="-m-2 flex items-center p-2 text-gray-400 hover:text-gray-500"
					id="menu-0-button"
					aria-expanded="false"
					aria-haspopup="true"
				>
					<span class="sr-only">Options for order WU88191111</span>
					<svg
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
						/>
					</svg>
				</button>
			</div>

			<!--
                  Dropdown menu, show/hide based on menu state.

                  Entering: "transition ease-out duration-100"
                    From: "transform opacity-0 scale-95"
                    To: "transform opacity-100 scale-100"
                  Leaving: "transition ease-in duration-75"
                    From: "transform opacity-100 scale-100"
                    To: "transform opacity-0 scale-95"
                -->
			<div
				class="absolute right-0 z-10 mt-2 w-40 origin-bottom-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
				role="menu"
				aria-orientation="vertical"
				aria-labelledby="menu-0-button"
				tabindex="-1"
			>
				<div class="py-1" role="none">
					<!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
					<a
						href="#"
						class="text-gray-700 block px-4 py-2 text-sm"
						role="menuitem"
						tabindex="-1"
						id="menu-0-item-0">View</a
					>
					<a
						href="#"
						class="text-gray-700 block px-4 py-2 text-sm"
						role="menuitem"
						tabindex="-1"
						id="menu-0-item-1">Invoice</a
					>
				</div>
			</div>
		</div>

		<div class="hidden lg:col-span-2 lg:flex lg:items-center lg:justify-end lg:space-x-4">
			<a
				href="#"
				class="flex items-center justify-center rounded-md border border-gray-300 bg-white px-2.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
			>
				<span>View Order</span>
				<span class="sr-only">WU88191111</span>
			</a>
			<a
				href="#"
				class="flex items-center justify-center rounded-md border border-gray-300 bg-white px-2.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
			>
				<span>View Invoice</span>
				<span class="sr-only">for order WU88191111</span>
			</a>
		</div>
	</div>

	<!-- Products -->
	<h4 class="sr-only">Items</h4>
	<ul role="list" class="divide-y divide-gray-200">
		<li class="p-4 sm:p-6">
			<div class="flex items-center sm:items-start">
				<div class="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-gray-200 sm:h-40 sm:w-40">
					<img
						src="https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-01.jpg"
						alt="Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps."
						class="h-full w-full object-cover object-center"
					/>
				</div>
				<div class="ml-6 flex-1 text-sm">
					<div class="font-medium text-gray-900 sm:flex sm:justify-between">
						<h5>Micro Backpack</h5>
						<p class="mt-2 sm:mt-0">$70.00</p>
					</div>
					<p class="hidden text-gray-500 sm:mt-2 sm:block">
						Are you a minimalist looking for a compact carry option? The Micro Backpack is the
						perfect size for your essential everyday carry items. Wear it like a backpack or carry
						it like a satchel for all-day use.
					</p>
				</div>
			</div>

			<div class="mt-6 sm:flex sm:justify-between">
				<div class="flex items-center">
					<svg
						class="h-5 w-5 text-green-500"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
							clip-rule="evenodd"
						/>
					</svg>
					<p class="ml-2 text-sm font-medium text-gray-500">
						Delivered on <time datetime="2021-07-12">July 12, 2021</time>
					</p>
				</div>

				<div
					class="mt-6 flex items-center space-x-4 divide-x divide-gray-200 border-t border-gray-200 pt-4 text-sm font-medium sm:ml-4 sm:mt-0 sm:border-none sm:pt-0"
				>
					<div class="flex flex-1 justify-center">
						<a href="#" class="whitespace-nowrap text-indigo-600 hover:text-indigo-500"
							>View product</a
						>
					</div>
					<div class="flex flex-1 justify-center pl-4">
						<a href="#" class="whitespace-nowrap text-indigo-600 hover:text-indigo-500">Buy again</a
						>
					</div>
				</div>
			</div>
		</li>

		<!-- More products... -->
	</ul>
</div>
