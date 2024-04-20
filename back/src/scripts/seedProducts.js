require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('../models/Products');

mongoose.connect(process.env.MONGO_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
	.then(() => console.log("MongoDB connected successfully"))
	.catch(err => console.error("MongoDB connection error:", err));

const products = [
	{
		name: "Cacao Porcelana",
		image: "assets/images/produits/produit1.jpg",
		note: "Gourmand, Boisé",
	},
	{
		name: "Santal Blond",
		image: "assets/images/produits/produit2.jpg",
		note: "Boisé, Ambré",
	},
	{
		name: "Cuir Nilam",
		image: "assets/images/produits/produit3.jpg",
		note: "Boisé, Cuiré",
	},
	{
		name: "Poivre Pomelo",
		image: "assets/images/produits/produit4.jpg",
		note: "Épicé, Hespéridé",
	},
	{
		name: "Rose Ardoise",
		image: "assets/images/produits/produit5.jpg",
		note: "Floral, Boisé, Ambré",
	},
	{
		name: "Iris Ebène",
		image: "assets/images/produits/produit6.jpg",
		note: "Floral, Cuir",
	},
	{
		name: "Bois d'Ambrette",
		image: "assets/images/produits/produit7.jpg",
		note: "Musqué, Boisé",
	},
	{
		name: "Cèdre Figalia",
		image: "assets/images/produits/produit8.jpg",
		note: "Végétal, Boisé",
	},
	{
		name: "Narcisse Taiji",
		image: "assets/images/produits/produit9.jpg",
		note: "Floral, Boisé, Épicé",
	},
];


const insertProducts = async () => {
	try {
		await Product.deleteMany();
		await Product.insertMany(products);
		console.log('Data Imported Successfully');
		process.exit();
	} catch (error) {
		console.error('Error with data import', error);
		process.exit(1);
	}
};

insertProducts();
