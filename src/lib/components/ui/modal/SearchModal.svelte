<script lang="ts">
	import {
		Autocomplete,
		popup,
		type AutocompleteOption,
		type PopupSettings
	} from '@skeletonlabs/skeleton';
	import type { SupabaseClient } from '@supabase/supabase-js';
	import { onMount } from 'svelte';
	import PostListCard from './PostListCard.svelte';
	import PostPlaceHolder from '../PostPlaceHolder.svelte';

	let isLoading = false;

	onMount(async () => {
		getTags();
	});

	export let supabase: SupabaseClient;

	// Search 🔍
	let inputDemo = '';
	let source: string | any[] = [];

	async function onSearch() {
		try {
			isLoading = true;

			const { data: filteredPosts, error: tagSugestionsError } = await supabase.rpc(
				'content_string',
				{ searchparams: inputDemo }
			);

			if (filteredPosts) {
				source = filteredPosts;
			}
		} catch (error) {
			alert('Error fetching total count:' + error);
		} finally {
			isLoading = false;
		}
	}
	let flavorOptions: AutocompleteOption<string>[] = [];

	let popupSettings: PopupSettings = {
		event: 'focus-click',
		target: 'popupAutocomplete',
		placement: 'bottom'
	};

	async function getTags() {
		try {
			isLoading = true;

			const { data: tagAutoComplete, error: tagSugestionsError } = await supabase
				.from('post_tags')
				.select('tag_name');

			if (tagAutoComplete) {
				flavorOptions = tagAutoComplete.map((t: { tag_name: string }) => ({
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

	function onFlavorSelection(event: CustomEvent<AutocompleteOption<string>>): void {
		inputDemo = event.detail.value;
	}
	function capitalizeFirstLetter(str: string): string {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}
</script>

<div class="max-w-3xl w-full">
	<div class="input-group input-group-divider grid-cols-[auto_1fr_auto] border-0">
		<div class="input-group-shim">🔍</div>
		<input
			type="search"
			name="demo"
			bind:value={inputDemo}
			use:popup={popupSettings}
			placeholder="Search on web..."
		/>
		<button class="variant-filled-tertiary w-fit" on:click={() => onSearch()}>
			Search posts
		</button>
	</div>
	<div
		class="card max-w-xl max-h-48 p-4 overflow-y-auto z-50 bg-surface-200"
		data-popup="popupAutocomplete"
	>
		<div class="text-lg ml-4">Filter by tag:</div>
		<hr class="my-2" />
		<Autocomplete bind:input={inputDemo} options={flavorOptions} on:selection={onFlavorSelection} />
	</div>

	<ol class="list card m-2 p-4">
		{#if isLoading || source.length == 0}
			<PostPlaceHolder />
		{:else}
			{#each source as post}
				<PostListCard {post} />
			{/each}
		{/if}
	</ol>
</div>
