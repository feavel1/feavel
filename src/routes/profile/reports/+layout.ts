import { redirect, type ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async ({ parent }) => {
	const { session, supabase } = await parent();

	const { data: digital_purchase, error: service_error } = await supabase
		.from('digital_purchase')
		.select(`id, created_at, service_id(name, cover_url), price, payment_method, payment_status`)
		.eq('user_id', session.user.id);

	if (service_error) {
		console.log(service_error);
		return { error: 'Failed to fetch services' };
	}

	return { digital_purchase };
};
