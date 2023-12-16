import { redirect } from '@sveltejs/kit';

export const load = async ({ parent }: any) => {
	const { supabase, session } = await parent();
	if (!session) {
		// the user is not signed in
		throw redirect(302, '/auth');
	}
	const { data: userdata } = await supabase
		.from('users')
		.select(`id, username, full_name, avatar_url, billing_address`)
		.eq('id', session.user.id)
		.single();

	let { data: stripeId } = await supabase
		.from('customers')
		.select('stripe_customer_id')
		.eq('id', session.user.id)
		.single();

	return {
		userdata
	};
};
