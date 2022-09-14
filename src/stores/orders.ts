import axios from 'axios';

export const getOrders = async () => {
	try {
		const url = import.meta.env.VITE_API_URL;
		const origin = 'api/orders?';
		const key = import.meta.env.VITE_API_KEY;
		const token = import.meta.env.VITE_API_TOKEN;
		const urlComplete = url + origin + key + '=' + token;
		let result;
		await axios
			.get(urlComplete)
			.then((response) => {
				result = response.data.response;
			})
			.catch((error) => {
				console.log(error);
			});
		return result;
	} catch (error) {
		console.log(error);
	}
};

export const getDataOrder = async (id) => {
	const list = await getOrders();
	let data;
	list.forEach((order) => {
		if (order.id == id) {
			data = order;
		}
	});
	return data;
};

export const getDataProductsOrder = async (id) => {
	const list = await getOrders();
	let data;
	list.forEach((order) => {
		if (order.id == id) {
			data = order.products;
		}
	});
	return data;
};
