<script lang="ts">
	import { getProducts, getDataProduct } from '$stores/products';
	import { isOpenModalStore } from '$stores/modal';
	import CardImg from '$lib/components/cards/card-img.svelte';
	import Modal from '$lib/components/modales/modal.svelte';
	import { onMount } from 'svelte';

	$: showModal = $isOpenModalStore;

	let list = [];
	let dataProduct: object = {};
	let count = [];

	const createList = async () => {
		list = await getProducts();
	};

	const productDetails = async (id) => {
		dataProduct = {};
		dataProduct = await getDataProduct(id);
	};

	const stock = (enabled) => {
		count = [];
		for (let i = 1; i <= enabled; i++) {
			if (i > 0) {
				count.push(i);
			}
		}
	};

	onMount(() => {
		createList();
	});
</script>

<div class="container-fluid flex justify-center items-center h-full overflow-auto py-10">
	<div
		class="container catalogo h-[90%] md:h-[100%] pb-8 lg:py-8 px-8 flex-col justify-center items-center overflow-auto space-y-4 bg-black/60 rounded-lg"
	>
		<div class="py-4">
			<h3 class="text-4xl text-center text-yellow-400">Productos</h3>
		</div>
		<div class="flex flex-wrap justify-center gap-4">
			{#each list as product}
				<CardImg
					urlImg={product.image_url}
					textTitle={product.title}
					textDescription={product.short_description}
					onClick={() => {
						productDetails(product.id);
						stock(product.enabled);
						showModal = !showModal;
					}}
				/>
			{/each}
		</div>
	</div>
</div>

{#if showModal && dataProduct != undefined}
	<div
		tabindex="-1"
		aria-hidden="true"
		class="container-fluid flex justify-center items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full bg-black/70"
	>
		<Modal
			titleModal={dataProduct.title}
			urlImg={dataProduct.image_url}
			description={dataProduct.description}
			price={dataProduct.price}
			discount={dataProduct.discount}
			{count}
		/>
	</div>
{/if}

<style>
	.catalogo {
		-ms-overflow-style: none; /* for Internet Explorer, Edge */
		scrollbar-width: none; /* for Firefox */
		overflow-y: scroll;
	}

	.catalogo::-webkit-scrollbar {
		display: none; /* for Chrome, Safari, and Opera */
	}
</style>
