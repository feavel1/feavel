<script lang="ts">
	import '../app.postcss';
	import 'highlight.js/styles/github-dark.css';
	import {
		AppBar,
		// getDrawerStore,
		// getModalStore,
		LightSwitch,
		autoModeWatcher,
		initializeStores,
		Toast,
		Modal,
		storePopup,
		type ModalComponent
	} from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	// import Breadcrumbs from '$lib/components/ui/Breadcrumbs.svelte';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import Navigation from '$lib/components/ui/Navigation.svelte';
	import Noise from '$lib/components/ui/Noise.svelte';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { fade } from 'svelte/transition';
	import NavModal from '$lib/components/ui/modal/NavModal.svelte';
	import SearchModal from '$lib/components/ui/modal/SearchModal.svelte';
	import HamburgerIcon from '$lib/components/ui/modal/HamburgerIcon.svelte';
	import SearchButton from '$lib/components/ui/modal/SearchButton.svelte';
	import Feavel from '$lib/components/ui/logo/Feavel.svelte';
	import Footer from '$lib/components/ui/layout/Footer.svelte';
	import LangSwitch from '$lib/i18n/LangSwitch.svelte';
	import {
		availableLanguageTags,
		setLanguageTag,
		sourceLanguageTag,
		type AvailableLanguageTag
	} from '$paraglide/runtime';
	import { translatePath } from '$lib/i18n/server';
	// import { browser } from '$app/environment';
	import { ParaglideJS } from '@inlang/paraglide-js-adapter-sveltekit';
	import { i18n } from '$lib/i18n/server';

	initializeStores();
	// const modalStore = getModalStore();
	// const drawerStore = getDrawerStore();

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

	$: lang = ($page.params.lang as AvailableLanguageTag) ?? sourceLanguageTag;
	$: setLanguageTag(lang);
</script>

<svelte:head>
	<title>Feavel's Blog</title>
	{#each availableLanguageTags as lang}
		<link rel="alternate" hreflang={lang} href={translatePath($page.url.pathname, lang)} />
	{/each}
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
				<Feavel />
			</div>
			<div class="hidden lg:inline">
				<Navigation />
			</div>
		</svelte:fragment>
		<svelte:fragment slot="trail">
			<LangSwitch />
			<SearchButton />
			<LightSwitch />
		</svelte:fragment>
	</AppBar>
	<!-- <Breadcrumbs path={$page.url.pathname} /> -->

	<div class="min-h-dvh mx-auto">
		<slot />
	</div>
</ParaglideJS>

<Footer />
