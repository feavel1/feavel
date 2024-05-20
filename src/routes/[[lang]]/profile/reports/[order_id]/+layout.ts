import type { ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async ({ params, parent }) => {
	const { session, supabase } = await parent();

	const { data: digital_order, error: digital_order_error } = await supabase
		.from('digital_order')
		.select(
			`id, created_at, user_id, service_id(id, name, cover_url, highlights), description, digital_purchase(id, created_at, price, payment_method, payment_status), conversation_id`
		)
		.eq('id', params.order_id)
		.single();

	return { digital_order };
};
