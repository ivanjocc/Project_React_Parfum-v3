const Product = require('../models/Products');

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.error('Failed to retrieve products:', error);
        res.status(500).json({ error: 'Failed to retrieve products' });
    }
};
