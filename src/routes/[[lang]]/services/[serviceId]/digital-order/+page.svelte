<script lang="ts">
	import Time from 'svelte-time';
	import { generateUUID } from '$lib/utils/helpers';

	import * as m from '$paraglide/messages';
	import { redirect } from '@sveltejs/kit';
	import { goto } from '$app/navigation';

	export let data: any;

	let { transformedService, supabase, userdata, service } = data;
	$: ({ transformedService, supabase, userdata } = data);

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

	$: if (transformedService?.cover_url) downloadImage(transformedService.cover_url);

	const createOrder = async () => {
		// create order
		const { error } = await supabase.from('digital_order').insert({
			id: genOrdNumber,
			description: description,
			service_id: transformedService.id,
			user_id: userdata.id
		});
		if (error) throw error;
		goto('/profile/reports');
	};

	const genOrdNumber = generateUUID();

	let phone: String = '',
		email: String = '',
		description: String = '';
</script>

<div class="mx-auto px-4 py-24 sm:px-6 lg:max-w-7xl lg:px-8">
	<h1 class="sr-only">Checkout</h1>

	<div class="mx-auto grid max-w-lg grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
		<div class="mx-auto w-full max-w-lg">
			<h2 class="sr-only">Order summary</h2>

			<div class="flow-root">
				<ul role="list" class="-my-6 divide-y divide-gray-200">
					<li class="flex space-x-6 py-6">
						<img
							src={publicUrl}
							alt="Front of women&#039;s basic tee in heather gray."
							class="h-24 w-24 flex-none rounded-md bg-gray-100 object-cover object-center"
						/>
						<div class="flex-auto">
							<div class="space-y-1 sm:flex sm:items-start sm:justify-between sm:space-x-6">
								<div class="flex-auto space-y-1 text-sm font-medium">
									<h3 class="">
										<a href="/services/{transformedService.id}">{transformedService.name}</a>
									</h3>
									<p class="">{transformedService.price} ¥</p>
									<p class="hidden sm:block">
										<Time timestamp={transformedService.created_at} />
									</p>
									<p class="hidden sm:block">{transformedService.created_by.name}</p>
								</div>
							</div>
						</div>
					</li>

					<!-- More products... -->
				</ul>
			</div>

			<dl class="mt-10 space-y-6 text-sm font-medium">
				<div class="flex flex-col gap-3 pt-6">
					<h3 class="text-sm font-medium text-surface-900-50-token">Description</h3>
					<div class="whitespace-pre-line sm:mt-2">
						{transformedService.description}
					</div>
				</div>
				<hr class="!border-t-2" />
				<div class="flex justify-between pt-6">
					<dt>Taxes</dt>
					<dd class="">0 ¥</dd>
				</div>
				<hr class="!border-t-2" />

				<div class="flex justify-between pt-6">
					<dt class="text-base">Total</dt>
					<dd class="text-base">{transformedService.price} ¥</dd>
				</div>
			</dl>
		</div>

		<div class="mx-auto w-full max-w-lg">
			<label class="label">
				<span>{m.description()}</span>
				<input
					class="input"
					type="text"
					placeholder="Input your order requirements"
					bind:value={description}
				/>
			</label>
			<button type="submit" class="btn bg-purple-500 w-full mt-10" on:click={createOrder}>
				{m.create_order()}
			</button>
		</div>
	</div>
</div>
