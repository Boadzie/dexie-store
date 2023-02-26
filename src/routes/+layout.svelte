<script>
	import '../app.postcss';
	import Navbar from "$lib/Navbar.svelte";
	import Footer from "$lib/Footer.svelte";
</script>

<div class="flex flex-col justify-between">
	<Navbar />
	<main>
		<slot />
	</main>
	<Footer/>
</div>


<style>
	:global(html, body) {
		font-family: 'Cookie', cursive;
	}
</style>