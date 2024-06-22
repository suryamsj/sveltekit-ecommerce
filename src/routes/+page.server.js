import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	async function getProducts() {
		try {
			const res = await fetch('/api/products');
			const data = await res.json();
			return data;
		} catch (e) {
			// @ts-ignore
			throw error(500, `API Error : ${e.message}`);
		}
	}

	return { products: await getProducts() };
}
