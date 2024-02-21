<script lang="ts">
	import { getModalStore } from '@skeletonlabs/skeleton';

	const modalStore = getModalStore();

	function modalClose(): void {
		modalStore.close();
	}
	export let href: string;
</script>

<li class="btn child-hover:line-through child-hover:opacity-50">
	<a on:click={modalClose} {href} data-sveltekit-preload-code="viewport">
		<slot />
	</a>
</li>
