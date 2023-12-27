<script lang="ts">
	import '../app.postcss';
	import 'highlight.js/styles/github-dark.css';
	// import hljs from 'highlight.js';
	import {
		AppBar,
		// storeHighlightJs,
		getDrawerStore,
		LightSwitch,
		autoModeWatcher,
		initializeStores,
		Toast,
		Modal,
		type ModalComponent
	} from '@skeletonlabs/skeleton';
	// storeHighlightJs.set(hljs);
	initializeStores();
	const drawerStore = getDrawerStore();

	//Breadcrumbs
	import { page } from '$app/stores';
	import Breadcrumbs from '$lib/components/ui/Breadcrumbs.svelte';

	// Authentication on Client Side
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import Navigation from '$lib/components/ui/Navigation.svelte';
	import Noise from '$lib/components/ui/Noise.svelte';

	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { fade } from 'svelte/transition';

	import { getModalStore } from '@skeletonlabs/skeleton';
	import NavModal from '$lib/components/ui/modal/NavModal.svelte';
	import SearchModal from '$lib/components/ui/modal/SearchModal.svelte';
	import HamburgerIcon from '$lib/components/ui/modal/HamburgerIcon.svelte';

	const modalStore = getModalStore();

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

	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	const modalRegistry: Record<string, ModalComponent> = {
		modalComponentOne: { ref: NavModal },
		searchModal: { ref: SearchModal, props: { supabase: supabase } }
	};
</script>

<svelte:head>
	<title>Feavel's Blog</title>
	{@html `<script>${autoModeWatcher.toString()} autoModeWatcher();</script>`}
</svelte:head>

<Toast />

<Modal
	components={modalRegistry}
	transitionIn={fade}
	transitionOut={fade}
	transitionInParams={{ duration: 600 }}
	transitionOutParams={{ duration: 500 }}
/>

<Noise />

<AppBar class="px-4 py-4 lg:px-24" background="">
	<svelte:fragment slot="lead">
		<div class="flex flex-row items-center">
			<HamburgerIcon />
			<a href="/" class="text-xl uppercase font-extrabold mr-10">Feavel's blog.</a>
		</div>
		<div class="hidden lg:inline">
			<Navigation />
		</div>
	</svelte:fragment>
	<svelte:fragment slot="trail"><LightSwitch /></svelte:fragment>
</AppBar>
<hr />

<Breadcrumbs path={$page.url.pathname} />
<hr />

<div class="container mx-auto p-4 space-y-4">
	<slot />
	<div class="text-sm text-right mb-1 mr-2 text-gray-500">
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
</div>
