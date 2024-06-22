import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	const products = [
		{
			id: '1a2b3c',
			title: 'Nasi Liwet',
			price: 25000,
			image: 'https://www.masakapahariini.com/wp-content/uploads/2021/07/Nasi-Liwet-Sunda.jpg'
		},
		{
			id: '4d5e6f',
			title: 'Karedok',
			price: 15000,
			image: 'https://img-global.cpcdn.com/recipes/a8a66c00512ab10c/400x400cq70/photo.jpg'
		},
		{
			id: '7g8h9i',
			title: 'Sate Maranggi',
			price: 30000,
			image:
				'https://www.masakapahariini.com/wp-content/uploads/2018/05/sate_maranggi_MAHI_thumbnail-500x300.jpg'
		},
		{
			id: '0j1k2l',
			title: 'Batagor',
			price: 20000,
			image:
				'https://www.masakapahariini.com/wp-content/uploads/2020/11/batagor-bandung-disajikan-e1663738102384.jpg'
		},
		{
			id: '6p7q8r',
			title: 'Gudeg',
			price: 25000,
			image: 'https://www.masakapahariini.com/wp-content/uploads/2021/08/Gudeg-Yogyakarta.jpg'
		},
		{
			id: '9s0t1u',
			title: 'Rawon',
			price: 27000,
			image:
				'https://storage.googleapis.com/narasi-production.appspot.com/production/medium/1690883765380/rawon-jadi-sup-paling-enak-di-dunia-berikut-fakta-dan-cara-membuat-rawon-di-rumah-medium.jpeg'
		},
		{
			id: '2v3w4x',
			title: 'Pecel',
			price: 18000,
			image:
				'https://img-global.cpcdn.com/recipes/d0050e11756cf8e0/680x482cq70/nasi-pecel-kawi-khas-malang-foto-resep-utama.jpg'
		},
		{
			id: '5y6z7a',
			title: 'Rendang',
			price: 35000,
			image:
				'https://cdn.idntimes.com/content-images/community/2022/04/resep-rendang-filosofi-rendang-makna-rendang-arti-rendang-rendang-dari-mana-makanan-indonesia-filosofi-9cde86371d7fc78c91ae80a6ffab250e-e0b9344da253b8e653bd42c7df03d6d9.jpg'
		},
		{
			id: '8b9c0d',
			title: 'Sate Padang',
			price: 28000,
			image: 'https://img-global.cpcdn.com/recipes/12f20931f8a4077e/1200x630cq70/photo.jpg'
		}
	];

	return json(products, {
		status: 200
	});
}
