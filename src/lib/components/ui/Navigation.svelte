<script lang="ts">
	import A from './modal/A.svelte';
</script>

<nav class="">
	<ul class="flex flex-col lg:flex-row gap-3">
		<A href="/posts">Posts <span class="badge variant-filled ml-2">New!</span></A>

		<A href="/profile">My Profile</A>

		<A href="/subscription">Subscription</A>

		<A href="/about">About</A>
	</ul>
</nav>
