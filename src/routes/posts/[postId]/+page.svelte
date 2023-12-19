<script lang="ts">
	import { Editor } from '$lib/components/editor/novel/index.js';

	export let data;
	let { supabase, session, post } = data;
	$: ({ supabase, session, post } = data);

	let comments: any = data.comments,
		tags = post.posts_tags_rel,
		comment_content = '';

	let postContent = post.content;

	$: postContent;

	console.log(postContent, post.content);

	const submitComment = async () => {
		try {
			if (!session) {
				alert('监测到您未登录.');
				return;
			}
			const { data: newComment, error } = await supabase
				.from('comments')
				.insert({ post_id: post.id, user_id: session.user.id, comment_content })
				.select(`*, comment_likes (user_id)`)
				.single();
			if (error) throw error;

			comments = [...comments, newComment];
			// location.reload();
			comment_content = '';
		} catch (error) {
			console.error(error);
			alert('添加评论时出错啦.');
		}
	};

	async function handelDeleteComment(comment: number) {
		const { data, error } = await supabase.from('comments').delete().eq('id', comment);
		if (error) throw new Error(error.message);
		location.reload();
		return data;
	}
</script>

<div>
	{post.created_at}
	{post.title}
	{#each tags as tag}
		<span class="badge variant-filled">
			<svg class="mr-1.5 h-2 w-2 brand-react" fill="currentColor" viewBox="0 0 8 8">
				<circle cx="4" cy="4" r="3"></circle>
			</svg>
			{tag.post_tags.tag_name}
		</span>
	{/each}

	<Editor disableLocalStorage={true} defaultValue={postContent || ''} />
</div>
