import type { RequestHandler } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params, locals: { supabase } }) => {
	const slug = params.postId;

	try {
		// Call our stored procedure with the page_slug set by the request params slug
		await supabase.rpc('update_views', { page_id: slug });
		return json({
			success: true,
			message: `Successfully incremented page: ${slug}`
		});
	} catch (err) {
		return json({ error: err.message });
	}
};
