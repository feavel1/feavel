<script>
	import { goto } from '$app/navigation';

	export let data;
	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	if (session) {
		goto('/profile');
	}
	/**
	 * @type {string}
	 */
	let email;

	/**
	 * @type {string}
	 */
	let password;

	let loading = false;

	const handleSignIn = async () => {
		try {
			loading = true;
			const { error } = await supabase.auth.signInWithPassword({
				email,
				password
			});
			if (error) throw error;
			alert('Login successfully, visit your home page❤️!');
			goto('/profile');
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			loading = false;
		}
	};

	const handleSignUp = async () => {
		try {
			loading = true;
			const { error } = await supabase.auth.signUp({
				email,
				password,
				options: {
					emailRedirectTo: `${location.origin}/auth/callback`
				}
			});
			if (error) throw error;
			alert('Your email must be verified, go check your email❤️!');
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			loading = false;
		}
	};
</script>

<div
	class="max-w-md mx-auto bg-gradient-to-br variant-gradient-primary-secondary px-8 py-16 rounded-2xl"
>
	<div class="flex flex-col align-middle text-center gap-6 items-center w-full">
		<h1 class="h2 font-extrabold">Create / Sign-in your account</h1>
		<div>Create an account to enjoy all the services without any ads for free!</div>
		<form class="text-left">
			<label>
				<span>Email</span>
				<input placeholder="abc@abc.com" class="input" name="email" bind:value={email} />
			</label>

			<label>
				<span>Password</span>
				<input
					placeholder="MySafestPassword"
					class="input"
					type="password"
					name="password"
					bind:value={password}
				/>
			</label>
		</form>

		<div class="btn-group variant-filled mt-2 mx-auto">
			<button on:click|preventDefault={handleSignUp} disabled={loading}>Sign Up</button>
			<button on:click|preventDefault={handleSignIn} disabled={loading}>Sign In</button>
		</div>
	</div>
</div>
