import { epayClient } from '$lib/epay/epay-client';
import { getURL } from '$lib/utils/helpers';
import { type Actions, type ServerLoad } from '@sveltejs/kit';

export const actions: Actions = {
	payOnline: async ({ request }) => {
		const data = await request.formData();

		const pid = 1025;
		const type = data.get('type');
		const out_trade_no = data.get('out_trade_no');
		const notify_url = getURL() + 'api/notify_url';
		const return_url = getURL() + 'api/return_url';
		const name = data.get('name');
		const money = data.get('money');
		const clientip = '192.168.1.100';
		const device = 'mobile';
		const param = '';

		const parameters = {
			pid,
			type,
			out_trade_no,
			notify_url,
			return_url,
			name,
			money,
			clientip,
			device,
			param
		};

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
		// const { error } = await supabaseAdmin.from('products').upsert([productData]);

		const url = epayClient.getPayLink(specialParam);
		const response = await epayClient.apiPay(parameters);

		console.log(url);

		if (response) {
			if (response.code === 1) {
				console.log('response code: 1; Proceede to business logic', response);

				// Bussiness logic goes here, insert everything you need to supabase, and redirect your user to payment page.

				return {
					status: 200,
					body: response
				};
			} else {
				console.log('response', response);

				return {
					status: 301,
					body: response
				};
			}
		} else {
			return {
				status: response.status,
				body: { message: '支付请求失败' }
			};
		}
	}
};

export const load: ServerLoad = async ({ parent }) => {
	let { transformedService, session } = await parent();
	return {
		transformedService,
		session
	};
};
