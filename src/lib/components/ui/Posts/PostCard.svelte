<script lang="ts">
	import Time from 'svelte-time';
	export let post;
</script>

<!-- <div class="card w-full animate-pulse first:row-span-2">
	<div class="p-4 space-y-4">
		<div class="">{post.title}</div>
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
			<div>2023-12-02</div>
		</div>
	</div>
</div> -->

<div style="card">
	<div
		class="space-y-4 lg:grid lg:grid-cols-3 lg:items-start lg:gap-6 lg:space-y-0"
		style="cursor: auto;"
	>
		<a href="/posts" class="group">
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<div class="">
				<img
					class="object-cover shadow-lg rounded-lg group-hover:opacity-75"
					src="https://stackdiary.com/140x100.png"
					alt="Featured Photo"
					style="cursor: auto;"
				/>
			</div>
		</a>

		<div class="sm:col-span-2" style="cursor: auto;">
			<div class="flex items-center space-x-3" style="cursor: auto;">
				<div class="flex items-center space-x-2" style="cursor: auto;">
					<span
						class="inline-flex items-center leading-none px-2.5 py-1.5 text-sm font-medium text-skin-inverted rounded-full border border-skin-input"
						style="cursor: auto;"
					>
						<svg class="mr-1.5 h-2 w-2 brand-react" fill="currentColor" viewBox="0 0 8 8">
							<circle cx="4" cy="4" r="3"></circle>
						</svg>
						Tag #1
					</span>

					<span
						class="inline-flex items-center leading-none px-2.5 py-1.5 text-sm font-medium text-skin-inverted rounded-full border border-skin-input"
						style="cursor: auto;"
					>
						<svg class="mr-1.5 h-2 w-2 brand-packages" fill="currentColor" viewBox="0 0 8 8">
							<circle cx="4" cy="4" r="3"></circle>
						</svg>
						Tag #2
					</span>

					<span
						class="inline-flex items-center leading-none px-2.5 py-1.5 text-sm font-medium text-skin-inverted rounded-full border border-skin-input"
						style="cursor: auto;"
					>
						<svg class="mr-1.5 h-2 w-2 brand-tutoriel" fill="currentColor" viewBox="0 0 8 8">
							<circle cx="4" cy="4" r="3"></circle>
						</svg>
						Tag #3
					</span>
				</div>
			</div>

			<div class="mt-2" style="cursor: auto;">
				<a href="/posts" class="group">
					<h4
						class="text-3xl leading-6 font-semibold font-sans text-skin-inverted group-hover:text-skin-primary"
						style="cursor: auto;"
					>
						{post.title}
					</h4>
				</a>

				<p class="mt-1 text-sm font-normal text-skin-base leading-5" style="cursor: auto;">
					<!-- {post.content} -->
				</p>

				<div class="mt-3 flex items-center font-sans" style="cursor: auto;">
					<div class="shrink-0">
						<a href="/profile">
							<span class="sr-only">John Doe</span>

							<img
								class="h-10 w-10 rounded-full"
								src="https://stackdiary.com/140x100.png"
								alt="Ekim Kael"
								style="cursor: auto;"
							/>
						</a>
					</div>

					<div class="ml-3">
						<p class="text-sm font-medium text-skin-inverted">
							<a href="/profile" class="hover:underline" style="cursor: auto;"> John Doe </a>
						</p>

						<div class="flex space-x-1 text-sm text-skin-muted" style="cursor: auto;">
							<Time relative timestamp={post.created_at} />

							<span aria-hidden="true">·</span>

							<span style="cursor: auto;">3 min read time</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
