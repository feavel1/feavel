<script lang="ts">
	import TiptapEditor from '$lib/components/editor/tiptapEditor/TiptapEditor.svelte';

	// Skeleton
	import File from '$lib/components/icons/File.svelte';
	import { FileDropzone, InputChip, SlideToggle } from '@skeletonlabs/skeleton';

	//Skeleton
	let files: FileList;
	let title = ' ';
	let author = ' ';
	let list: string[] = [
		'svlete',
		'music',
		'blog',
		'love',
		'asda',
		'asdfasdf',
		'asdfasdf',
		'asdfasdf',
		'asfdsafa'
	];
	function doSomething() {}
	let publicVisablity: boolean = false;
</script>

<div class="flex flex-col xl:flex-row gap-2">
	<div class="flex flex-col mx-auto max-h-min gap-4 max-w-2xl xl:max-w-xs xl:sticky top-2 z-10">
		<h1>Post details:</h1>
		<div class="input-group input-group-divider grid-cols-[auto_1fr_auto] border-2">
			<div class="input-group-shim">Title</div>
			<input type="search" name="demo" bind:value={title} placeholder="Search..." />
		</div>

		<div class="input-group input-group-divider grid-cols-[auto_1fr_auto] border-2">
			<div class="input-group-shim">Author</div>
			<input type="search" name="demo" bind:value={author} placeholder="Search..." />
		</div>

		<InputChip bind:value={list} class="border-2" name="chips" placeholder="Post tags..." />

		<FileDropzone name="files" bind:files>
			<svelte:fragment slot="lead">
				<span class="badge variant-filled">
					<File />
				</span>
			</svelte:fragment>
			<svelte:fragment slot="message">Upload post cover image</svelte:fragment>
			<svelte:fragment slot="meta">less than 5 mb</svelte:fragment>
		</FileDropzone>

		<span class="chip variant-soft hover:variant-filled" on:click={doSomething}>
			<span>☑️</span>
			<span>Save</span>
			<span class="kbd">Ctrl</span>
			<span class=""> + </span>
			<span class="kbd">S</span>
		</span>

		<SlideToggle name="slide" bind:checked={publicVisablity}>Public visability</SlideToggle>
	</div>

	<TiptapEditor />
</div>
