import { throwRedirect } from '$lib/utils/helpers';
import { redirect, type ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async ({ params, locals: { supabase } }) => {
	const { data: post, error: postError } = await supabase
		.from('posts')
		.select(
			`id, content, created_at, post_views, user_id, title, posts_tags_rel(post_tags(tag_name))`
		)
		.filter('id', 'eq', params.postId)
		.single();
	if (postError) {
		console.log(postError);
	}

	if (post == null) {
		throwRedirect(302, '/posts');
	}

	// const { data: comments, error: commentsError } = await supabase
	// 	.from('post_comment')
	// 	.select(`content, created_at, id, post_comment_like(user_id)`)
	// 	.order('created_at', { ascending: false })
	// 	.eq('post_id', params.postId);
	// if (commentsError) {
	// 	console.log(commentsError);
	// }

	// Return the data and errors
	return {
		post
		// comments
	};
};
