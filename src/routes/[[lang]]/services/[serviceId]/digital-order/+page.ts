import { throwRedirect } from '$lib/utils/helpers';
import { redirect, type Load } from '@sveltejs/kit';

export const load: Load = async ({ parent }) => {
	const { supabase, session } = await parent();

	if (!session) {
		throwRedirect(302, '/auth');
	}

	const { data: userdata } = await supabase
		.from('users')
		.select(`id, username, full_name, avatar_url, description`)
		.eq('id', session.user.id)
		.single();

	return {
		userdata
	};
};
