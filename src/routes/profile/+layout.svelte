<script>
	import Cloud from '$lib/components/ui/layout/Cloud.svelte';
	import Grid from '$lib/components/ui/layout/Grid.svelte';
	import { LucideFolder, LucideHome, LucidePaperclip, LucideReceipt } from 'lucide-svelte';
</script>

<!-- <Grid /> -->
<Cloud />

<main
	class="row-auto w-full mx-auto lg:px-28 relative top-20 lg:grid grid-cols-1 gap-x-8 lg:grid-cols-10 lg:items-start"
>
	<aside
		class="rounded-lg pb-4 lg:sticky top-20 col-start-1 col-span-3 row-span-2 row-start-1 lg:overflow-hidden"
	>
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
				<a
					href="/profile/reports"
					class="btn variant-filled-secondary gap-x-3 w-full justify-start"
				>
					<LucideReceipt />
					Reports
				</a>
			</li>
		</ul>
	</aside>

	<div class="col-span-7">
		<slot />
	</div>
</main>
