<script>
	import { liveQuery } from 'dexie';
	import { db } from '$lib/db';
	import { browser } from '$app/environment';

	let cart = liveQuery(() => (browser ? db.cart.toArray() : []));

	// let total = (price, quantity) => {
	// 	return price * quantity;
	// };
</script>

<section class="container mx-auto px-4 py-4 my-auto">
	<h2 class="text-4xl my-4 text-center font-bold font-sans uppercase">Cart</h2>
	<div class="flex flex-col gap-4 w-full font-sans">
		{#if $cart}
			<table class="table-auto shadow-md bg-white py-5">
				<thead>
					<tr class="uppercase  ">
						<th class="w-1/4 bg-slate-700 text-white border text-left px-8 py-4">Item</th>
						<th class="w-1/4 bg-slate-700 text-white border text-left px-8 py-4">Price</th>
						<th class="w-1/4 bg-slate-700 text-white border text-left px-8 py-4">Quantity</th>
						<th class="w-1/4 bg-slate-700 text-white border text-left px-8 py-4">Total</th>
						<th class="w-1/4 bg-slate-700 text-white border text-left px-8 py-4">Remove Item</th>
					</tr>
				</thead>
				{#each $cart as p}
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
							<td class="border px-6 py-2">
								<input
									class="w-full focus:outline-none ring-1 px-2 py-1 rounded-sm"
									type="number"
									name=""
									value={p.quantity}
								/>
							</td>
							<td class="border px-6 py-2">
								<p class="font-extrabold text-red-500">
									{p.price}
								</p>
							</td>
							<td class="border px-6 py-2">
								<button class="hover:fill-red-500 bg-slate-100 rounded-full p-2">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="w-6 h-6 icon icon-tabler icon-tabler-x"
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
		{/if}
	</div>
</section>
