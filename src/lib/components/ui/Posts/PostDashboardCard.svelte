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

<li class="card w-full transition-opacity hover:opacity-50 p-2">
	<a href="/posts">
		<div class="sm:col-span-2">
			<h4 class="h4">
				{post.title}
			</h4>

			<div class="flex items-center">
				<!-- <div class="shrink-0">
						<a href="/profile">
							<span class="sr-only">Baby Feavel</span>

							<img
								class="h-10 w-10 rounded-full"
								src="https://stackdiary.com/140x100.png"
								alt="Ekim Kael"
								
							/>
						</a>
					</div> -->

				<div class="flex space-x-1 text-sm text-skin-muted mb-2">
					<Time relative timestamp={post.created_at} />
					<span> · 3 min read time</span>
				</div>
			</div>

			<div class="flex items-center space-x-3">
				<div class="flex items-center space-x-2">
					{#each tags as tag}
						<span class="badge variant-filled">
							<svg class="mr-1.5 h-2 w-2 brand-react" fill="currentColor" viewBox="0 0 8 8">
								<circle cx="4" cy="4" r="3"></circle>
							</svg>
							{tag.post_tags.tag_name}
						</span>
					{/each}
				</div>
			</div>
		</div>
	</a>
</li>
