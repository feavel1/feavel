<script>
	import Cloud from '$lib/components/ui/layout/Cloud.svelte';
	import Grid from '$lib/components/ui/layout/Grid.svelte';
	import { LucideFolder, LucideHome, LucidePaperclip, LucideReceipt } from 'lucide-svelte';
</script>

<!-- <Grid /> -->
<Cloud />

<main class="relative isolate max-w-7xl sm:px-6 mx-auto top-12 lg:flex">
	<aside class="h-fit relative lg:sticky top-8 lg:top-20 lg:w-72">
		<div class="ml-4 my-4">
			<p class="text-xs italic text-gray-500">Edit, manage, save your personal data! - Feavel</p>
			<h1 class="h1">Profile</h1>
			<p class="italic text-lg">用户页面 📖</p>
		</div>
		<ul
			role="list"
			class="flex flex-col min-w-full flex-none gap-y-6 px-4 text-sm font-semibold leading-6 text-gray-400"
		>
			<li>
				<a href="/profile" class="btn variant-filled-secondary gap-x-3 w-full justify-start">
					<LucideHome />
					Dashboard
				</a>
			</li>

			<li>
				<a
					href="/profile/projects"
					class="btn variant-filled-secondary gap-x-3 w-full justify-start"
				>
					<LucideFolder />
					Projects
				</a>
			</li>

			<li>
				<a href="/profile/posts" class="btn variant-filled-secondary gap-x-3 w-full justify-start">
					<LucidePaperclip />
					Posts
				</a>
			</li>
			<li>
				<a href="/profile" class="btn variant-filled-secondary gap-x-3 w-full justify-start">
					<LucideReceipt />
					Reports
				</a>
			</li>
		</ul>
	</aside>

	<slot />
</main>
