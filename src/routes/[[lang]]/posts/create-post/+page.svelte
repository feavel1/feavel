<script lang="ts">
	import File from '$lib/components/icons/File.svelte';
	import {
		FileDropzone,
		InputChip,
		SlideToggle,
		getToastStore,
		Autocomplete,
		type AutocompleteOption
	} from '@skeletonlabs/skeleton';
	import { shortcut } from '$lib/components/keyBindings/shortcut';
	import { Editor } from '$lib/components/editor/novel/index.js';
	import type { JSONContent } from '@tiptap/core';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import PostsDashboard from '$lib/components/ui/Posts/PostsDashboard.svelte';

	export let data;
	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	let isLoading = false;

	//Skeleton
	let title: string;
	let inputChip: string;
	let inputChipList: string[];
	let flavorOptions: AutocompleteOption<string>[];
	function onFlavorSelection(event: CustomEvent<AutocompleteOption<string>>): void {
		inputChip = event.detail.value;
	}

	onMount(() => {
		getTags();
	});

	function capitalizeFirstLetter(str: string): string {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	async function getTags() {
		try {
			isLoading = true;
			const { data: tagAutoComplete, error: tagSugestionsError } = await supabase
				.from('post_tags')
				.select('tag_name');

			if (tagAutoComplete) {
				flavorOptions = tagAutoComplete.map((t) => ({
					label: capitalizeFirstLetter(t.tag_name),
					value: t.tag_name
				}));
			}
		} catch (tagSugestionsError) {
			console.error('Error fetching total count:', tagSugestionsError);
		} finally {
			isLoading = false;
		}
	}

	let files: FileList;
	let setContent: JSONContent | undefined;
	let public_Visiblity: boolean = true;

	let saveStatus = 'Saved on local device';

	const toastStore = getToastStore();

	async function handleSavePost() {
		if (title == null) {
			toastStore.trigger({
				message: '✖️ You must have a post title 🌐',
				background: 'variant-filled-error'
			});
		} else if (inputChipList.length == 0) {
			toastStore.trigger({
				message: '✖️ You must have at least one TAG 🌐',
				background: 'variant-filled-error'
			});
		} else if (setContent == null) {
			toastStore.trigger({
				message: '✖️ You must edit the text at least once!!! 🌐',
				background: 'variant-filled-error'
			});
		} else {
			const { data: tag_data_id, error: tag_err } = await supabase
				.from('post_tags')
				.upsert(
					inputChipList.map((t) => {
						return {
							tag_name: t
						};
					}),
					{ onConflict: 'tag_name' }
				)
				.select('id');

			if (tag_err) {
				toastStore.trigger({
					message: '✖️ Tag error: 🌐' + tag_err.message,
					background: 'variant-filled-error'
				});
				throw new Error(tag_err.message);
			}

			const { data: post_data_id, error: create_post_err } = await supabase
				.from('posts')
				.insert([
					{
						user_id: session?.user.id,
						title: title,
						content: setContent,
						post_cover: files,
						public_visibility: public_Visiblity
					}
				])
				.select('id');

			if (create_post_err) {
				toastStore.trigger({
					message: '✖️ Post error: 🌐' + create_post_err.message,
					background: 'variant-filled-error'
				});
				throw new Error(create_post_err.message);
			}

			const { error: post_tag_err } = await supabase
				.from('posts_tags_rel')
				.insert(
					tag_data_id.map((t: { id: any }) => {
						return { post_id: post_data_id[0].id, tag_id: t.id };
					})
				)
				.select('id');

			if (post_tag_err) {
				toastStore.trigger({
					message: '✖️ Tag Post relation error: 🌐' + post_tag_err.details,
					background: 'variant-filled-error'
				});
				throw new Error(post_tag_err.details);
			}

			toastStore.trigger({
				message: '✅ Successfully Published 🌐',
				background: 'variant-filled-success'
			});
			setTimeout(() => {
				public_Visiblity === true ? goto('/posts') : goto('/profile');
			}, 1000);
		}
	}
</script>

<svelte:head>
	<title>Create Post - Blog</title>
</svelte:head>

<div class="flex flex-col xl:flex-row gap-2">
	<div
		class="flex flex-col mx-auto max-h-min gap-4 max-w-2xl xl:max-w-xs xl:sticky top-20 z-10 w-full variant-glass-secondary p-2 shadow-lg"
	>
		<h1 class="h1">Dashboard</h1>

		{#if session}
			<PostsDashboard {session} {supabase} />
		{:else}
			<span><a class="underline" href="/auth">Login</a> to see your posts</span>
			<div>You can play around, things would still be saved on your local device.</div>
		{/if}
	</div>

	<Editor
		onUpdate={(editor) => {
			setContent = editor?.getJSON();
			saveStatus = 'Unsaved';
		}}
		onDebouncedUpdate={() => {
			saveStatus = 'Saving in local storage...';
			setTimeout(() => {
				saveStatus = 'Saved on local device';
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
		class="flex flex-col mx-auto max-h-min gap-4 max-w-2xl xl:max-w-xs xl:sticky top-20 z-10 w-full p-2 shadow-lg variant-glass-secondary"
	>
		<h1 class="h1">Post details</h1>
		{#if session}
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto] border-2">
				<div class="input-group-shim">Title</div>
				<input type="text" name="demo" bind:value={title} placeholder="My best text." />
			</div>

			<InputChip
				bind:input={inputChip}
				bind:value={inputChipList}
				class="border-2"
				name="chips"
				placeholder="🔍 Add Post tags..."
			/>

			<div class="card w-full max-h-48 p-4 overflow-y-auto" tabindex="-1">
				<Autocomplete
					bind:input={inputChip}
					options={flavorOptions}
					denylist={inputChipList}
					on:selection={onFlavorSelection}
				/>
			</div>

			<FileDropzone name="files" bind:files>
				<svelte:fragment slot="lead">
					<span class="badge variant-filled">
						<File />
					</span>
				</svelte:fragment>
				<svelte:fragment slot="message">Upload post cover image</svelte:fragment>
				<svelte:fragment slot="meta">less than 5 mb</svelte:fragment>
			</FileDropzone>

			<span
				class="chip variant-soft hover:variant-filled"
				use:shortcut={{ control: true, code: 'KeyS' }}
				on:click={handleSavePost}
			>
				<span>☑️</span>
				<span>Save</span>
				<span class="kbd">Ctrl</span>
				<span class=""> + </span>
				<span class="kbd">S </span>
			</span>

			<SlideToggle name="slide" bind:checked={public_Visiblity}>Public visability</SlideToggle>
		{:else}
			<span><a class="underline" href="/auth">Login</a> to publish posts.</span>
		{/if}
	</div>
</div>
