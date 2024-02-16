<script lang="ts">
	import { Avatar, FileButton } from '@skeletonlabs/skeleton';
	import type { SupabaseClient } from '@supabase/supabase-js';
	import { createEventDispatcher } from 'svelte';

	export let size: number = 14;
	export let url: string;
	export let supabase: SupabaseClient | any;
	export let uploadable: boolean = true;

	let avatarUrl: string | null;
	let uploading = false;
	let files: FileList;

	const dispatch = createEventDispatcher();

	const downloadImage = async (path: string) => {
		try {
			const { data, error } = await supabase.storage.from('storage').download(path);
			if (error) {
				throw error;
			}
			const url = URL.createObjectURL(data);
			avatarUrl = url;
		} catch (error) {
			if (error instanceof Error) {
				console.log('Error downloading image: ', error.message);
			}
		}
	};

	const uploadAvatar = async () => {
		try {
			uploading = true;
			if (!files || files.length === 0) {
				throw new Error('You must select an image to upload.');
			}
			const file = files[0];
			const fileExt = file.name.split('.').pop();
			const filePath = `${Math.random()}.${fileExt}`;
			const { error } = await supabase.storage.from('storage').upload(filePath, file);
			if (error) {
				throw error;
			}
			url = filePath;
			setTimeout(() => {
				dispatch('upload');
			}, 100);
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			uploading = false;
		}
	};
	$: if (url) downloadImage(url);
</script>

<div class="md:col-span-2 flex items-center gap-x-8 mb-10">
	{#if avatarUrl}
		<Avatar
			src={avatarUrl}
			alt={avatarUrl ? 'Avatar' : 'No image'}
			class="avatar size-{size}  mb-2 flex-none rounded-lg bg-gray-800 object-cover"
			rounded="rounded-3xl"
		/>
	{:else}
		<div class="placeholder rounded-lg h-14 w-14 animate-pulse" />
	{/if}
	{#if uploadable}
		<input type="hidden" name="avatarUrl" value={url} />
		<FileButton
			name="Upload"
			type="file"
			id="single"
			accept="image/*"
			bind:files
			on:change={uploadAvatar}
			disabled={uploading}
		/>
	{/if}
</div>
