const {Router} = require("express")
const { userModel } = require("../models/user.model")
const { productModel } = require('../models/product.model')
const { userController } = require("../controllers/userController")
const { productController } =require("../controllers/productController")
const router = Router()

// GET all users

router.get("/users", async (req, res) => {
    try {
        let users = await userModel.find();
        res.send({ result: "success", payload: users });
    } catch (error) {
        console.log(error);
        res.status(500).send({ result: "error", message: "An error occurred" });
    }
});

// POST a new user
// POST a new user
router.post("/users", async (req, res) => {
    try {
        const { nombre, email } = req.body;

        if (!nombre || !email) {
            return res.status(400).json({ result: "error", error: "Missing parameters" });
        }

        const newUser = await userModel.create({ nombre, email });
        res.status(201).json({ result: "success", payload: newUser });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ result: "error", error: "An error occurred" });
    }
});


// PUT update user by ID

router.put("/users/:uid", async(req, res)=>{
    let { uid } = req.params

    let userToReplace = req.body
    if (!userToReplace.nombre || !userToReplace.email) {
        res.send({ status: "error", error: "Missing body params"})
    }
    let result = await userModel.updateOne({ _id: uid} ,userToReplace);
    res.send({ result: "success", payload: result})
})

// DELETE user by ID

router.delete("/users/:uid", async (req, res) => {
    let { uid } = req.params;
    let result = await userModel.deleteOne({ _id: uid });
    res.send({ result: "success", payload: result });
});


// GET all products
router.get("/products", async (req, res) => {
    try {
        let products = await productModel.find()
        res.send({ result: "success", payload: products})
        
    } catch (error) {
        console.log(error);
        res.status(500).send({ result: "error", message: "An error ocurred"})
    }
})

// POST a new product

router.post("/products", async (req, res) => {
    let { name, category, price, stock, image } = req.body;

    if (!name || !category || !price || !stock) {
        res.send({ result: "error", error: "Missing parameters" });
    }
    let result = await productModel.create({ name, category, price, stock, image });
    res.send({ result: "success", payload: result });
});

// PUT update product by ID
router.put("/products/:pid", async (req, res) => { // Update route path
    let { pid } = req.params;

    let productToUpdate = req.body;
    if (!productToUpdate.name || !productToUpdate.category || !productToUpdate.price || !productToUpdate.stock) {
        res.send({ status: "error", error: "Missing body params" });
    }
    let result = await productModel.updateOne({ _id: pid }, productToUpdate);
    res.send({ result: "success", payload: result });
});

// DELETE product by ID
router.delete("/products/:pid", async (req, res) => { // Update route path
    let { pid } = req.params;
    let result = await productModel.deleteOne({ _id: pid });
    res.send({ result: "success", payload: result });
});



module.exports = router