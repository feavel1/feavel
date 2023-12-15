<script lang="ts">
	import { type ModalSettings, getModalStore } from '@skeletonlabs/skeleton';

	const modal: ModalSettings = {
		type: 'component',
		component: 'modalComponentOne',
		backdropClasses: '!bg-surface-50 dark:!bg-surface-900'
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
	class="lg:hidden btn btn-sm mr-4"
>
	<span>
		<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
			<rect width="100" height="20" />
			<rect y="30" width="100" height="20" />
			<rect y="60" width="100" height="20" />
		</svg>
	</span>
</button>
