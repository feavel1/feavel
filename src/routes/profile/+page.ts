import { redirect } from '@sveltejs/kit';

export const load = async ({ parent }: any) => {
	const { supabase, session } = await parent();

	if (!session) {
		throw redirect(302, '/auth');
	}

	const { data: userdata } = await supabase
		.from('users')
		.select(`avatar_url`)
		.eq('id', session.user.id)
		.single();

	const { data: subscription } = await supabase
		.from('subscriptions')
		.select('*, prices(*, products(*))')
		.in('status', ['trialing', 'active'])
		.maybeSingle()
		.throwOnError();

	return {
		subscription,
		userdata
	};
};
