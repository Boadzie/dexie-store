import Dexie from 'dexie';

export const db = new Dexie('dexieStoreDB');
db.version(2).stores({
	products: '++id, name, price, img_url, rating',
	cart: '++id, name, price, img_url, rating, quantity' // Primary key and indexed props
});

// db.products.bulkAdd([
// 	{
// 		name: 'Buttons tweed blazer',
// 		price: 54.9,
// 		img_url: 'img/product-1.jpg',
// 		rating: 4.5
// 	},
// 	{
// 		name: 'Flowy striped skirt',
// 		price: 64.3,
// 		img_url: 'img/product-6.jpg',
// 		rating: 3.5
// 	},
// 	{
// 		name: 'Cotton T-Shirt',
// 		price: 64.9,
// 		img_url: 'img/product-2.jpg',
// 		rating: 3.5
// 	}
// ]);
