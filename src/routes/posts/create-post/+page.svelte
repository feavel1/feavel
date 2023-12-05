<script lang="ts">
	import File from '$lib/components/icons/File.svelte';
	import {
		FileDropzone,
		InputChip,
		SlideToggle,
		getToastStore,
		type ToastSettings,
		Autocomplete,
		type AutocompleteOption
	} from '@skeletonlabs/skeleton';
	import { shortcut } from '$lib/components/keyBindings/shortcut';
	import { Editor } from '$lib/components/editor/novel/index.js';
	import type { JSONContent } from '@tiptap/core';
	import { goto } from '$app/navigation';

	export let data;
	let { supabase, session } = data;
	$: ({ session, supabase } = data);

	//Skeleton
	let title = 'First post';
	let inputChip = '';
	const flavorOptions: AutocompleteOption<string>[] = [
		{
			label: 'Programing',
			value: 'programing',
			keywords: 'c++, svelte, vscode, html',
			meta: { healthy: false }
		},
		{
			label: 'Music',
			value: 'music',
			keywords: 'art, pop, mixing, mastering',
			meta: { healthy: false }
		},
		{
			label: 'Philosophy',
			value: 'philosophy',
			keywords: 'lacan, art, kant',
			meta: { healthy: true }
		},
		{
			label: 'History',
			value: 'history',
			keywords: 'russia, china, usa',
			meta: { healthy: false }
		},
		{ label: 'Art', value: 'art', keywords: 'art', meta: { healthy: true } },
		{ label: 'News', value: 'news', keywords: 'new, trend, magic', meta: { healthy: true } }
	];

	let inputChipList: string[] = ['svlete', 'supabase'];
	function onFlavorSelection(event: CustomEvent<AutocompleteOption<string>>): void {
		inputChip = event.detail.label;
	}
	let files: FileList;
	let setContent: JSONContent | undefined;
	let public_Visiblity: boolean = true;

	let saveStatus = 'Saved on local device';

	const toastStore = getToastStore();

	async function handleSavePost() {
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
					publicVisibility: public_Visiblity
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

		const { data: posts_tags_rel, error: post_tag_err } = await supabase
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
</script>

<svelte:head>
	<title>Create Post - Blog</title>
</svelte:head>

<div class="flex flex-col xl:flex-row gap-2">
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
		class="flex flex-col mx-auto max-h-min gap-4 max-w-2xl xl:max-w-xs xl:sticky top-2 z-10 w-full"
	>
		<h1 class="h1">Post details:</h1>
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

		<div class="card w-full max-w-sm max-h-48 p-4 overflow-y-auto" tabindex="-1">
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
	</div>
</div>
