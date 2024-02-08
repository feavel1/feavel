import { epayClient } from '$lib/epay/epay-client';
import { json } from '@sveltejs/kit';

export const POST = async ({ request: req }) => {
	const params = req.headers;

	const trade_no = params.get('trade_no');
	const out_trade_no = params.get('out_trade_no');
	const type = params.get('type');
	const name = params.get('name');
	const money = params.get('money');
	const trade_status = params.get('trade_status');

	const checkParams = params;

	console.log(trade_status);

	const verify_result = epayClient.verifyNotify(checkParams);

	if (verify_result) {
		// If verification succeeds
		// Extract required parameters from the request

		if (trade_status === 'TRADE_SUCCESS') {
			// Perform business logic here if necessary
			console.log('success');
		}

		return json('success', { status: 201 });
	} else {
		return json('not-found', { status: 400 });
	}
};
