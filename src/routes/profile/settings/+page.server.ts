import { error, fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	updateUser: async ({ request, locals: { supabase, getSession } }) => {
		const session = await getSession();
		if (!session) {
			error(401, { message: 'Unauthorized' });
		}

		const formData = await request.formData();

		const full_name = formData.get('full_name');
		const username = formData.get('username');
		const address = formData.get('address');
		const avatarUrl = formData.get('avatarUrl') as string;

		const { data, error: createPostError } = await supabase
			.from('users')
			.update({
				full_name: full_name,
				username: username,
				avatar_url: avatarUrl,
				billing_address: address
			})
			.eq('id', session.user.id)
			.select();

		if (createPostError) {
			return fail(500, {
				supabaseErrorMessage: createPostError.message
			});
		}
		return {
			sucsess: true,
			userdata: data
		};
	}
};
