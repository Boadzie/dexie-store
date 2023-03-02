import Dexie from 'dexie';

export const db = new Dexie('dexieStoreDB');
db.version(1).stores({
	products: '++id, name, price, img_url, rating',
	cart: '++id, name, price, img_url, rating, quantity' // Primary key and indexed props
});

db.on('populate', async () => {
	await db.products.bulkAdd([
		{ name: 'Buttons tweed blazer', price: 54.9, img_url: 'img/product-1.jpg', rating: 4.5 },
		{ name: 'Flowy striped skirt', price: 64.3, img_url: 'img/product-6.jpg', rating: 3.5 },
		{ name: 'Cotton-made T-Shirt', price: 64.9, img_url: 'img/product-2.jpg', rating: 3.5 },
		{
			name: 'Slim striped pocket shirt',
			price: 96.2,
			img_url: 'img/product-4.jpg',
			rating: 3.5
		},
		{
			name: 'Fit micro corduroy shirt',
			price: 64.9,
			img_url: 'img/product-7.jpg',
			rating: 3.5
		},
		{ name: 'Tropical Kimono', price: 54.9, img_url: 'img/product-5.jpg', rating: 3.5 },
		{ name: 'Contrasting sunglasses', price: 24.9, img_url: 'img/product-6.jpg', rating: 3.5 },
		{
			name: 'Water resistant backpack',
			price: 34.9,
			img_url: 'img/product-8.jpg',
			rating: 3.5,
			id: 8
		},
		{ name: 'Water backpack', price: 34.9, img_url: 'img/product-3.jpg', rating: 3.5 },
		{ name: 'Buttons tweedy blazer', price: 54.9, img_url: 'img/product-1.jpg', rating: 4.5 },
		{ name: 'Flow striped skirt', price: 64.3, img_url: 'img/product-6.jpg', rating: 3.5 },
		{ name: 'Cotton T-Shirt', price: 64.9, img_url: 'img/product-2.jpg', rating: 3.5 }
	]);
});
db.open()
	.then(() => {
		// Do any additional setup or initialization here
		console.log('DB initialized!');
	})
	.catch((error) => {
		console.error(`Failed to open database: ${error.stack}`);
	});
