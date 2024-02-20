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
	import SearchButton from '$lib/components/ui/modal/SearchButton.svelte';
	import Footer from '$lib/components/ui/layout/Footer.svelte';
	import Feavel from '$lib/components/ui/logo/Feavel.svelte';

	import { ParaglideJS } from '@inlang/paraglide-js-adapter-sveltekit';
	import { i18n } from '$lib/i18n/server';
	import { setLanguageTag } from '$paraglide/runtime';

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

<ParaglideJS {i18n}>
	<Toast />

	<Modal
		components={modalRegistry}
		transitionIn={fade}
		transitionOut={fade}
		transitionInParams={{ duration: 600 }}
		transitionOutParams={{ duration: 500 }}
	/>

	<Noise />

	<AppBar class="px-4 py-2 lg:px-32 fixed w-full z-50" background="">
		<svelte:fragment slot="lead">
			<div class="flex flex-row items-center">
				<HamburgerIcon />
				<a href="/" class="sm:mr-5"><Feavel /></a>
			</div>
			<div class="hidden lg:inline">
				<Navigation />
			</div>
		</svelte:fragment>
		<svelte:fragment slot="trail">
			<SearchButton />
			<LightSwitch />
		</svelte:fragment>
	</AppBar>
	<Breadcrumbs path={$page.url.pathname} />

	<div class="min-h-dvh mx-auto">
		<slot />
	</div>

	<Footer />
</ParaglideJS>
