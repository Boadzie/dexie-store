<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { liveQuery } from 'dexie';
	import { db } from '$lib/db';

	$: cartLen = writable([]);
	// $: cart = liveQuery(() => (browser ? db.cart.toArray() : []));
	onMount(() => {
		cartLen = liveQuery(() => db.cart.toArray());
	});
</script>

<section class="w-full px-0 mx-0">
	<nav class="flex lg:flex-row flex-col gap-y-4 items-center justify-between  w-full shadow-lg p-5">
		<ul>
			<li class="text-4xl font-bold hover:underline-offset-4 decoration-red-500 hover:text-red-500">
				<a href="/">Dexie-store</a>
			</li>
		</ul>
		<ul
			class="uppercase flex lg:flex-row flex-col text-lg font-sans gap-x-4 items-center justify-center"
		>
			<li class=" hover:underline-offset-4 decoration-red-500 hover:text-red-500 ">
				<a href="/">Home</a>
			</li>
			<li class=" hover:underline-offset-4 decoration-red-500 hover:text-red-500">
				<a href="/">Women's</a>
			</li>
			<li class=" hover:underline-offset-4 decoration-red-500 hover:text-red-500">
				<a href="/">Men's</a>
			</li>
			<li class=" hover:underline-offset-4 decoration-red-500 hover:text-red-500">
				<a href="/#shop">Shop</a>
			</li>
			<li class=" hover:underline-offset-4 decoration-red-500 hover:text-red-500">
				<a href="/">Contact</a>
			</li>
		</ul>
		<ul class="uppercase flex text-lg font-sans gap-x-4 items-center justify-end">
			<li class="">
				<a class="relative inline-block" href="/cart">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="hover:stroke-red-500 w-6 h-6 icon icon-tabler icon-tabler-shopping-cart"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="#2c3e50"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<circle cx="6" cy="19" r="2" />
						<circle cx="17" cy="19" r="2" />
						<path d="M17 17h-11v-14h-2" />
						<path d="M6 5l14 1l-1 7h-13" />
					</svg>
					<span
						class="absolute top-0 left-3 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-500 rounded-full"
						>{$cartLen.length}</span
					>
				</a>
			</li>
		</ul>
	</nav>
</section>
