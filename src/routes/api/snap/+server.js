import { CLIENT_KEY, SERVER_KEY } from '$env/static/private';
import { json } from '@sveltejs/kit';
import Midtrans from 'midtrans-client';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const { totalPrice, cartItems } = await request.json();

	let snap = new Midtrans.Snap({
		isProduction: false,
		serverKey: SERVER_KEY,
		clientKey: CLIENT_KEY
	});

	const itemDetails = cartItems.map((/** @type {{ id: any; title: any; price: any; quantity: any; }} */ item) => ({
	  id: item.id,
	  name: item.title,
	  price: item.price,
	  quantity: item.quantity,
	}));

	const parameter = {
		transaction_details: {
			order_id: crypto.randomUUID(),
			gross_amount: totalPrice
		},
		item_details:itemDetails,
		customer_details: {
			first_name: 'Customer',
			last_name: 'Testing',
			email: 'msurya672@gmail.com',
			phone: '085155001401'
		}
	};

	try {
		const transaction = await snap.createTransaction(parameter);
		return json({ url: transaction.redirect_url });
	} catch (error) {
		console.error('Error creating transaction:', error);
		return new Response('Internal Server Error', { status: 500 });
	}
}
