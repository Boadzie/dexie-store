<script>
	// import { onMount } from 'svelte';
	import { liveQuery } from 'dexie';
	import { db } from '$lib/db';
	import { browser } from '$app/environment';
	import { writable } from 'svelte/store';
	import { onMount } from 'svelte';

	$: cart = writable([]);
	// $: cart = liveQuery(() => (browser ? db.cart.toArray() : []));
	onMount(() => {
		cart = liveQuery(() => db.cart.toArray());
	});

	let qty = [];

	$: removeFromCart = (item) => {
		db.cart.delete(item.id);
		$cart = $cart.filter((i) => i.id !== item.id);
	};

	$: update_cart = async (item, quantity) => {
		await db.cart.update(item.id, { quantity });
		// $cart = $cart.update((item) => item.quantity);
	};

	$: total = () => {
		let total = 0;
		$cart.forEach((item) => {
			total += item.price * item.quantity;
		});
		return total;
	};
</script>

<section class="container mx-auto px-4  p-12">
	<h2 class="text-4xl text-left my-4 mx-4 font-bold font-sans uppercase">Cart</h2>
	<div class="flex lg:flex-row flex-col justify-start gap-4 w-full font-sans">
		{#if $cart}
			<div class="overflow-x-auto lg:w-5/6 w-full">
				<table class="table-auto  shadow-md bg-white py-5 lg:mx-4">
					<thead>
						<tr class="uppercase">
							<th class="lg:w-2/4  bg-slate-700 text-white border text-left px-8 py-4">Item</th>
							<th class=" w-[6rem] bg-slate-700 text-white border text-left px-8 py-4">Price</th>
							<th class="w-[6rem] bg-slate-700 text-white border text-left px-8 py-4">Quantity</th>
							<th class="w-[6rem] bg-slate-700 text-white border text-left px-8 py-4">Total</th>
							<th class="w-[6rem] bg-slate-700 text-white border text-left px-8 py-4"
								>Remove Item</th
							>
						</tr>
					</thead>
					{#each $cart as p (p.id)}
						<tbody>
							<tr>
								<td class="border px-6 py-2 flex gap-4 items-center font-bold">
									<img class="w-24 h-[7rem]" src={p.img_url} alt="" />
									<div>
										<h4 class>{p.name}</h4>
										<p class="text-slate-500">{p.rating}</p>
									</div>
								</td>
								<td class="border px-6 py-2">
									<p class="text-red-500 font-medium">
										{p.price.toLocaleString('en-US', {
											style: 'currency',
											currency: 'USD'
										})}
									</p>
								</td>
								<td class="border px-2 py-2">
									<form class="flex gap-x-2" action="">
										<input
											class="w-full focus:outline-none ring-1 px-2 py-1 rounded-sm"
											type="number"
											name=""
											bind:value={p.quantity}
											on:change={() => update_cart(p, p.quantity)}
										/>
									</form>
								</td>
								<td class="border px-6 py-2">
									<p class="font-extrabold text-red-500">
										{(p.price * p.quantity).toFixed(2)}
									</p>
								</td>
								<td class="border-b  place-content-center  px-8 py-2 ">
									<button
										on:click={removeFromCart(p)}
										class="hover:fill-red-500 place-content-center h-full bg-slate-100 rounded-full p-2"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class=" w-6 h-6 icon icon-tabler icon-tabler-x"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="#2c3e50"
											fill="none"
											stroke-linecap="round"
											stroke-linejoin="round"
										>
											<path stroke="none" d="M0 0h24v24H0z" fill="none" />
											<line x1="18" y1="6" x2="6" y2="18" />
											<line x1="6" y1="6" x2="18" y2="18" />
										</svg>
									</button>
								</td>
							</tr>
						</tbody>
					{:else}
						<p class="text-slate-500 text-2xl">No items in cart</p>
					{/each}
				</table>
			</div>
		{/if}
		<div class="rounded-sm shadow bg-slate-200 h-[30rem] p-5 lg:w-1/2">
			<h3 class="text-left uppercase text-3xl text-slate-500 font-bold my-4">Your Order</h3>
			{#if $cart}
				<p class="text-slate-500 text-2xl uppercase font-extrabold">
					Grand Total: <span class="text-red-500 ">
						{total().toLocaleString('en-US', {
							style: 'currency',
							currency: 'USD'
						})}
					</span>
				</p>
			{/if}
		</div>
	</div>
</section>
