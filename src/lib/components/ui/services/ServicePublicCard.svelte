<script lang="ts">
	import type { SupabaseClient } from '@supabase/supabase-js';

	export let service: any;
	export let supabase: SupabaseClient;

	console.log(service);

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

	downloadImage(service.cover_url);
</script>

<a href="/services/{service.id}" class="group">
	<div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2">
		<img
			src={publicUrl}
			alt="Person using a pen to cross a task off a productivity paper card."
			class="h-full w-full object-cover object-center group-hover:opacity-75"
		/>
	</div>
	<div class="mt-4 flex items-center justify-between text-base font-medium">
		<h3>{service.name}</h3>
		<p>{service.price} ¥</p>
	</div>
	<p class="mt-1 text-sm italic text-gray-500">
		<!-- {#each service.highlights as hl}
			{hl}
		{/each} -->{service.created_by.name}
	</p>
</a>
