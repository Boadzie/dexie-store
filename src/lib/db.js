import Dexie from 'dexie';

export const db = new Dexie('dexieStoreDB');
db.version(1).stores({
	products: '++id, name, price, img_url, rating' // Primary key and indexed props
});

// db.products.bulkAdd([
// 	{
// 		name: 'T-skirt',
// 		price: 54.9,
// 		img_url: 'https://preview.colorlib.com/theme/ashion/img/product/product-5.jpg',
// 		rating: 4.5
// 	},
// 	{
// 		name: 'T-shirt',
// 		price: 64.9,
// 		img_url: 'https://preview.colorlib.com/theme/ashion/img/product/product-6.jpg',
// 		rating: 3.5
// 	},
// 	{
// 		name: 'Polo Top',
// 		price: 64.9,
// 		img_url: 'https://preview.colorlib.com/theme/ashion/img/product/product-7.jpg',
// 		rating: 3.5
// 	}
// ]);
