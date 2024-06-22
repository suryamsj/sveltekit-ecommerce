import { cartItem, toastMessage } from './store';
import { get } from 'svelte/store';
import { browser } from '$app/environment';

/**
 * @param {{ id: any; }} product
 */
export function addToLocalStorage(product) {
	if (browser) {
		let items = get(cartItem);
		let existingProduct = items.find((/** @type {{ id: any; }} */ p) => p.id === product.id);
		if (existingProduct) {
			existingProduct.quantity += 1;
		} else {
			items.push({ ...product, quantity: 1 });
		}
		cartItem.set(items);

		toastMessage.set('Item added to cart successfully.');
		setTimeout(() => toastMessage.set(''), 3000);
	}
}

/**
 * @param {{ id: any; }} product
 */
export function removeItemFromCart(product) {
	if (browser) {
		let items = get(cartItem).filter((/** @type {{ id: any; }} */ p) => p.id !== product.id);
		cartItem.set(items);
	}
	toastMessage.set('Item removed from cart successfully.');
	setTimeout(() => toastMessage.set(''), 3000);
}

/**
 * @param {any} totalPrice
 * @param {any} cartItems
 */
export async function createSnapMidtrans(totalPrice, cartItems) {
	try {
		const response = await fetch('/api/snap', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ totalPrice, cartItems })
		});

		if (!response.ok) {
			throw new Error('Network response was not ok');
		}

		const data = await response.json();
		if (data.url) {
			window.open(data.url, '_blank');
		} else {
			console.error('URL not found in the response');
		}
	} catch (error) {
		console.error('Error creating transaction:', error);
	}
}

/**
 * @param {{ toLocaleString: (arg0: string, arg1: { style: string; currency: string; minimumFractionDigits: number; }) => any; }} amount
 */
export function formatRupiah(amount) {
	return amount.toLocaleString('id-ID', {
		style: 'currency',
		currency: 'IDR',
		minimumFractionDigits: 0
	});
}
