import type { ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async ({ params, parent }) => {
	const { session, supabase, digital_order } = await parent();
	console.log(digital_order);
	return { digital_order };

	// let order = digital_order.id === params.order_id;
	// return { order };
};
