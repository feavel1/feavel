<script lang="ts">
	import { availableLanguageTags } from '$paraglide/runtime';

	import { LucideLanguages } from 'lucide-svelte';
	import { popup, type PopupSettings } from '@skeletonlabs/skeleton';
	import { translatePath } from '$lib/i18n/server';
	import { page } from '$app/stores';

	const langSwitch: PopupSettings = {
		event: 'click',
		target: 'langSwitch',
		placement: 'bottom'
	};
</script>

<button class="" use:popup={langSwitch}><LucideLanguages class="" /></button>

<div
	class="p-4 w-32 shadow-2xl bg-secondary-50 dark:bg-secondary-800 dark:text-white rounded-lg z-50"
	data-popup="langSwitch"
>
	<div class="flex flex-col gap-2">
		<!-- {#each availableLanguageTags as lang}
			<a
				class="capitalize btn variant-filled-primary"
				href={translatePath($page.url.pathname, lang)}
				hreflang={lang}
			>
				{lang}
			</a>
		{/each} -->
		<a
			class="capitalize btn variant-filled-primary"
			href={translatePath($page.url.pathname, 'en')}
			hreflang="en"
		>
			English
		</a>
		<a
			class="capitalize btn variant-filled-primary"
			href={translatePath($page.url.pathname, 'zh')}
			hreflang="zh"
		>
			中文
		</a>
	</div>
</div>
