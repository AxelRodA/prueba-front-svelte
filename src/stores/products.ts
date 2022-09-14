import axios from 'axios';

export const getProducts = async () => {
	try {
		const url = import.meta.env.VITE_API_URL;
		const origin = 'api/products?';
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

export const getDataProduct = async (id) => {
	const list = await getProducts();
	let data;
	list.forEach((product) => {
		if (product.id == id) {
			data = product;
		}
	});
	return data;
};
