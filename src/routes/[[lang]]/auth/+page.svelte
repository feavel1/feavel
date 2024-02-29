<script>
	import { goto } from '$app/navigation';
	import * as m from '$paraglide/messages';

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
					emailRedirectTo: `${window.location.origin}/auth/callback`
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
		<h1 class="h2 font-extrabold">{m.sign_up()} / {m.sign_in()} {m.your_account()}</h1>
		<div>{m.create_account_and_enjoy()}</div>
		<form class="text-left">
			<label>
				<span>{m.email()}</span>
				<input placeholder="abc@abc.com" class="input" name="email" bind:value={email} />
			</label>

			<label>
				<span>{m.password()}</span>
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
			<button on:click|preventDefault={handleSignUp} disabled={loading}>{m.sign_up()}</button>
			<button on:click|preventDefault={handleSignIn} disabled={loading}>{m.sign_in()}</button>
		</div>
	</div>
</div>
