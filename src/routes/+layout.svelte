<script lang="ts">
	// Styles and CSS

	import '../app.postcss';
	// import hljs from 'highlight.js';
	// import 'highlight.js/styles/github-dark.css';
	import {
		AppShell,
		AppBar,
		// storeHighlightJs,
		Drawer,
		getDrawerStore,
		LightSwitch,
		autoModeWatcher,
		initializeStores
	} from '@skeletonlabs/skeleton';
	// storeHighlightJs.set(hljs);

	//Breadcrumbs
	import { page } from '$app/stores';
	import Breadcrumbs from '$lib/components/ui/Breadcrumbs.svelte';

	// Authentication on Client Side
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import Navigation from '$lib/components/ui/Navigation.svelte';
	import Noise from '$lib/components/ui/Noise.svelte';

	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => subscription.unsubscribe();
	});

	initializeStores();

	const drawerStore = getDrawerStore();

	function drawerOpen(): void {
		drawerStore.open({});
	}
	function drawerClose(): void {
		drawerStore.close();
	}

	$: classesSidebar = $page.url.pathname === '/' ? 'w-0' : 'w-0 lg:w-64';
</script>

<svelte:head>
	{@html `<script>${autoModeWatcher.toString()} autoModeWatcher();</script>`}
</svelte:head>

<Drawer>
	<h2 class="p-4">
		<button class="lg:hidden btn btn-sm mr-4 variant-filled-secondary" on:click={drawerClose}>
			<span> X </span>
		</button>Feavel's blog. Navigation
	</h2>
	<hr />
	<Navigation {session} />
</Drawer>

<Noise />
<AppShell slotSidebarLeft="bg-surface-500/5 w-0 lg:w-64" {classesSidebar}>
	<svelte:fragment slot="pageHeader">
		<AppBar>
			<svelte:fragment slot="lead">
				<div class="flex items-center">
					<button class="lg:hidden btn btn-sm mr-4" on:click={drawerOpen}>
						<span>
							<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
								<rect width="100" height="20" />
								<rect y="30" width="100" height="20" />
								<rect y="60" width="100" height="20" />
							</svg>
						</span>
					</button>

					<strong class="text-xl uppercase">Feavel's blog.</strong>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="trail"><LightSwitch /></svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<Navigation {session} />
	</svelte:fragment>

	<div class="container mx-auto p-4 space-y-4">
		<Breadcrumbs path={$page.url.pathname} />
		<hr />
		<slot />
	</div>

	<svelte:fragment slot="pageFooter">
		<div class="text-sm text-right mr-2 text-gray-500">
			<div>
				view web page source code on github: <a
					class=" underline decoration-blue-400 hover:decoration-blue-100 hover:text-white"
					href="https://github.com/feavel1"
				>
					feavel1
				</a>
			</div>
			All Rights Reserved 2023 © Baby Feavel 🇷🇺
		</div>
	</svelte:fragment>
</AppShell>
