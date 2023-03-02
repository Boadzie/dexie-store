<script>
	import NewProducts from '$lib/NewProducts.svelte';
</script>

<section class="container mx-auto px-1 py-2">
	<div class="grid grid-cols-1 lg:grid-rows-2 lg:grid-cols-4 gap-1">
		<div class="lg:col-span-2 lg:row-span-2 relative ">
			<img
				class="rounded-sm object-cover object-center h-[40.5rem] w-full"
				src="img/category-1.webp"
				alt="pic"
			/>
			<div class="absolute left-[4rem] top-[14rem]">
				<h2 class="text-6xl text-slate-800 ">Women's Fashion</h2>
				<p class="my-4 max-w-md font-sans text-md text-slate-500">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque odit autem iusto
					velit. Cumque quisquam maiores dolor voluptatibus recusandae est id, totam nam sunt,
					dolorem necessitatibus omnis! Alias, facere dolore.
				</p>
				<button
					class="font-medium text-lg font-sans rounded-sm bg-red-500 hover:bg-red-400 text-white px-4 py-1 uppercase"
					>Shop now
				</button>
			</div>
		</div>
		<div
			class="flex gap-4 flex-col items-start justify-center col-span-1 object-cover object-right h-[20rem] w-full bg-[url('/img/category-2.png')]"
		>
			<div class="font-sans font-bold  mx-6">
				<h1 class=" font-extrabold text-2xl text-slate-600">Men's Fashion</h1>
				<p class="text-sm py-2 text-slate-500">435 items</p>
				<button
					class="font-medium text-lg font-sans rounded-sm bg-red-500 hover:bg-red-400 text-white px-4 py-1 uppercase"
					>Shop now
				</button>
			</div>
		</div>
		<div
			class="flex gap-4 flex-col items-start justify-center col-span-1 object-cover object-right h-[20rem] w-full bg-[url('/img/category-3.png')]"
		>
			<div class="font-sans font-bold  mx-6">
				<h1 class="font-extrabold text-slate-600 text-2xl ">Kid's Fashion</h1>
				<p class="text-sm py-2 text-slate-500">43 items</p>
				<button
					class="font-medium text-lg font-sans rounded-sm bg-red-500 hover:bg-red-400 text-white px-4 py-1 uppercase"
					>Shop now
				</button>
			</div>
		</div>
		<div
			class="flex gap-4 flex-col items-start justify-center col-span-1 object-cover object-right h-[20rem] w-full bg-[url('/img/category-4.png')]"
		>
			<div class="font-sans font-bold  mx-6">
				<h1 class="font-extrabold text-slate-600 text-2xl ">Cosmetics</h1>
				<p class="text-sm py-2 text-slate-500">200 items</p>
				<button
					class="font-medium text-lg font-sans rounded-sm bg-red-500 hover:bg-red-400 text-white px-4 py-1 uppercase"
					>Shop now
				</button>
			</div>
		</div>
		<div
			class="flex gap-4 flex-col items-start justify-center col-span-1 object-cover object-right h-[20rem] w-full bg-[url('/img/category-5.png')]"
		>
			<div class="font-sans font-bold  mx-6">
				<h1 class="font-extrabold text-slate-600 text-2xl ">Cosmetics</h1>
				<p class="text-sm py-2 text-slate-500">200 items</p>
				<button
					class="font-medium text-lg font-sans rounded-sm bg-red-500 hover:bg-red-400 text-white px-4 py-1 uppercase"
					>Shop now
				</button>
			</div>
		</div>
	</div>
</section>
<section id="shop">
	<NewProducts />
</section>
