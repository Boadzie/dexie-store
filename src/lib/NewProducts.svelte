<script>
	import { liveQuery } from 'dexie';
	import { db } from './db';
	import { browser } from '$app/environment';

	let products = liveQuery(() => (browser ? db.products.toArray() : []));

	let cart = [];
	let quantity = 1;

	const addToCart = async (product) => {
		cart = [...cart, { ...product, quantity: 1 }];
		if (browser) {
			await db.cart.bulkAdd(cart);
			console.log('Items added!');
		}
		return {};
	};
</script>

<section class="container mx-auto px-4 py-14">
	<div class="mx-8">
		<h2 class="mx-4  text-4xl font-sans font-medium">
			<span class=" border-red-500 border-b-4 border-spacing-6">New</span>
			Products
		</h2>
	</div>
	<div class="grid grid-cols-1 lg:grid-cols-4 gap-2">
		{#if $products}
			{#each $products as p (p.id)}
				<div class="mx-4  flex flex-col items-center ">
					<div class="relative odd:content-['sale']">
						<img class=" p-5 rounded-sm object-cover object-conter" src={p.img_url} alt="" />
						<button
							on:click={addToCart(p)}
							class="absolute text-sm font-extrabold font-sans text-white top-[4rem] px-2 rounded-bl-md left-[4rem] bg-slate-600 hover:bg-slate-500 hover:duration-500 -translate-x-1/2 -translate-y-1/2"
						>
							ADD TO CART</button
						>
					</div>
					<h2 class="text-2xl font-bold">{p.name}</h2>
					<div class="flex gap-4 items-center justify-between">
						<p class="text-lg font-extrabold text-slate-600">
							{p.price.toLocaleString('en-US', {
								style: 'currency',
								currency: 'USD'
							})}
						</p>
					</div>
				</div>
			{/each}
		{/if}
	</div>
</section>
