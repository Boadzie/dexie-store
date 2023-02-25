<script>
    import { liveQuery } from "dexie";
    import { db } from "./db";
    import { browser } from '$app/environment';

    let products = liveQuery(
        () => browser
            ? db.products.toArray()
            : []
    );
  console.log(products)
</script>

<section class="container mx-auto px-4 py-14">
    <div class="mx-8">
        <h2 class="mx-4  text-4xl font-sans font-medium"><span class=" border-red-500 border-b-4 border-spacing-6">New</span>
            Products</h2>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-2">
        {#if $products }
           {#each $products as p (p.id) }
        <div class="mx-4 flex flex-col items-center ">
            <img class=" p-5 rounded-sm object-cover object-conter" src={p.img_url} alt=""/>
            <h2 class="text-2xl font-medium">{p.name}</h2>
            <p class="text-lg text-red-600">{p.price.toLocaleString('en-US', { 
		style: 'currency', 
		currency: 'USD' 
	})}</p>
        </div>
        {/each} 
        {/if}
    </div>
</section>