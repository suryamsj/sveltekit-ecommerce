import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// @ts-ignore
const initialCart = browser ? JSON.parse(localStorage.getItem('products')) || [] : [];
const initialQuantity = initialCart.reduce(
	(/** @type {any} */ total, /** @type {{ quantity: any; }} */ product) => total + product.quantity,
	0
);
const initialPrice = initialCart.reduce(
	(/** @type {number} */ total, /** @type {{ price: number; quantity: number; }} */ product) =>
		total + product.price * product.quantity,
	0
);

export const cartItem = writable(initialCart);
export const totalQuantity = writable(initialQuantity);
export const totalPrice = writable(initialPrice);
export const toastMessage = writable('');

cartItem.subscribe((items) => {
	if (browser) {
		localStorage.setItem('products', JSON.stringify(items));
		totalQuantity.set(
			items.reduce(
				(/** @type {any} */ total, /** @type {{ quantity: any; }} */ product) =>
					total + product.quantity,
				0
			)
		);
		totalPrice.set(
			items.reduce(
				(
					/** @type {number} */ total,
					/** @type {{ price: number; quantity: number; }} */ product
				) => total + product.price * product.quantity,
				0
			)
		);
	}
});
