<script>
	import '../app.css';
	import Navbar from '$lib/components/navbar.svelte';
</script>

<div class="relative container-fluid h-screen bg-home">
	<div class="h-[10%] sticky">
		<Navbar />
	</div>
	<div class=" main h-[90%] overscroll-none">
		<slot />
	</div>
</div>

<style>
	.bg-home {
		background-image: url('/img/bg-home.webp');
		background-repeat: no-repeat;
		background-size: cover;
		background-position-x: center;
		background-position-y: center;
	}
</style>
