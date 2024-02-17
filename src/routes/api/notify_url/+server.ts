import { epayClient } from '$lib/epay/epay-client';
import { json, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ url }) => {
	const params = url.searchParams;

	const verify_result = epayClient.verifyReturn(params);

	if (verify_result) {
		// If verification succeeds
		// Extract required parameters from the request
		const trade_status = params.get('trade_status');
		const out_trade_no = params.get('out_trade_no');
		const trade_no = params.get('trade_no');
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
