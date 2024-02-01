<script lang="ts">
	import { FileDropzone } from '@skeletonlabs/skeleton';
	import { LucideFile } from 'lucide-svelte';
	import type { SupabaseClient } from '@supabase/supabase-js';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let cover_url: string;
	export let supabase: SupabaseClient;
	export let serviceId: number;

	let loadCovUrl: string | null = null;
	let uploading = false;
	let files: FileList;

	const downloadImage = async (path: string) => {
		try {
			const { data, error } = await supabase.storage.from('storage').download(path);
			if (error) {
				throw error;
			}
			const url = URL.createObjectURL(data);
			loadCovUrl = url;
		} catch (error) {
			if (error instanceof Error) {
				console.log('Error downloading image: ', error.message);
			}
		}
	};

	const uploadCover = async () => {
		try {
			uploading = true;
			if (!files || files.length === 0) {
				throw new Error('You must select an image to upload.');
			}
			const file = files[0];
			const fileExt = file.name.split('.').pop();
			const filePath = `${'sco_' + Math.random()}.${fileExt}`;
			const { error } = await supabase.storage.from('storage').upload(filePath, file);
			if (error) {
				throw error;
			}
			cover_url = filePath;

			const { data: service_cover, error: createStudioErr } = await supabase
				.from('services')
				.update({
					cover_url: cover_url
				})
				.eq('id', serviceId)
				.select();

			console.log(service_cover);
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			uploading = false;
		}
	};

	$: if (cover_url) downloadImage(cover_url);
</script>

<img src={loadCovUrl} alt="Cover" />

<FileDropzone on:change={uploadCover} name="file" disabled={uploading} bind:files>
	<svelte:fragment slot="lead">
		<span class="badge variant-filled">
			<LucideFile class="btn-icon-sm" />
		</span>
	</svelte:fragment>
	<svelte:fragment slot="message">Upload service cover image</svelte:fragment>
	<svelte:fragment slot="meta">less than 5 mb</svelte:fragment>
</FileDropzone>
