import { epayClient } from '$lib/epay/epay-client';
import { json } from '@sveltejs/kit';

export const GET = async ({ request: req }) => {
	const params = req.headers;

	console.log(params);

	const verify_result = epayClient.verifyNotify(params);

	if (verify_result) {
		// If verification succeeds
		// Extract required parameters from the request
		const out_trade_no = params.get('out_trade_no');
		const trade_no = params.get('trade_no');
		const trade_status = params.get('trade_status');
		const type = params.get('type');
		const money = params.get('money');

		if (trade_status === 'TRADE_SUCCESS') {
			// Perform business logic here if necessary
			console.log('success');
		}

		return json('success', { status: 201 });
	} else {
		return json('not-found', { status: 400 });
	}
};
