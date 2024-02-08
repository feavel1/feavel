<script>
	import { browser } from '$app/environment';
	import { LucideShare } from 'lucide-svelte';

	// const { siteTitle, siteUrl } = website;

	// export let slug;
	// export let title;

	// $: webShareAPISupported = browser && typeof navigator.share !== 'undefined';
	// $: handleWebShare;

	// const handleWebShare = async () => {
	// 	try {
	// 		navigator.share({
	// 			title,
	// 			text: `Shared from ${siteTitle}`,
	// 			url
	// 		});
	// 	} catch (error) {
	// 		webShareAPISupported = false;
	// 	}
	// };
	// const url = `${siteUrl}/${slug}`;
</script>

<!-- 
<aside class="container">
	<div class="wrapper">
		Share: <div class="buttons">
			{#if webShareAPISupported}
				<button on:click={handleWebShare}
					><span class="screen-reader-text">Share</span><LucideShare width={48} /></button
				>
			{:else}
				<Twitter {url} {title} />
          <Facebook {url} />
          <Whatsapp {url} {title} />
				  <Telegram {url} {title} />
			{/if}
		</div>
	</div>
</aside> -->
