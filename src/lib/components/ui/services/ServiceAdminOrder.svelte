<script lang="ts">
	// This card is used in /admin/orders

	import { popup, type PopupSettings } from '@skeletonlabs/skeleton';
	import type { SupabaseClient } from '@supabase/supabase-js';

	import { LucideShoppingCart } from 'lucide-svelte';
	import Time from 'svelte-time';
	export let service: any;
	export let supabase: SupabaseClient;

	let publicUrl: string;

	const popupFeatured: PopupSettings = {
		event: 'click',
		target: 'popupFeatured',
		placement: 'bottom'
	};

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

	$: if (service) downloadImage(service.service_id.cover_url);
</script>

<div
	class="border-b border-t border-gray-200 bg-surface-100-800-token shadow-sm sm:rounded-lg sm:border"
>
	<h3 class="sr-only">
		Order placed on <Time timestamp={service.created_at} />
	</h3>

	<div
		class="flex items-center border-b border-gray-200 p-4 sm:grid sm:grid-cols-4 sm:gap-x-6 sm:p-6"
	>
		<dl class="grid flex-1 grid-cols-2 gap-x-6 text-sm col-span-3">
			<div>
				<dt class="font-medium text-surface-900-50-token">Order number</dt>
				<dd class="mt-1 text-gray-500">{service.id}</dd>
			</div>
			<div class="hidden sm:block">
				<dt class="font-medium text-surface-900-50-token">Date placed</dt>
				<dd class="mt-1 text-gray-500">
					<Time timestamp={service.created_at} />
				</dd>
			</div>
		</dl>

		<div class="relative flex justify-end">
			<div id="menu" class="relative inline-block text-left">
				<button
					class="-m-2 flex items-center p-2 text-gray-400 hover:text-gray-500"
					use:popup={popupFeatured}
				>
					<LucideShoppingCart class="h-6 w-6" />
				</button>

				<div class="p-4 w-72 shadow-2xl bg-surface-200 rounded-lg z-50" data-popup="popupFeatured">
					<a
						href="/services/{service.service_id}"
						class="text-gray-700 block px-4 py-2 text-sm"
						role="menuitem"
						tabindex="-1"
						id="menu-0-item-0"
						>View Product
					</a>

					<a
						href="/services/{service.service_id.id}/confirm-payment"
						class="text-gray-700 block px-4 py-2 text-sm"
						role="menuitem"
						tabindex="-1"
						id="menu-0-item-1">Buy again</a
					>
				</div>
			</div>
		</div>
	</div>

	<ul role="list" class="divide-y divide-gray-200">
		<li class="p-4 sm:p-6">
			<div class="flex items-center sm:items-start">
				<div class="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-gray-200 sm:h-40 sm:w-40">
					<img
						src={publicUrl}
						alt="Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps."
						class="h-full w-full object-cover object-center"
					/>
				</div>
				<div class="ml-6 flex-1 text-sm">
					<div class="font-medium text-surface-900-50-token sm:flex sm:justify-between">
						<h5>{service.service_id.name}</h5>
						<p class="mt-2 sm:mt-0">{service.price} ¥</p>
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
						Serivice {service.payment_status} on
						<time datetime="2021-07-12">July 12, 2021</time>
					</p>
				</div>

				<div
					class="mt-6 flex items-center space-x-4 divide-x divide-gray-200 border-t border-gray-200 pt-4 text-sm font-medium sm:ml-4 sm:mt-0 sm:border-none sm:pt-0"
				>
					<div class="flex flex-1 justify-center">
						<a
							href="/profile/reports/{service.id}"
							class="whitespace-nowrap text-indigo-600 hover:text-indigo-500"
						>
							Manage order
						</a>
					</div>
					<div class="flex flex-1 justify-center pl-4">
						<a href="/about" class="whitespace-nowrap text-indigo-600 hover:text-indigo-500">
							Contact Administrator
						</a>
					</div>
				</div>
			</div>
		</li>
	</ul>
</div>
