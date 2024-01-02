<script lang="ts">
	import { type ModalSettings, getModalStore } from '@skeletonlabs/skeleton';
	import { SearchIcon } from 'lucide-svelte';

	const modal: ModalSettings = {
		type: 'component',
		component: 'searchModal',
		backdropClasses: '!bg-surface-300/90 dark:!bg-surface-900/90'
	};

	const modalStore = getModalStore();

	function modalOpen(): void {
		modalStore.trigger(modal);
	}

	export let ariaLabel = 'toggle menu';
</script>

<button
	on:click={modalOpen}
	aria-expanded="false"
	aria-label={ariaLabel}
	class="btn btn-sm variant-ringed-primary px-3 rounded-3xl"
>
	<SearchIcon class="relative w-4 h-4 mr-2" />

	Search
</button>
