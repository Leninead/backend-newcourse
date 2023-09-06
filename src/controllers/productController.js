const { productModel } = require('../models/product.model');

// Create a new product
exports.createProduct = async (req, res) => {
    try {
        const { name, category, price, stock, image } = req.body;
        const newProduct = new productModel({ name, category, price, stock, image });
        const product = await newProduct.save();
        res.status(201).json({ message: "Product created successfully", product });
    } catch (error) {
        res.status(500).json({ error: "Error creating product", details: error });
    }
};

// Get all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await productModel.find();
        res.status(200).json({ message: "Products retrieved successfully", products });
    } catch (error) {
        res.status(500).json({ error: "Error retrieving products", details: error });
    }
};


exports.getProduct = async (req, res) => {
    const { pid } = req.params;
    try {
        const product = await productModel.findById(pid);
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.status(200).json({ message: "Product retrieved successfully", product });
    } catch (error) {
        res.status(500).json({ error: "Error retrieving product", details: error });
    }
};

// Update a product by ID
exports.updateProductById = async (req, res) => {
    const { pid } = req.params;
    const productToUpdate = req.body;
    try {
        const updatedProduct = await productModel.findByIdAndUpdate(pid, productToUpdate, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
    } catch (error) {
        res.status(500).json({ error: "Error updating product", details: error });
    }
};

// Delete a product by ID
exports.deleteProductById = async (req, res) => {
    const { pid } = req.params;
    try {
        const deletedProduct = await productModel.findByIdAndRemove(pid);
        if (!deletedProduct) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.status(200).json({ message: "Product deleted successfully", product: deletedProduct });
    } catch (error) {
        res.status(500).json({ error: "Error deleting product", details: error });
    }
};
