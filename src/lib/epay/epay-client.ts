import { MERCHANT_KEY, MERCHANT_PID, MERCHANT_URL } from '$env/static/private';
import EpayCore from './EpayCore';

const config = {
	pid: MERCHANT_PID,
	key: MERCHANT_KEY,
	apiurl: 'api.api.com/api.json?'
};

export const epayClient = new EpayCore(config);
