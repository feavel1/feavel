<script lang="ts">
	import Time from 'svelte-time';
	export let post: {
		id: any;
		created_at: any;
		user_id: any;
		users: {
			id: any;
			full_name: any;
		}[];
		title: any;
		posts_tags_rel: {
			tag_id: any;
			post_tags: {
				tag_name: any;
			};
		}[];
	};

	$: tags = post.posts_tags_rel;
</script>

<div style="card w-full animate-pulse">
	<div
		class="space-y-4 lg:grid lg:grid-cols-3 lg:items-start lg:gap-6 lg:space-y-0"
		style="cursor: auto;"
	>
		<!-- <a href="/posts" class="group">
			<div class="">
				<img
					class="object-cover shadow-lg rounded-lg group-hover:opacity-75"
					src="https://stackdiary.com/140x100.png"
					alt="Featured Photo"
					style="cursor: auto;"
				/>
			</div>
		</a> -->

		<div class="sm:col-span-2" style="cursor: auto;">
			<div class="flex items-center space-x-3" style="cursor: auto;">
				<div class="flex items-center space-x-2" style="cursor: auto;">
					{#each tags as tag}
						<span
							class="inline-flex items-center leading-none px-2.5 py-1.5 text-sm font-medium text-skin-inverted rounded-full border border-skin-input"
							style="cursor: auto;"
						>
							<svg class="mr-1.5 h-2 w-2 brand-react" fill="currentColor" viewBox="0 0 8 8">
								<circle cx="4" cy="4" r="3"></circle>
							</svg>
							{tag.post_tags.tag_name}
						</span>
					{/each}
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
