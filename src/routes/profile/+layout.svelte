<script>
	import { LucideFolder, LucideHome, LucidePaperclip, LucideReceipt } from 'lucide-svelte';
</script>

<nav class="flex flex-col overflow-x-auto fixed h-full lg:w-72">
	<div class="flex h-16 shrink-0 items-center px-4 h1">Menu</div>
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
			<a href="/profile/projects" class="btn variant-filled-secondary gap-x-3 w-full justify-start">
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
</nav>

<slot />
