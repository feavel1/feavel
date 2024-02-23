import { epayClient } from '$lib/epay/epay-client';
import { error, json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ url }) => {
	const params = url.searchParams;

	const verify_result = epayClient.verifyReturn(params);

	if (verify_result) {
		const trade_status = params.get('trade_status');

		if (trade_status === 'TRADE_SUCCESS') {
			console.log('success');
			// Proced with buisiness logic
		}
		return json('success', { status: 201 });
	} else {
		return json('not-found', { status: 400 });
	}
};
