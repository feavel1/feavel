<script lang="ts">
	import Time from 'svelte-time';
	import { generateUUID, getURL } from '$lib/utils/helpers';

	export let data: any;

	let { transformedService, supabase } = data;
	$: ({ transformedService, supabase } = data);

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

	let wechatForm;
	let alipayForm;
	const genOrdNumber = generateUUID();
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
				<div class="flex justify-between">
					<dt>Taxes</dt>
					<dd class="">0 ¥</dd>
				</div>

				<div class="flex justify-between border-t border-gray-200 pt-6">
					<dt class="text-base">Total</dt>
					<dd class="text-base">{transformedService.price} ¥</dd>
				</div>
			</dl>
		</div>

		<div class="mx-auto w-full max-w-lg">
			<form action="?/payOnline" bind:this={wechatForm} method="POST">
				<input type="hidden" name="type" value="wxpay" />
				<input type="hidden" name="out_trade_no" value={genOrdNumber} />
				<input type="hidden" name="service_id" value={transformedService.id} />
				<input type="hidden" name="money" value={transformedService.price} />
				<input type="hidden" name="device" value="pc" />
				<button type="submit" class="btn w-full mt-10 bg-green-500">Pay with Wechat</button>
			</form>

			<form action="?/payOnline" bind:this={alipayForm} method="POST">
				<input type="hidden" name="type" value="alipay" />
				<input type="hidden" name="out_trade_no" value={genOrdNumber} />
				<input type="hidden" name="service_id" value={transformedService.id} />
				<input type="hidden" name="money" value={transformedService.price} />
				<input type="hidden" name="device" value="pc" />

				<button type="submit" class="btn bg-cyan-500 w-full mt-10">Pay with Alipay</button>
			</form>
		</div>
	</div>
</div>
