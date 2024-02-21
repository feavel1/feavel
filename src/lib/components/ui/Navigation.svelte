<script lang="ts">
	import A from './modal/A.svelte';
	import { getModalStore } from '@skeletonlabs/skeleton';

	import * as m from '$paraglide/messages';

	const modalStore = getModalStore();

	function modalClose(): void {
		modalStore.close();
	}
</script>

<nav class="">
	<ul class="flex flex-col lg:flex-row gap-3">
		<li class="btn child-hover:line-through child-hover:opacity-50">
			<a on:click={modalClose} href="/posts" data-sveltekit-preload-code="viewport">
				{m.posts()}
			</a>
		</li>

		<li class="btn child-hover:line-through child-hover:opacity-50">
			<a on:click={modalClose} href="/services" data-sveltekit-preload-code="viewport">
				{m.services()}
			</a>
		</li>

		<li class="btn child-hover:line-through child-hover:opacity-50">
			<a on:click={modalClose} href="/profile" data-sveltekit-preload-code="viewport">
				{m.my_profile()}
			</a>
		</li>

		<li class="btn child-hover:line-through child-hover:opacity-50">
			<a on:click={modalClose} href="/about" data-sveltekit-preload-code="viewport">
				{m.about()}
			</a>
		</li>
	</ul>
</nav>
