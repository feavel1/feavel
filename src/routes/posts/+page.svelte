<script lang="ts">
	let inputDemo = ' ';
</script>

<div class="flex justify-between flex-col-reverse md:flex-row">
	<div class="flex flex-col gap-4 h-1/2">
		<a href="/posts/create-post" class="btn variant-filled">I also want to write ✍️!</a>
		<div class="input-group input-group-divider grid-cols-[auto_1fr_auto] border-0">
			<div class="input-group-shim">/posts/</div>
			<input type="search" name="demo" bind:value={inputDemo} placeholder="Search..." />
			<button class="variant-filled-secondary">Search</button>
		</div>
	</div>
	<div class="text-right">
		<p class="text-xs italic text-gray-500 py-2">
			Read, comment, like, create right here! - Feavel
		</p>
		<h1 class="h1">Read Posts</h1>
		<p class="italic text-lg">阅读帖子 📖</p>
	</div>
</div>

<p>A Svelte, Supabase, Stripe, SkeletonUI, Markdown blog.</p>

<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
	<section class="card w-full animate-pulse">
		<div class="p-4 space-y-4">
			<div class="placeholder rounded-full" />
			<div class="placeholder" />
			<div class="grid grid-cols-3 gap-8">
				<div class="placeholder" />
				<div class="placeholder" />
				<div class="placeholder" />
			</div>
			<div class="grid grid-cols-4 gap-4">
				<div class="placeholder" />
				<div class="placeholder" />
				<div class="placeholder" />
				<div class="placeholder" />
			</div>
			<div class="placeholder rounded-full" />
			<div class="placeholder" />
			<div class="grid grid-cols-3 gap-8">
				<div class="placeholder" />
				<div class="placeholder" />
				<div class="placeholder" />
			</div>
			<div class="grid grid-cols-4 gap-4">
				<div class="placeholder" />
				<div class="placeholder" />
				<div class="placeholder" />
				<div class="placeholder" />
			</div>
		</div>
	</section>

	<div class="grid gap-4">
		<section class="card w-full animate-pulse">
			<div class="p-4 space-y-4">
				<div class="placeholder rounded-full" />
				<div class="placeholder" />
				<div class="grid grid-cols-3 gap-8">
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
				</div>
				<div class="grid grid-cols-4 gap-4">
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
				</div>
			</div>
		</section>
		<section class="card w-full animate-pulse">
			<div class="p-4 space-y-4">
				<div class="placeholder rounded-full" />
				<div class="placeholder" />
				<div class="grid grid-cols-3 gap-8">
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
				</div>
				<div class="grid grid-cols-4 gap-4">
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
				</div>
			</div>
		</section>
		<section class="card w-full animate-pulse">
			<div class="p-4 space-y-4">
				<div class="placeholder rounded-full" />
				<div class="placeholder" />
				<div class="grid grid-cols-3 gap-8">
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
				</div>
				<div class="grid grid-cols-4 gap-4">
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
				</div>
			</div>
		</section>
	</div>
</div>

<p>Register, login, create and post!</p>

<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
	<div class="grid gap-4">
		<section class="card w-full animate-pulse">
			<div class="p-4 space-y-4">
				<div class="placeholder rounded-full" />
				<div class="placeholder" />
				<div class="grid grid-cols-3 gap-8">
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
				</div>
				<div class="grid grid-cols-4 gap-4">
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
				</div>
			</div>
		</section>
		<section class="card w-full animate-pulse">
			<div class="p-4 space-y-4">
				<div class="placeholder rounded-full" />
				<div class="placeholder" />
				<div class="grid grid-cols-3 gap-8">
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
				</div>
				<div class="grid grid-cols-4 gap-4">
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
				</div>
			</div>
		</section>
		<section class="card w-full animate-pulse">
			<div class="p-4 space-y-4">
				<div class="placeholder rounded-full" />
				<div class="placeholder" />
				<div class="grid grid-cols-3 gap-8">
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
				</div>
				<div class="grid grid-cols-4 gap-4">
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
				</div>
			</div>
		</section>
	</div>
	<section class="card w-full animate-pulse">
		<div class="p-4 space-y-4">
			<div class="placeholder rounded-full" />
			<div class="placeholder" />
			<div class="grid grid-cols-3 gap-8">
				<div class="placeholder" />
				<div class="placeholder" />
				<div class="placeholder" />
			</div>
			<div class="grid grid-cols-4 gap-4">
				<div class="placeholder" />
				<div class="placeholder" />
				<div class="placeholder" />
				<div class="placeholder" />
			</div>
			<div class="placeholder rounded-full" />
			<div class="placeholder" />
			<div class="grid grid-cols-3 gap-8">
				<div class="placeholder" />
				<div class="placeholder" />
				<div class="placeholder" />
			</div>
			<div class="grid grid-cols-4 gap-4">
				<div class="placeholder" />
				<div class="placeholder" />
				<div class="placeholder" />
				<div class="placeholder" />
			</div>
		</div>
	</section>
</div>
