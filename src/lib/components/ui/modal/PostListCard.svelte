<script lang="ts">
	import Time from 'svelte-time';
	import Tags from '../Posts/Tags.svelte';

	export let post: any;
</script>

<div
	class="card bg-gradient-to-br variant-gradient-primary-secondary w-full transition-opacity hover:opacity-50 p-3"
>
	<a href="/posts/{post.id}">
		<!-- <a href="/posts" class="group">
			<div class="">
				<img
					class="object-cover shadow-lg rounded-lg group-hover:opacity-75"
					src="https://stackdiary.com/140x100.png"
					alt="Featured Photo"
					
				/>
			</div>
		</a> -->

		<div class="sm:col-span-2">
			<h4 class="h1 mb-3">
				{post.title}
			</h4>

			<p class="">
				<!-- {post.content} -->
			</p>

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

				<div class="flex space-x-1 text-sm text-skin-muted mb-4">
					<Time relative timestamp={post.created_at} />
					<span> · 3 min read time</span>
				</div>
			</div>
			<div class="flex items-center space-x-3">
				<!-- <Tags {post.posts_tags_rel} /> -->
			</div>
		</div>
	</a>
</div>
