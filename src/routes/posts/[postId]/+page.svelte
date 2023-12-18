<script lang="ts">
	import { page } from '$app/stores';

	export let data;
	let { supabase, session, post } = data;
	$: ({ supabase, session } = data);

	let comments: any = data.comments,
		content = '',
		user = session!.user;

	const submitComment = async () => {
		try {
			if (!user) {
				alert('监测到您未登录.');
				return;
			}
			const { data: newComment, error } = await supabase
				.from('comments')
				.insert({ post_id: post.id, user_id: user.id, content, email: user.email })
				.select(`*, comment_likes (user_id)`)
				.single();
			if (error) throw error;

			comments = [...comments, newComment];
			// location.reload();
			content = '';
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
</div>
