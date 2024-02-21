<script lang="ts">
	import type { SvelteComponent } from 'svelte';

	// Stores
	import { getModalStore } from '@skeletonlabs/skeleton';
	import Navigation from '../Navigation.svelte';

	// Props
	/** Exposes parent props to this component. */
	export let parent: SvelteComponent;

	const modalStore = getModalStore();

	function modalClose(): void {
		parent.onClose();
	}
</script>

{#if $modalStore[0]}
	<button on:click={modalClose} class="fixed top-0 w-full">
		<div class="flex items-center justify-between px-4 pt-3 lg:px-16 lg:pt-11 z-50">
			<div class="flex flex-row justify-center gap-5">
				<div class="flex flex-row pt-1"></div>
			</div>
			<button class="btn btn-sm variant-ghost-surface">
				<span>⛌</span>
			</button>
		</div>
	</button>

	<Navigation />
{/if}
