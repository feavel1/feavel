<script lang="ts">
	export let tags: any;
</script>

<div class="flex items-center space-x-2">
	{#each tags as tag}
		<span class="badge variant-ringed-primary">
			<svg class="mr-1.5 h-2 w-2 brand-react" fill="currentColor" viewBox="0 0 8 8">
				<circle cx="4" cy="4" r="3"></circle>
			</svg>
			{tag.post_tags.tag_name}
		</span>
	{/each}
</div>
