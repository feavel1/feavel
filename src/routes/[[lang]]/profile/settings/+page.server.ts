import { throwRedirect } from '$lib/utils/helpers';
import { error, fail, redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	updateUser: async ({ request, locals: { supabase, safeGetSession } }) => {
		const session = await safeGetSession();
		if (!session) {
			error(401, { message: 'Unauthorized' });
		}

		const formData = await request.formData();
		const full_name = formData.get('full_name');
		const username = formData.get('username');
		// const address = formData.get('address');
		const avatarUrl = formData.get('avatarUrl') as string;

		const { data, error: createPostError } = await supabase
			.from('users')
			.update({
				full_name: full_name,
				username: username,
				avatar_url: avatarUrl
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
	},
	signout: async ({ locals: { supabase, safeGetSession } }) => {
		const session = await safeGetSession();
		if (session) {
			await supabase.auth.signOut();
			throwRedirect(303, '/');
		}
	}
};
