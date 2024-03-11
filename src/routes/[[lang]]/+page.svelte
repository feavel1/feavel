<script lang="ts">
	// import Feavel from '$lib/components/ui/logo/Feavel.svelte';
	import {
		LucideArrowRight,
		LucideAudioLines,
		LucideAudioWaveform,
		LucideClipboardSignature,
		LucideContact,
		LucidePackageOpen,
		LucideUsers,
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
		<h2 class="text-center text-lg font-semibold leading-8">{m.open_source_desc()}</h2>

		<div
			class="logo-cloud [&>.logo-item]:rounded-xl [&>.logo-item]:bg-zinc-300 mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"
		>
			<a
				target="_blank"
				class="logo-item col-span-2 max-h-12 w-full object-contain lg:col-span-1"
				href="https://kit.svelte.dev"
			>
				<span>
					<img class="p-2" src="logos/svelte-kit.png" alt="Transistor" width="158" height="48" />
				</span>
			</a>
			<a
				target="_blank"
				class="logo-item col-span-2 max-h-12 w-full object-contain lg:col-span-1"
				href="https://supabase.com"
			>
				<span>
					<img class="p-2" src="logos/supabase_big.svg" alt="Transistor" width="158" height="48" />
				</span>
			</a>
			<a
				target="_blank"
				class="logo-item col-span-2 max-h-12 w-full object-contain lg:col-span-1"
				href="https://www.skeleton.dev"
			>
				<span>
					<img class="p-2 pb-3" src="logos/skeleton.svg" alt="Transistor" width="158" height="48" />
				</span>
			</a>
			<a
				target="_blank"
				class="logo-item col-span-2 max-h-12 w-full object-contain lg:col-span-1"
				href="https://tiptap.dev"
			>
				<span>
					<img class="p-2" src="logos/tiptap.svg" alt="Transistor" width="158" height="48" />
				</span>
			</a>
			<a
				target="_blank"
				class="logo-item col-span-2 col-start-2 sm:col-start-auto max-h-12 w-full object-contain lg:col-span-1"
				href="https://open.unionpay.com/tjweb/index"
			>
				<span>
					<img class="p-2" src="logos/unionpay.png" alt="Transistor" width="158" height="48" />
				</span>
			</a>
		</div>
	</div>

	<!-- Feature section -->
	<div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-base font-semibold leading-7 text-secondary-600-300-token">
				{m.start_simple_desc()}
			</h2>
			<p class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
				{m.everything_in_one_place()}
			</p>
			<p class="mt-6 text-lg leading-8 text-tertiary-600">
				{m.find_people()}
			</p>
		</div>
		<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
			<dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
				<div class="flex flex-col">
					<dt class="text-base font-semibold leading-7">
						<div class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
							<LucideClipboardSignature />
						</div>
						{m.create()}
					</dt>
					<dd class="mt-1 flex flex-auto flex-col text-base leading-7 text-tertiary-600">
						<p class="flex-auto">
							{m.weite_tech_posts()}
						</p>
						<p class="mt-6">
							<a
								href="/posts/create-post"
								class="text-sm font-semibold leading-6 text-secondary-600-300-token"
							>
								{m.learn_more()}
								<span aria-hidden="true">→</span>
							</a>
						</p>
					</dd>
				</div>
				<div class="flex flex-col">
					<dt class="text-base font-semibold leading-7">
						<div class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
							<LucideUsers class="h-6 w-6" />
						</div>
						{m.collaborate()}
					</dt>
					<dd class="mt-1 flex flex-auto flex-col text-base leading-7 text-tertiary-600">
						<p class="flex-auto">
							{m.become_a_studio_description()}
						</p>
						<p class="mt-6">
							<a
								href="/profile/admin"
								class="text-sm font-semibold leading-6 text-secondary-600-300-token"
							>
								{m.learn_more()}
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
						{m.inspire()}
					</dt>
					<dd class="mt-1 flex flex-auto flex-col text-base leading-7 text-tertiary-600">
						<p class="flex-auto">
							{m.open_source_desc_2()}
						</p>
						<p class="mt-6">
							<a
								href="https://github.com/feavel1/feavel"
								class="text-sm font-semibold leading-6 text-secondary-600-300-token"
							>
								{m.learn_more()}
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
					{m.made_by_musicians()}
				</h2>
				<p class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{m.beginner()}</p>
				<p class="mt-6 text-lg leading-8 text-tertiary-600">
					{m.beginner_desc()}
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
						<LucideContact class="absolute left-1 top-1 h-5 w-5 text-indigo-500" />
						{m.contact_us()}
					</dt>
					<dd class="inline">
						{m.contact_us_desc()}
					</dd>
				</div>
				<div class="relative pl-9">
					<dt class="inline font-semibold">
						<LucideAudioLines class="absolute left-1 top-1 h-5 w-5 text-indigo-500" />
						{m.record_audio()}
					</dt>
					<dd class="inline">{m.record_audio_desc()}</dd>
				</div>
				<div class="relative pl-9">
					<dt class="inline font-semibold">
						<LucideAudioWaveform class="absolute left-1 top-1 h-5 w-5 text-indigo-500" />
						{m.mix_audio()}
					</dt>
					<dd class="inline">
						{m.mix_audio_desc()}
					</dd>
				</div>
				<div class="relative pl-9">
					<dt class="inline font-semibold">
						<LucideWorkflow class="absolute left-1 top-1 h-5 w-5 text-indigo-500" />
						{m.producing()}
					</dt>
					<dd class="inline">{m.producing_desc()}</dd>
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
						{m.become_mixing_engineer()}
					</dt>
					<dd class="inline">
						{m.become_mixing_engineer_desc()}
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
						{m.join_community()}
					</dt>
					<dd class="inline">
						{m.join_comm_desc()}
					</dd>
				</div>
			</dl>
		</div>
	</div>

	<!-- Stats -->
	<div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
		<div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
			<h2 class="text-base font-semibold leading-8 text-secondary-600-300-token">
				{m.track_record()}
			</h2>
			<p class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{m.trusted()}</p>
			<p class="mt-6 text-lg leading-8 text-tertiary-600">
				{m.we_record_and_track()}
			</p>
		</div>
		<dl
			class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4"
		>
			<div class="flex flex-col gap-y-3 border-l border-white/10 pl-6">
				<dt class="text-sm leading-6">{m.working_time()}</dt>
				<dd class="order-first text-3xl font-semibold tracking-tight">6 years+</dd>
			</div>
			<div class="flex flex-col gap-y-3 border-l border-white/10 pl-6">
				<dt class="text-sm leading-6">{m.monthly_activity()}</dt>
				<dd class="order-first text-3xl font-semibold tracking-tight">100+</dd>
			</div>
			<div class="flex flex-col gap-y-3 border-l border-white/10 pl-6">
				<dt class="text-sm leading-6">{m.on_time_guarantee()}</dt>
				<dd class="order-first text-3xl font-semibold tracking-tight">99.9%</dd>
			</div>
			<div class="flex flex-col gap-y-3 border-l border-white/10 pl-6">
				<dt class="text-sm leading-6">{m.posts_created()}</dt>
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
			/>
		</div>
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
				{m.boost_your_work()}.<br />{m.start_using_our_app()}
			</h2>
			<p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-tertiary-600">
				{m.create_account_and_start()}
			</p>
			<div class="mt-10 flex items-center justify-center gap-x-6">
				<a href="/auth" class="btn variant-filled">{m.get_started()}</a>
				<a href="/profile" class="text-sm font-semibold leading-6"
					>x1 {m.your_profile()} <span aria-hidden="true">→</span></a
				>
			</div>
		</div>
	</div>
</main>
