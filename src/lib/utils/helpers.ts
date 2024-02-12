// import type { Database } from '$lib/supabase/types_db';
// type Price = Database['public']['Tables']['prices']['Row'];
// import { MERCHANT_KEY } from '$env/static/private';
// import * as crypto from 'crypto';
import { PUBLIC_SITE_URL } from '$env/static/public';

export const getURL = () => {
	let url =
		PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
		process?.env?.PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
		'http://localhost:5173/';
	// Make sure to include `https://` when not localhost.
	url = url.includes('http') ? url : `https://${url}`;
	// Make sure to including trailing `/`.
	url = url.charAt(url.length - 1) === '/' ? url : `${url}/`;
	return url;
};

// export const postData = async ({ url, data }: { url: string; data?: { price: Price } }) => {
// 	console.log('posting,', url, data);

// 	const res = await fetch(url, {
// 		method: 'POST',
// 		headers: new Headers({ 'Content-Type': 'application/json' }),
// 		credentials: 'same-origin',
// 		body: JSON.stringify(data)
// 	});

// 	if (!res.ok) {
// 		console.log('Error in postData', { url, data, res });

// 		throw Error(res.statusText);
// 	}

// 	return res.json();
// };

export const toDateTime = (secs: number) => {
	var t = new Date('1970-01-01T00:30:00Z'); // Unix epoch start.
	t.setSeconds(secs);
	return t;
};

export const capitalizeFirstLetter = (str: string) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

export const generateUUID = () => {
	// Public Domain/MIT
	var d = new Date().getTime(); //Timestamp
	var d2 = (typeof performance !== 'undefined' && performance.now && performance.now() * 1000) || 0; //Time in microseconds since page-load or 0 if unsupported
	return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		var r = Math.random() * 16; //random number between 0 and 16
		if (d > 0) {
			//Use timestamp until depleted
			r = (d + r) % 16 | 0;
			d = Math.floor(d / 16);
		} else {
			//Use microseconds since page-load if supported
			r = (d2 + r) % 16 | 0;
			d2 = Math.floor(d2 / 16);
		}
		return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
	});
};

export function isMobileOrTablet() {
	return /(android|iphone|ipad|mobile)/i.test(navigator.userAgent);
}
