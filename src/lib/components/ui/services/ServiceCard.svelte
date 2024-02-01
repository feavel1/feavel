<script lang="ts">
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

	$: if (service) downloadImage(service.cover_url);
</script>

<li class="p-4 sm:p-6">
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
</li>
