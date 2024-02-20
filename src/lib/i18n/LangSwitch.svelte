<script lang="ts">
	import { availableLanguageTags } from '$paraglide/runtime';
	import { page } from '$app/stores';
	import { i18n } from '$lib/i18n/server';
	import { LucideLanguages } from 'lucide-svelte';
	import { popup, type PopupSettings } from '@skeletonlabs/skeleton';

	const popupFeatured: PopupSettings = {
		event: 'click',
		target: 'popupFeatured',
		placement: 'bottom'
	};
</script>

<button class="" use:popup={popupFeatured}> <LucideLanguages /></button>

<div
	class="p-4 w-32 shadow-2xl bg-secondary-50 dark:bg-secondary-800 dark:text-white rounded-lg z-50"
	data-popup="popupFeatured"
>
	<div class="flex flex-col gap-2">
		{#each availableLanguageTags as lang}
			<a
				class="capitalize btn variant-filled-primary"
				href={i18n.route($page.url.pathname)}
				hreflang={lang}>{lang}</a
			>
		{/each}
	</div>
</div>
