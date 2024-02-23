export const load = async ({ parent }: any) => {
	const { userdata } = await parent();

	return {
		userdata
	};
};
