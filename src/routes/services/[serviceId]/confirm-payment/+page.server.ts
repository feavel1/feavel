import { epayClient } from '$lib/epay/epay-client';
import { getURL } from '$lib/utils/helpers';
import { redirect, type Actions, type ServerLoad } from '@sveltejs/kit';
import { createDigitalPurchase } from '$lib/supabase/supabase-admin';

export const actions: Actions = {
	payOnline: async ({ request, locals }) => {
		const session = await locals.getSession();

		const data = await request.formData();

		if (!session) {
			alert('You must be logged in to create purchase 🫨');
			throw redirect(302, '/profile');
		}

		const pid = 1025;
		const type = data.get('type');
		const out_trade_no = data.get('out_trade_no');
		const notify_url = getURL() + 'api/notify_url';
		const return_url = getURL() + 'api/return_url';
		const name = data.get('service_id');
		const money = data.get('money');
		const param = '';

		const specialParam = {
			pid,
			type,
			out_trade_no,
			notify_url,
			return_url,
			name,
			money,
			param
		};

		const url = epayClient.getPayLink(specialParam);

		// Bussiness logic goes here, insert everything you need to supabase, and redirect your user to payment page.

		const purchaseData = {
			id: specialParam.out_trade_no,
			user_id: session.user.id,
			service_id: specialParam.name,
			price: specialParam.money,
			payment_method: specialParam.type,
			payment_status: 'created'
		};

		createDigitalPurchase(purchaseData);

		redirect(300, url);
	}
};

export const load: ServerLoad = async ({ parent }) => {
	let { transformedService, session } = await parent();
	return {
		transformedService,
		session
	};
};
