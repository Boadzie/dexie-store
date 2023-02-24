<script>
	import '../app.postcss';
	import Navbar from "$lib/Navbar.svelte";
</script>

<div class="flex flex-col justify-between">
	<Navbar />
	<main>
		<slot />
	</main>
</div>


<style>
	:global(html, body) {
		font-family: 'Cookie', cursive;
	}
</style>