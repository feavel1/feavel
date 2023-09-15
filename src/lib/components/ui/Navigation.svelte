<script lang="ts">
	export let session: any;
	import { getDrawerStore } from '@skeletonlabs/skeleton';

	const drawerStore = getDrawerStore();

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<nav class="list-nav p-4 mt-2">
	<ul>
		<li><a on:click={drawerClose} href="/">Home</a></li>

		<li>
			<a on:click={drawerClose} href="/posts"
				>All posts <span class="badge variant-filled ml-2">New!</span></a
			>
		</li>

		<li>
			<a on:click={drawerClose} href={session ? '/profile' : '/auth'}
				>{session ? 'My Profile' : 'Log-in / Register'}</a
			>
		</li>
		<li><a on:click={drawerClose} href="/subscription">Subscription</a></li>

		<!-- <li>
			<a on:click={drawerClose} href="/products" class="font-thin">Products (work in progress)</a>
		</li> -->

		<li><a on:click={drawerClose} href="/about">About</a></li>
	</ul>
</nav>
