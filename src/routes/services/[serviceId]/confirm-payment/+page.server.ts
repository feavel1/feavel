import { MERCHANT_PID } from '$env/static/private';
import { epayClient } from '$lib/epay/epay-client';
import { type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	payOnline: async ({ request }) => {
		const data = await request.formData();

		const pid = MERCHANT_PID;
		const type = data.get('type');
		const out_trade_no = data.get('out_trade_no');
		const notify_url = data.get('notify_url');
		const return_url = data.get('return_url');
		const name = data.get('name');
		const money = data.get('money');
		const clientip = data.get('clientip');
		const device = data.get('device');
		const param = data.get('param');

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

		const response = await epayClient.apiPay(parameters);

		if (response.ok) {
			const responseData = await response.json();
			return {
				status: 200,
				body: responseData
			};
		} else {
			return {
				status: response.status,
				body: { message: '支付请求失败' }
			};
		}
	}
};

export const load = async ({ parent }) => {
	let { transformedService, session } = await parent();
	return {
		transformedService,
		session
	};
};
