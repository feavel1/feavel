<script lang="ts">
	import Cloud from '$lib/components/ui/layout/Cloud.svelte';
	import {
		LucideHome,
		LucidePaperclip,
		LucideReceipt,
		LucideServerCog,
		LucideSettings,
		LucideShoppingCart,
		LucideUserCog
	} from 'lucide-svelte';

	export let data;
	let { studio } = data;
	$: ({ studio } = data);
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
					Home
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

			<li>
				<a
					href="/profile/settings"
					class="btn variant-filled-secondary gap-x-3 w-full justify-start"
				>
					<LucideSettings />
					Settings
				</a>
			</li>
			<li>
				<hr />
			</li>
			{#if studio != null}
				<li>
					<a
						href="/profile/admin"
						class="btn variant-filled-secondary gap-x-3 w-full justify-start"
					>
						<LucideUserCog />
						My studio
					</a>
				</li>
				<li>
					<a
						href="/profile/admin/services"
						class="btn variant-filled-secondary gap-x-3 w-full justify-start"
					>
						<LucideServerCog />
						Services
					</a>
				</li>
				<li>
					<a
						href="/profile/admin/orders"
						class="btn variant-filled-secondary gap-x-3 w-full justify-start"
					>
						<LucideShoppingCart />
						Orders
					</a>
				</li>
			{/if}
		</ul>
	</aside>

	<div class="col-span-7 mx-2">
		<div class="lg:h-28" />
		<slot />
	</div>
</main>
