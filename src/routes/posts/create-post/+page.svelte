<script lang="ts">
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
	import { goto } from '$app/navigation';

	export let data;
	let { supabase, session } = data;
	$: ({ session, supabase } = data);

	let title = 'First post';
	let tagList: string[] = ['svlete', 'supabase', 'blog', 'music'];
	let files: FileList;
	let setContent: JSONContent | undefined;
	let publicVisablity: boolean = false;

	let saveStatus = 'Saved on local device';

	//Skeleton
	const toastStore = getToastStore();
	const t: ToastSettings = {
		message: '✅ Successfully Published 🌐',
		background: 'variant-filled-success'
	};
	const f: ToastSettings = {
		message: '✖️ You must be logged in 🌐',
		background: 'variant-filled-error'
	};

	async function handleSavePost() {
		const { data: tag_data_id, error: tag_err } = await supabase
			.from('post_tags')
			.insert(
				tagList.map((t) => {
					return {
						tag_name: t
					};
				})
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
					publicVisablity: publicVisablity
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
				tag_data_id.map((t) => {
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

		toastStore.trigger(t);
		setTimeout(() => {
			publicVisablity === true ? goto('/posts') : goto('/profile');
		}, 1000);
	}
</script>

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

		<InputChip bind:value={tagList} class="border-2" name="chips" placeholder="Post tags..." />

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

		<SlideToggle name="slide" bind:checked={publicVisablity}>Public visability</SlideToggle>
	</div>
</div>
