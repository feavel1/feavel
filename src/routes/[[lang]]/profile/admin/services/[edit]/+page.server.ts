import type { PageServerLoad } from './$types';
import { throwRedirect } from '$lib/utils/helpers';

export const load: PageServerLoad = async ({ params, locals: { supabase } }) => {
	const { data: service, error: postError } = await supabase
		.from('services')
		.select(`*, services_category_rel(services_category(category_name))`)
		.filter('id', 'eq', params.edit)
		.single();

	if (postError) {
		console.log(postError);
	}
	if (service == null) {
		alert('No service found');

		throwRedirect(302, '/profile');
	}

	return {
		service
	};
};
