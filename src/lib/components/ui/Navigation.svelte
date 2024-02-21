<script lang="ts">
	import A from './modal/A.svelte';

	import * as m from '$paraglide/messages';
</script>

<nav class="">
	<ul class="flex flex-col lg:flex-row gap-3">
		<A href="/posts">{m.posts()}</A>

		<A href="/services">{m.services()}</A>
		<!-- <A href="/subscription">Subscription</A> -->

		<A href="/profile">{m.my_profile()}</A>
		<A href="/about">{m.about()}</A>
	</ul>
</nav>
