<script lang="ts">
	import { goto } from '$app/navigation';
	import ServiceImgUpload from '$lib/components/ui/services/ServiceImgUpload.svelte';
	import {
		InputChip,
		type AutocompleteOption,
		Autocomplete,
		getToastStore
	} from '@skeletonlabs/skeleton';

	export let data;

	let { serCatSer, service, supabase } = data;
	$: ({ serCatSer, service, supabase } = data);

	const toastStore = getToastStore();

	const categoryNames = service.services_category_rel.map(
		(item: { services_category: { category_name: any } }) => item.services_category.category_name
	);

	let inputChip: string;
	let inputChipList: string[] = categoryNames;
	let name: string = service.name;
	let price: number = service.price;
	let description: string = service.description;
	let highlights: string[] = service.highlights;
	let cover_url = service.cover_url;

	console.log(inputChipList);

	function onFlavorSelection(event: CustomEvent<AutocompleteOption<string>>): void {
		inputChip = event.detail.value;
	}

	let loading = false;

	const handleSubmit = async () => {
		loading = true;

		const { data: category_id, error: cat_err } = await supabase
			.from('services_category')
			.upsert(
				inputChipList.map((t) => {
					return {
						category_name: t
					};
				}),
				{ onConflict: 'category_name' }
			)
			.select('id');

		const { data: service_data_id, error: createStudioErr } = await supabase
			.from('services')
			.update({
				name: name,
				price: price,
				description: description,
				highlights: highlights
			})
			.eq('id', service.id)
			.select();

		if (category_id && service_data_id) {
			const { error: del } = await supabase
				.from('services_category_rel')
				.delete()
				.eq('service_id', service.id);
			if (del == null) {
				const { error: post_tag_err } = await supabase.from('services_category_rel').insert(
					category_id.map((t: { id: number }) => {
						return { service_id: service_data_id[0].id, category_id: t.id };
					})
				);
			}
		}

		toastStore.trigger({
			message: '✅ Successfully Updated, Plese wait for review 🧑‍💻 🌐',
			background: 'variant-filled-success'
		});

		location.reload();

		setTimeout(() => {
			goto('/services');
		}, 1000);
	};
</script>

<div>
	<div class="px-4 sm:px-0">
		<h3 class="text-base font-semibold leading-7">Edit Service</h3>
		<p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Service details and information.</p>
	</div>

	<div class="mt-6 border-t border-gray-400">
		<dl class="divide-y divide-gray-400">
			<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
				<dt class="text-sm font-medium leading-6">Service name</dt>
				<input type="text" bind:value={name} placeholder="Best ever service" class="input" />
			</div>

			<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
				<dt class="text-sm font-medium leading-6">Upload service img</dt>
				<ServiceImgUpload serviceId={service.id} bind:cover_url {supabase} />
			</div>

			<!-- Add more fields based on your data model -->
			<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
				<dt class="text-sm font-medium leading-6">Price</dt>
				<input bind:value={price} type="number" placeholder="Enter price" class="input" />
			</div>

			<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
				<dt class="text-sm font-medium leading-6">Description</dt>
				<textarea
					bind:value={description}
					class="textarea w-full"
					rows="20"
					placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."
				/>
			</div>

			<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
				<dt class="text-sm font-medium leading-6">Highlights</dt>
				<input
					bind:value={highlights}
					name="highlights"
					id="highlights"
					class="hidden"
					placeholder="Enter highlights"
				/>

				<InputChip
					bind:value={highlights}
					name="chips"
					placeholder="Enter any value... and press 'enter'"
				/>
			</div>

			<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 flex-col flex">
				<dt class="text-sm font-medium leading-6">Category</dt>
				<input
					value={inputChipList}
					name="category"
					id="category"
					class="hidden"
					placeholder="Enter category"
				/>
				<div>
					<InputChip
						bind:value={inputChipList}
						bind:input={inputChip}
						class="border-2"
						name="chips"
						placeholder="🔍 Add Service category..."
					/>
					<div class="card max-h-48 p-4 overflow-y-auto mt-3" tabindex="-1">
						<Autocomplete
							bind:input={inputChip}
							options={serCatSer}
							denylist={inputChipList}
							on:selection={onFlavorSelection}
						/>
					</div>
				</div>
			</div>

			<!-- Add more fields based on your data model -->
		</dl>
		<div class="mt-8 flex">
			<button on:click={handleSubmit} class="btn variant-filled">
				{loading ? 'Loading...' : 'Save Edit'}
			</button>
		</div>
	</div>
</div>
