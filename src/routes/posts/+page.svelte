<script lang="ts">
	import PostsBlock from '$lib/components/ui/Posts/PostsBlock.svelte';
	import {
		type PopupSettings,
		Autocomplete,
		type AutocompleteOption,
		popup
	} from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';

	export let data;
	let { supabase } = data;
	$: ({ supabase } = data);

	let isLoading = false;

	onMount(async () => {
		getTags();
	});

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
		} catch (error) {
			console.error('Error fetching total count:', error);
		} finally {
			isLoading = false;
		}
	}

	// Search 🔍
	let inputDemo = ' ';
	let flavorOptions: AutocompleteOption<string>[] = [];

	let popupSettings: PopupSettings = {
		event: 'focus-click',
		target: 'popupAutocomplete',
		placement: 'bottom'
	};

	function onFlavorSelection(event: CustomEvent<AutocompleteOption<string>>): void {
		inputDemo = event.detail.value;
	}

	function capitalizeFirstLetter(str: string): string {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}
</script>

<svelte:head>
	<title>Posts - Blog</title>
</svelte:head>

<div class="flex justify-between flex-col-reverse md:flex-row">
	<div class="flex flex-col gap-4 h-1/2">
		<a href="/posts/create-post" class="btn variant-filled">I also want to write ✍️!</a>
		<div class="input-group input-group-divider grid-cols-[auto_1fr_auto] border-0">
			<div class="input-group-shim">Tags</div>
			<input
				type="search"
				name="demo"
				bind:value={inputDemo}
				use:popup={popupSettings}
				placeholder="Search..."
			/>
			<button class="variant-filled-secondary">Search posts</button>
		</div>
		<div
			class="card w-full max-w-sm max-h-48 p-4 overflow-y-auto z-50"
			data-popup="popupAutocomplete"
		>
			<Autocomplete
				bind:input={inputDemo}
				options={flavorOptions}
				on:selection={onFlavorSelection}
			/>
		</div>
	</div>
	<div class="text-right">
		<p class="text-xs italic text-gray-500 py-2">
			Read, comment, like, create right here! - Feavel
		</p>
		<h1 class="h1">Read Posts</h1>
		<p class="italic text-lg">阅读帖子 📖</p>
	</div>
</div>

<PostsBlock {supabase} />
