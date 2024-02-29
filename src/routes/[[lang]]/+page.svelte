<script lang="ts">
	// import Feavel from '$lib/components/ui/logo/Feavel.svelte';
	import {
		LucideArrowRight,
		LucideAudioLines,
		LucideAudioWaveform,
		LucideClipboardSignature,
		LucidePackageOpen,
		LucideWorkflow
	} from 'lucide-svelte';

	import * as m from '$paraglide/messages';
</script>

<main>
	<!-- Hero section -->
	<div class="relative isolate overflow-hidden">
		<svg
			class="absolute inset-0 -z-10 h-full w-full stroke-tertiary-400 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
			aria-hidden="true"
		>
			<defs>
				<pattern
					id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
					width="200"
					height="200"
					x="50%"
					y="-1"
					patternUnits="userSpaceOnUse"
				>
					<path d="M.5 200V.5H200" fill="none" />
				</pattern>
			</defs>
			<svg x="50%" y="-1" class="overflow-visible fill-surface-500/20">
				<path
					d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
					stroke-width="0"
				/>
			</svg>
			<rect
				width="100%"
				height="100%"
				stroke-width="0"
				fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
			/>
		</svg>
		<div
			class="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
			aria-hidden="true"
		>
			<div
				class="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
				style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"
			></div>
		</div>

		<div class="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-40 lg:flex lg:px-8 lg:pt-40">
			<div class="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
				<div class="mt-24 sm:mt-32 lg:mt-16">
					<!-- <Feavel /> -->
					<div class="inline-flex space-x-6">
						<a href="/posts" class="btn variant-glass-primary rounded-3xl">{m.read_posts()}</a>
						<a
							href="/posts/create-post"
							class="inline-flex items-center space-x-2 text-sm font-medium ml-10 text-tertiary-600 hover:underline decoration-slice"
						>
							<span>{m.try_feavel_editor_1()}</span>
							<LucideArrowRight class="h-5 w-5 text-gray-500" />
						</a>
					</div>
				</div>
				<h1 class="mt-10 text-4xl font-bold tracking-tight sm:text-6xl">
					{m.make_your()}
					<span class="underline decoration-wavy underline-offset-4 decoration-success-400">
						{m.art()}
					</span>
					<span class="decoration-dotted underline underline-offset-4 decoration-teal-400">
						{m.stand_out()}
					</span>
				</h1>
				<p class="mt-6 text-lg leading-8 text-tertiary-600">
					{m.description_1()}
				</p>
				<div class="mt-10 flex items-center gap-x-6">
					<a href="/auth" class="btn variant-filled-primary">{m.sign_up()}</a>
					<a href="/auth" class="text-sm font-semibold leading-6">
						{m.sign_in()}
						<span aria-hidden="true">→</span>
					</a>
				</div>
			</div>
			<div
				class="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32"
			>
				<div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
					<img
						src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
						alt="App screenshot"
						width="2432"
						height="1442"
						class="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
					/>
				</div>
			</div>
		</div>
	</div>

	<!-- Logo cloud -->
	<div class="mx-auto mt-8 max-w-7xl px-6 sm:mt-16 lg:px-8">
		<h2 class="text-center text-lg font-semibold leading-8">
			Open source platform, made from open source tech.
		</h2>

		<div
			class="logo-cloud [&>.logo-item]:rounded-xl [&>.logo-item]:variant-filled-primary mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"
		>
			<a class="logo-item col-span-2 max-h-12 w-full object-contain lg:col-span-1" href="/">
				<span>
					<img class="" src="logos/svelte-kit.png" alt="Transistor" width="158" height="48" />
				</span>
			</a>
			<a class="logo-item col-span-2 max-h-12 w-full object-contain lg:col-span-1" href="/">
				<span>
					<img class="" src="logos/supabase_big.svg" alt="Transistor" width="158" height="48" />
				</span>
			</a>
			<a class="logo-item col-span-2 max-h-12 w-full object-contain lg:col-span-1" href="/">
				<span>
					<img class="pb-1" src="logos/skeleton.svg" alt="Transistor" width="158" height="48" />
				</span>
			</a>
			<a class="logo-item col-span-2 max-h-12 w-full object-contain lg:col-span-1" href="/">
				<span>
					<img class="" src="logos/tiptap.svg" alt="Transistor" width="158" height="48" />
				</span>
			</a>
			<a
				class="logo-item col-span-2 col-start-2 sm:col-start-auto max-h-12 w-full object-contain lg:col-span-1"
				href="/"
			>
				<span>
					<img class="" src="logos/unionpay.png" alt="Transistor" width="158" height="48" />
				</span>
			</a>
		</div>
	</div>

	<!-- Feature section -->
	<div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-base font-semibold leading-7 text-secondary-600-300-token">
				start simple, finish complex
			</h2>
			<p class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
				Everything you need all in one place
			</p>
			<p class="mt-6 text-lg leading-8 text-tertiary-600">
				Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate
				veritatis in accusamus quisquam.
			</p>
		</div>
		<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
			<dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
				<div class="flex flex-col">
					<dt class="text-base font-semibold leading-7">
						<div class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
							<LucideClipboardSignature />
						</div>
						Create
					</dt>
					<dd class="mt-1 flex flex-auto flex-col text-base leading-7 text-tertiary-600">
						<p class="flex-auto">
							Write technical posts and knowledege for everyone to see. We provide a simple to use
							and beautiful text editor to share what you know.
						</p>
						<p class="mt-6">
							<a
								href="/posts/create-post"
								class="text-sm font-semibold leading-6 text-secondary-600-300-token"
							>
								Learn more
								<span aria-hidden="true">→</span>
							</a>
						</p>
					</dd>
				</div>
				<div class="flex flex-col">
					<dt class="text-base font-semibold leading-7">
						<div class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
							<svg
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
								/>
							</svg>
						</div>
						Collaborate
					</dt>
					<dd class="mt-1 flex flex-auto flex-col text-base leading-7 text-tertiary-600">
						<p class="flex-auto">
							Become a mixing studio and create services for users. Currently we are looking for all
							types of engineers. You can apply for admin in your profile page.
						</p>
						<p class="mt-6">
							<a href="#" class="text-sm font-semibold leading-6 text-secondary-600-300-token">
								Learn more
								<span aria-hidden="true">→</span>
							</a>
						</p>
					</dd>
				</div>
				<div class="flex flex-col">
					<dt class="text-base font-semibold leading-7">
						<div class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
							<LucidePackageOpen />
						</div>
						Inspire
					</dt>
					<dd class="mt-1 flex flex-auto flex-col text-base leading-7 text-tertiary-600">
						<p class="flex-auto">
							We use open source to innovate our services. Never get locked in or discontinued
							again! You can always join our community and start submitting features your self.
						</p>
						<p class="mt-6">
							<a href="#" class="text-sm font-semibold leading-6 text-secondary-600-300-token">
								Learn more
								<span aria-hidden="true">→</span>
							</a>
						</p>
					</dd>
				</div>
			</dl>
		</div>
	</div>

	<!-- Feature section -->
	<div class="mt-32 sm:mt-56">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl sm:text-center">
				<h2 class="text-base font-semibold leading-7 text-secondary-600-300-token">
					Everything you need
				</h2>
				<p class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Beginner? No problem.</p>
				<p class="mt-6 text-lg leading-8 text-tertiary-600">
					We provide many tutorials and resources to get started in music production, programming,
					philosophy, advertising and more! Join our community to create posts and tutorials for
					beginners.
				</p>
			</div>
		</div>
		<div class="relative overflow-hidden pt-16">
			<div class="mx-auto max-w-7xl px-6 lg:px-8">
				<img
					src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
					alt="App screenshot"
					class="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10"
					width="2432"
					height="1442"
				/>
				<div class="relative" aria-hidden="true">
					<div class="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-900 pt-[7%]"></div>
				</div>
			</div>
		</div>
		<div class="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
			<dl
				class="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-tertiary-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16"
			>
				<div class="relative pl-9">
					<dt class="inline font-semibold">
						<LucideAudioLines class="absolute left-1 top-1 h-5 w-5 text-indigo-500" />
						Record audio.
					</dt>
					<dd class="inline">Join our audio engenearing team to book a recording session.</dd>
				</div>
				<div class="relative pl-9">
					<dt class="inline font-semibold">
						<LucideAudioWaveform class="absolute left-1 top-1 h-5 w-5 text-indigo-500" />
						Mix audio
					</dt>
					<dd class="inline">
						Pick and choose an audio engeneer to mix and master your song professionaly.
					</dd>
				</div>
				<div class="relative pl-9">
					<dt class="inline font-semibold">
						<LucideWorkflow class="absolute left-1 top-1 h-5 w-5 text-indigo-500" />
						Producing and beat making
					</dt>
					<dd class="inline">A list full of beat makers that are willing to create with you.</dd>
				</div>
				<div class="relative pl-9">
					<dt class="inline font-semibold">
						<svg
							class="absolute left-1 top-1 h-5 w-5 text-indigo-500"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M10 2.5c-1.31 0-2.526.386-3.546 1.051a.75.75 0 01-.82-1.256A8 8 0 0118 9a22.47 22.47 0 01-1.228 7.351.75.75 0 11-1.417-.49A20.97 20.97 0 0016.5 9 6.5 6.5 0 0010 2.5zM4.333 4.416a.75.75 0 01.218 1.038A6.466 6.466 0 003.5 9a7.966 7.966 0 01-1.293 4.362.75.75 0 01-1.257-.819A6.466 6.466 0 002 9c0-1.61.476-3.11 1.295-4.365a.75.75 0 011.038-.219zM10 6.12a3 3 0 00-3.001 3.041 11.455 11.455 0 01-2.697 7.24.75.75 0 01-1.148-.965A9.957 9.957 0 005.5 9c0-.028.002-.055.004-.082a4.5 4.5 0 018.996.084V9.15l-.005.297a.75.75 0 11-1.5-.034c.003-.11.004-.219.005-.328a3 3 0 00-3-2.965zm0 2.13a.75.75 0 01.75.75c0 3.51-1.187 6.745-3.181 9.323a.75.75 0 11-1.186-.918A13.687 13.687 0 009.25 9a.75.75 0 01.75-.75zm3.529 3.698a.75.75 0 01.584.885 18.883 18.883 0 01-2.257 5.84.75.75 0 11-1.29-.764 17.386 17.386 0 002.078-5.377.75.75 0 01.885-.584z"
								clip-rule="evenodd"
							/>
						</svg>
						Sound engenering
					</dt>
					<dd class="inline">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.
					</dd>
				</div>
				<div class="relative pl-9">
					<dt class="inline font-semibold">
						<svg
							class="absolute left-1 top-1 h-5 w-5 text-indigo-500"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z"
								clip-rule="evenodd"
							/>
						</svg>
						Become a mixing engeneer
					</dt>
					<dd class="inline">
						Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
						commodo.
					</dd>
				</div>
				<div class="relative pl-9">
					<dt class="inline font-semibold">
						<svg
							class="absolute left-1 top-1 h-5 w-5 text-indigo-500"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z"
							/>
							<path
								fill-rule="evenodd"
								d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z"
								clip-rule="evenodd"
							/>
						</svg>
						Join community
					</dt>
					<dd class="inline">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.</dd>
				</div>
			</dl>
		</div>
	</div>

	<!-- Stats -->
	<div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
		<div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
			<h2 class="text-base font-semibold leading-8 text-secondary-600-300-token">
				Our track record
			</h2>
			<p class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
				Trusted by musicians&nbsp;worldwide
			</p>
			<p class="mt-6 text-lg leading-8 text-tertiary-600">
				We started small and moved step by step. This is a huge leap for us as a platform. We record
				and track the progress that we make everyday.
			</p>
		</div>
		<dl
			class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4"
		>
			<div class="flex flex-col gap-y-3 border-l border-white/10 pl-6">
				<dt class="text-sm leading-6">Working time</dt>
				<dd class="order-first text-3xl font-semibold tracking-tight">6 years+</dd>
			</div>
			<div class="flex flex-col gap-y-3 border-l border-white/10 pl-6">
				<dt class="text-sm leading-6">Monthly activity</dt>
				<dd class="order-first text-3xl font-semibold tracking-tight">100+</dd>
			</div>
			<div class="flex flex-col gap-y-3 border-l border-white/10 pl-6">
				<dt class="text-sm leading-6">On time guarantee</dt>
				<dd class="order-first text-3xl font-semibold tracking-tight">99.9%</dd>
			</div>
			<div class="flex flex-col gap-y-3 border-l border-white/10 pl-6">
				<dt class="text-sm leading-6">Posts created</dt>
				<dd class="order-first text-3xl font-semibold tracking-tight">100+</dd>
			</div>
		</dl>
	</div>

	<!-- CTA section -->
	<div class="relative isolate mt-32 px-6 py-32 sm:mt-56 sm:py-40 lg:px-8">
		<svg
			class="absolute inset-0 -z-10 h-full w-full stroke-surface-400/50 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
			aria-hidden="true"
		>
			<defs>
				<pattern
					id="1d4240dd-898f-445f-932d-e2872fd12de3"
					width="200"
					height="200"
					x="50%"
					y="0"
					patternUnits="userSpaceOnUse"
				>
					<path d="M.5 200V.5H200" fill="none" />
				</pattern>
			</defs>
			<svg x="50%" y="0" class="overflow-visible fill-gray-800/20">
				<path
					d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
					stroke-width="0"
				/>
			</svg>
			<rect
				width="100%"
				height="100%"
				stroke-width="0"
				fill="url(#1d4240dd-898f-445f-932d-e2872fd12de3)"
			/>
		</svg>
		<div
			class="absolute inset-x-0 top-10 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
			aria-hidden="true"
		>
			<div
				class="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-50"
				style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"
			></div>
		</div>
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
				Boost your work.<br />Start using our app today.
			</h2>
			<p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-tertiary-600">
				Create an account and start reading, liking, commenting. You can also apply for our admin to
				create services.
			</p>
			<div class="mt-10 flex items-center justify-center gap-x-6">
				<a href="/auth" class="btn variant-filled">Get started</a>
				<a href="/profile" class="text-sm font-semibold leading-6"
					>x1 your profile <span aria-hidden="true">→</span></a
				>
			</div>
		</div>
	</div>
</main>
