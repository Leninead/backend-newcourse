const { Router } = require("express");
const { userModel } = require("../models/user.model");
const { productModel } = require("../models/product.model");

const router = Router();

// GET all users
router.get("/users", async (req, res) => {
    try {
        console.log("GET all users route called");
        const users = await userModel.find();
        res.status(200).json({ message: "Users retrieved successfully", users });
    } catch (error) {
        res.status(500).json({ error: "Error retrieving users", details: error });
    }
});

// POST a new user
router.post("/users", async (req, res) => {
    try {
        const { nombre, email } = req.body;
        const newUser = new userModel({ nombre, email });
        const user = await newUser.save();
        res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
        res.status(500).json({ error: "Error creating user", details: error });
    }
});

// PUT update user by ID
router.put("/users/:uid", async (req, res) => {
    const { uid } = req.params;
    const userToUpdate = req.body;
    try {
        const updatedUser = await userModel.findByIdAndUpdate(uid, userToUpdate, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({ message: "User updated successfully", user: updatedUser });
    } catch (error) {
        res.status(500).json({ error: "Error updating user", details: error });
    }
});

// DELETE user by ID
router.delete("/users/:uid", async (req, res) => {
    const { uid } = req.params;
    try {
        const deletedUser = await userModel.findByIdAndRemove(uid);
        if (!deletedUser) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully", user: deletedUser });
    } catch (error) {
        res.status(500).json({ error: "Error deleting user", details: error });
    }
});

// GET all products
router.get("/products", async (req, res) => {
    try {
        const products = await productModel.find();
        res.status(200).json({ message: "Products retrieved successfully", products });
    } catch (error) {
        res.status(500).json({ error: "Error retrieving products", details: error });
    }
});

// POST a new product
router.post("/products", async (req, res) => {
    try {
        const { name, category, price, stock, image } = req.body;
        const newProduct = new productModel({ name, category, price, stock, image });
        const product = await newProduct.save();
        res.status(201).json({ message: "Product created successfully", product });
    } catch (error) {
        res.status(500).json({ error: "Error creating product", details: error });
    }
});

// PUT update product by ID
router.put("/products/:pid", async (req, res) => {
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
});

// DELETE product by ID
router.delete("/products/:pid", async (req, res) => {
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
});

module.exports = router;
