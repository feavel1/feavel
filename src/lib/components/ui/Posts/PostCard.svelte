<script lang="ts">
	import Time from 'svelte-time';
	import Tags from './Tags.svelte';
	export let post: {
		id: any;
		created_at: any;
		post_views: any;
		user_id: any;
		users: {
			id: any;
			full_name: any;
		}[];
		title: any;
		posts_tags_rel: {
			post_tags: {
				tag_name: any;
			}[];
		}[];
	};

	let tags = post.posts_tags_rel;
</script>

<li class="relative flex items-center space-x-4 px-4 py-4 sm:px-6 lg:px-8">
	<div class="min-w-0 flex-auto">
		<div class="flex items-center gap-x-3">
			<div class="flex-none rounded-full p-1 text-tertiary-500 bg-tertiary-900">
				<div class="h-2 w-2 rounded-full bg-current"></div>
			</div>
			<h2 class="min-w-0 text-sm font-semibold leading-6">
				<a href="/posts/{post.id}" class="flex gap-x-2 h4">
					<span class="truncate">{post.title}</span>
					<span class="text-gray-400">/</span>
					<span class="whitespace-nowrap"
						>{post.post_views} {post.post_views == 1 ? 'view' : 'views'}</span
					>
					<span class="absolute inset-0"></span>
				</a>
			</h2>
		</div>
		<div class="mt-3 flex items-center gap-x-2.5 text-xs leading-5">
			<p class="truncate text-tertiary-500-400-token">
				<Time relative timestamp={post.created_at} />
			</p>
			<svg viewBox="0 0 2 2" class="h-0.5 w-0.5 flex-none">
				<circle cx="1" cy="1" r="1" />
			</svg>
			<div class="flex items-center space-x-3">
				<p class="whitespace-nowrap">
					<Tags {tags} />
				</p>
			</div>
		</div>
	</div>
	<div class="badge variant-ringed-secondary">Read</div>
	<svg class="h-5 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
		<path
			fill-rule="evenodd"
			d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
			clip-rule="evenodd"
		/>
	</svg>
</li>

<hr />
