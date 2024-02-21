<script lang="ts">
	import { getModalStore } from '@skeletonlabs/skeleton';

	import * as m from '$paraglide/messages';

	const modalStore = getModalStore();

	function modalClose(): void {
		modalStore.close();
	}
</script>

<button on:click={modalClose}>
	<ul class="flex flex-col lg:flex-row gap-3">
		<li class="btn child-hover:line-through child-hover:opacity-50">
			<a href="/posts">
				{m.posts()}
			</a>
		</li>

		<li class="btn child-hover:line-through child-hover:opacity-50">
			<a href="/services">
				{m.services()}
			</a>
		</li>

		<li class="btn child-hover:line-through child-hover:opacity-50">
			<a href="/profile">
				{m.my_profile()}
			</a>
		</li>

		<li class="btn child-hover:line-through child-hover:opacity-50">
			<a href="/about">
				{m.about()}
			</a>
		</li>
	</ul>
</button>
