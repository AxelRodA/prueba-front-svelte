<script lang="ts">
	import { isOpenModalOrders } from '$stores/modal';
	import { getDataProductsOrder } from '$stores/orders';
	import IoIosClose from 'svelte-icons/io/IoIosClose.svelte';

	//variables reactivas
	$: showModalOrders = $isOpenModalOrders;

	// props
	export let id_order = '';
	export let id_user = '';
	export let phone = '';
	export let address = '';
	export let city = '';
	export let state = '';
	export let street_name = '';
	export let zip_code = '';
	export let order_code = '';
	export let subtotal = '';
	export let discount = '';
	export let total = '';
	export let paid = '';
	export let create_date = '';
	export let last_update = '';

	let products = [];

	// funciones
	const listProductsOrder = async (id) => {
		products = [];
		products = await getDataProductsOrder(id);
	};

	const close = () => {
		showModalOrders = !showModalOrders;
		isOpenModalOrders.set(showModalOrders);
	};

	$: id_order != '' ? listProductsOrder(id_order) : console.log('Espere un momento..');
</script>

<div class="relative p-4 w-full max-w-5xl h-full md:h-[90%] overflow-auto dataList">
	<!-- Modal content -->
	<div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
		<!-- Modal header -->
		<div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
			<h3 class="text-xl font-semibold text-gray-900 dark:text-white">
				Detalles de la Orden con Id: {id_order} y Codigo De Orden {order_code}
			</h3>
			<button
				type="button"
				class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
				on:click={() => {
					close();
				}}
			>
				<div class="w-8 text-black">
					<IoIosClose />
				</div>
			</button>
		</div>
		<!-- Modal body -->
		<div class="flex-col p-6 space-y-6 h-full overflow-y-auto">
			<div>
				<h3 class="text-xl pb-4">Datos del Usuario</h3>
				<ul>
					<li class="flex space-x-2">
						<span>Id del Usuario:</span>
						<p>{id_user}</p>
					</li>
					<li class="flex space-x-2">
						<span>Teléfono:</span>
						<p>{phone}</p>
					</li>
					<li class="flex space-x-2">
						<span>Dirección:</span>
						<p>{address}</p>
					</li>
					<li class="flex space-x-2">
						<span>Ciudad:</span>
						<p>{city}</p>
					</li>
					<li class="flex space-x-2">
						<span>Estado:</span>
						<p>{state}</p>
					</li>
					<li class="flex space-x-2">
						<span>Calle:</span>
						<p>{street_name}</p>
					</li>
					<li class="flex space-x-2">
						<span>Codigo Postal:</span>
						<p>{zip_code}</p>
					</li>
				</ul>
			</div>
			<div>
				<h3 class="text-xl pb-4">Datos de la orden</h3>
				<ul>
					<li class="flex space-x-2">
						<span>Codigo de Orden:</span>
						<p>{order_code}</p>
					</li>
					<li class="flex space-x-2">
						<span>Sub-Total:</span>
						<p>{subtotal}</p>
					</li>
					<li class="flex space-x-2">
						<span>Descuento:</span>
						<p>{discount}</p>
					</li>
					<li class="flex space-x-2">
						<span>Total:</span>
						<p>{total}</p>
					</li>
					<li class="flex space-x-2">
						<span>Estado de Pago:</span>
						<p>{paid}</p>
					</li>
					<li class="flex space-x-2">
						<span>Fecha de Creación:</span>
						<p>{create_date}</p>
					</li>
					<li class="flex space-x-2">
						<span>Fecha de Actualización:</span>
						<p>{last_update}</p>
					</li>
				</ul>
			</div>
			<div>
				<h3 class="text-xl pb-4">Producto(s)</h3>
				{#if products.length != 0}
					{#each products as pro}
						<ul class="pb-5">
							<li class="flex space-x-2">
								<span>Id del Producto:</span>
								<p>{pro.id}</p>
							</li>
							<li class="flex space-x-2">
								<span>Categoria:</span>
								<p>{pro.category}</p>
							</li>
							<li class="flex space-x-2">
								<span>Titulo del Producto:</span>
								<p>{pro.title}</p>
							</li>
							<li>
								<span>Descripcion Corta del Producto:</span>
								<p>{pro.short_description}</p>
							</li>
							<li class="flex space-x-2">
								<span>Description Completa del Producto:</span>
								<p>{pro.description}</p>
							</li>
							<li class="flex space-x-2">
								<span>Precio:</span>
								<p>{pro.price}</p>
							</li>
							<li class="flex space-x-2">
								<span>Descuento</span>
								<p>{pro.last_update}</p>
							</li>
							<li class="flex space-x-2">
								<span>Cantidad de Piezas</span>
								<p>{pro.qty}</p>
							</li>
							<li class="flex space-x-2">
								<span>Total</span>
								<p>{pro.total}</p>
							</li>
						</ul>
					{/each}
				{/if}
			</div>
		</div>
		<!-- Modal footer -->
		<div
			class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600"
		>
			<div
				class="text-yellow-400 border-2 border-yellow-400 hover:bg-yellow-400 hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer"
				on:click={() => {
					close();
				}}
			>
				Cerrar
			</div>
		</div>
	</div>
</div>

<style>
	.dataList {
		-ms-overflow-style: none; /* for Internet Explorer, Edge */
		scrollbar-width: none; /* for Firefox */
		overflow-y: scroll;
	}

	.dataList::-webkit-scrollbar {
		display: none; /* for Chrome, Safari, and Opera */
	}
</style>
