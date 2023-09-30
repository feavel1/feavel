<script lang="ts">
	// Skeleton
	import File from '$lib/components/icons/File.svelte';
	import {
		FileDropzone,
		InputChip,
		SlideToggle,
		getToastStore,
		type ToastSettings
	} from '@skeletonlabs/skeleton';
	import { shortcut } from '$lib/components/keyBindings/shortcut';
	import { Editor } from '$lib/components/editor/novel/index.js';
	import type { JSONContent } from '@tiptap/core';

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
	const toastStore = getToastStore();
	const t: ToastSettings = {
		message: 'Save sucsess ✅',
		background: 'variant-filled-success'
	};

	let setContent: JSONContent;

	function doSomething() {
		toastStore.trigger(t);
		console.log(title, author, list, files, setContent);
	}

	let publicVisablity: boolean = false;
	let saveStatus = 'Saved';
</script>

<div class="flex flex-col xl:flex-row gap-2">
	<Editor
		onUpdate={() => {
			saveStatus = 'Unsaved';
		}}
		onDebouncedUpdate={() => {
			saveStatus = 'Saving...';
			// Simulate a delay in saving.
			setTimeout(() => {
				saveStatus = 'Saved';
			}, 500);
		}}
	>
		<div
			class="absolute right-5 top-5 z-10 mb-5 rounded-lg
						 bg-stone-100 px-2 py-1 text-sm text-stone-400"
		>
			{saveStatus}
		</div>
	</Editor>

	<div
		class="flex flex-col mx-auto max-h-min gap-4 max-w-2xl xl:max-w-xs xl:sticky top-2 z-10 w-full"
	>
		<h1 class="h1">Post details:</h1>
		<div class="input-group input-group-divider grid-cols-[auto_1fr_auto] border-2">
			<div class="input-group-shim">Title</div>
			<input type="search" name="demo" bind:value={title} placeholder="My best text." />
		</div>

		<div class="input-group input-group-divider grid-cols-[auto_1fr_auto] border-2">
			<div class="input-group-shim">Author</div>
			<input type="search" name="demo" bind:value={author} placeholder="Search..." />
		</div>

		<InputChip bind:value={list} class="border-2" name="chips" placeholder="Post tags..." />

		<!-- <FileDropzone name="files" bind:files>
			<svelte:fragment slot="lead">
				<span class="badge variant-filled">
					<File />
				</span>
			</svelte:fragment>
			<svelte:fragment slot="message">Upload post cover image</svelte:fragment>
			<svelte:fragment slot="meta">less than 5 mb</svelte:fragment>
		</FileDropzone> -->

		<!-- <span
			class="chip variant-soft hover:variant-filled"
			use:shortcut={{ control: true, code: 'KeyS' }}
			on:click={doSomething}
		>
			<span>☑️</span>
			<span>Save</span>
			<span class="kbd">Ctrl</span>
			<span class=""> + </span>
			<span class="kbd">S </span>
		</span> -->

		<SlideToggle name="slide" bind:checked={publicVisablity}>Public visability</SlideToggle>
	</div>
</div>
