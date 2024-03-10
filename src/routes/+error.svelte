<script>
	import { LucideArrowRight, LucideBookOpenText, LucideCircleDot } from 'lucide-svelte';
</script>

<main class="mx-auto w-full max-w-7xl px-6 pb-16 pt-10 sm:pb-24 lg:px-8">
	<div class="mx-auto mt-20 max-w-2xl text-center sm:mt-24">
		<p class="text-base font-semibold leading-8 text-primary-600">404</p>
		<h1 class="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">This page does not exist</h1>
		<p class="mt-4 text-base leading-7 sm:mt-6 sm:text-lg sm:leading-8">
			Sorry, we couldn’t find the page you’re looking for.
		</p>
	</div>
	<div class="mx-auto mt-16 flow-root max-w-lg sm:mt-20">
		<h2 class="sr-only">Popular pages</h2>
		<ul role="list" class="-mt-6 divide-y divide-gray-900/5 border-b border-gray-900/5">
			<li class="relative flex gap-x-6 py-6">
				<div
					class="flex h-10 w-10 flex-none items-center justify-center rounded-lg shadow-sm ring-1 ring-gray-900/10"
				>
					<LucideCircleDot class="h-6 w-6 text-primary-600" />
				</div>
				<div class="flex-auto">
					<h3 class="text-sm font-semibold leading-6">
						<a target="_blank" href="https://github.com/feavel1/feavel/issues/new/choose">
							<span class="absolute inset-0" aria-hidden="true"></span>
							Submit an issue
						</a>
					</h3>
					<p class="mt-2 text-sm leading-6">Learn how to submit an issue report to us.</p>
				</div>
				<div class="flex-none self-center">
					<LucideArrowRight class="h-5 w-5 text-gray-400" />
				</div>
			</li>
			<li class="relative flex gap-x-6 py-6">
				<div
					class="flex h-10 w-10 flex-none items-center justify-center rounded-lg shadow-sm ring-1 ring-gray-900/10"
				>
					<svg
						class="h-6 w-6 text-primary-600"
						viewBox="0 0 24 24"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							d="M5.625 3.75a2.625 2.625 0 100 5.25h12.75a2.625 2.625 0 000-5.25H5.625zM3.75 11.25a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zM3 15.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zM3.75 18.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z"
						/>
					</svg>
				</div>
				<div class="flex-auto">
					<h3 class="text-sm font-semibold leading-6">
						<a href="/services">
							<span class="absolute inset-0" aria-hidden="true"></span>
							Services
						</a>
					</h3>
					<p class="mt-2 text-sm leading-6">A list of services we provide.</p>
				</div>
				<div class="flex-none self-center">
					<LucideArrowRight class="h-5 w-5 text-gray-400" />
				</div>
			</li>
			<li class="relative flex gap-x-6 py-6">
				<div
					class="flex h-10 w-10 flex-none items-center justify-center rounded-lg shadow-sm ring-1 ring-gray-900/10"
				>
					<svg
						class="h-6 w-6 text-primary-600"
						viewBox="0 0 24 24"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M6 3a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3H6zm1.5 1.5a.75.75 0 00-.75.75V16.5a.75.75 0 001.085.67L12 15.089l4.165 2.083a.75.75 0 001.085-.671V5.25a.75.75 0 00-.75-.75h-9z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
				<div class="flex-auto">
					<h3 class="text-sm font-semibold leading-6">
						<a href="/about">
							<span class="absolute inset-0" aria-hidden="true"></span>
							About
						</a>
					</h3>
					<p class="mt-2 text-sm leading-6">Read about us.</p>
				</div>
				<div class="flex-none self-center">
					<LucideArrowRight class="h-5 w-5 text-gray-400" />
				</div>
			</li>
			<li class="relative flex gap-x-6 py-6">
				<div
					class="flex h-10 w-10 flex-none items-center justify-center rounded-lg shadow-sm ring-1 ring-gray-900/10"
				>
					<LucideBookOpenText class="h-6 w-6 text-primary-600" />
				</div>
				<div class="flex-auto">
					<h3 class="text-sm font-semibold leading-6">
						<a href="/posts">
							<span class="absolute inset-0" aria-hidden="true"></span>
							Blog
						</a>
					</h3>
					<p class="mt-2 text-sm leading-6">Read our latest news and articles.</p>
				</div>
				<div class="flex-none self-center">
					<LucideArrowRight class="h-5 w-5 text-gray-400" />
				</div>
			</li>
		</ul>
		<div class="mt-10 flex justify-center">
			<a href="/" class="text-sm font-semibold leading-6 text-primary-600">
				<span aria-hidden="true">&larr;</span>
				Back to home
			</a>
		</div>
	</div>
</main>
