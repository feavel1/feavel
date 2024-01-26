import { redirect } from '@sveltejs/kit';

export const load = async ({ parent }: any) => {
	const { supabase, session } = await parent();

	if (!session) {
		throw redirect(302, '/auth');
	}

	const { data: applicationStatus } = await supabase
		.from('studios')
		.select('status')
		.eq('user_id', session.user.id)
		.single();

	const { data: userdata } = await supabase
		.from('users')
		.select(`id, username, full_name, avatar_url, description`)
		.eq('id', session.user.id)
		.single();

	return {
		applicationStatus,
		userdata
	};
};
