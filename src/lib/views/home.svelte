<script lang="ts">
	import { goto } from '$app/navigation';
	import BtnProductos from '$lib/components/buttons/btn-productos.svelte';
	import FaChevronRight from 'svelte-icons/fa/FaChevronRight.svelte';
</script>

<div class="container-fluid h-full flex justify-center items-center">
	<div class="container px-8">
		<div
			class="flex flex-col justify-center py-10 px-8 items-center space-y-8 bg-black/50 rounded-lg"
		>
			<div class="flex flex-col justify-center items-center py-8 gap-4">
				<h3 class="saludo text-white">Bienvenidos a</h3>
				<h2 class="title-m md:title-text text-center text-yellow-400">
					La tienda de tecnología más grande de México
				</h2>
			</div>
			<div class="w-full">
				<img class="rounded-lg w-full" src="/img/tienda.jpeg" alt="" />
			</div>
			<div class="w-full flex justify-center py-4">
				<BtnProductos
					class="border-2 border-yellow-400 rounded-lg py-2 px-4 flex justify-center items-center text-yellow-400 gap-2 hover:bg-yellow-400 hover:text-white"
					onClick={() => {
						goto('productos');
					}}
				>
					Conoce Nuestros Productos
					<div class="w-4">
						<FaChevronRight />
					</div>
				</BtnProductos>
			</div>
		</div>
	</div>
</div>

<style>
	.saludo {
		font-family: sans-serif;
		font-size: 22px;
	}

	.title-text {
		font-family: sans-serif;
		font-size: 47px;
		font-weight: 600;
		line-height: 40px;
	}

	.title-m {
		font-family: sans-serif;
		font-size: 28px;
		font-weight: 600;
		line-height: 30px;
	}

	.text-btn {
		font-family: sans-serif;
		font-size: 16px;
		font-weight: 400;
	}
</style>
