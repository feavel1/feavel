import { redirect, type ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async ({ parent }) => {
	const { session, supabase } = await parent();

	const { data: digital_order, error: digital_order_error } = await supabase
		.from('digital_order')
		.select(
			`id, created_at, service_id(id, name, cover_url, highlights), description, digital_purchase(id, created_at, price, payment_method, payment_status)`
		)
		.eq('user_id', session.user.id);

	if (digital_order_error) {
		return { error: 'Failed to fetch services' };
	}

	return { digital_order };
};
