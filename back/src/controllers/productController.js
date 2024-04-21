const Product = require('../models/Products');

exports.createProduct = async (req, res) => {
    try {
        const { name, image, note } = req.body;
        const newProduct = new Product({ name, image, note });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: 'Failed to add the product', error: error.message });
    }
};

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve products', error: error.message });
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const result = await Product.findByIdAndDelete(req.params.id);
        if (!result) return res.status(404).json({ message: 'Product not found' });
        res.json({ message: 'Product deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting product', error: error.message });
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const { name, image, note } = req.body;
        const result = await Product.findByIdAndUpdate(req.params.id, { name, image, note }, { new: true });
        if (!result) return res.status(404).json({ message: 'Product not found' });
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: 'Error updating product', error: error.message });
    }
};