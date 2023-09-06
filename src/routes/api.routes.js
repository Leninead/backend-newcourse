const { Router } = require("express");
const userController = require("../controllers/userController"); // Import the user controller
const productController = require("../controllers/productController"); // Import the product controller

const router = Router();

// GET all users
router.get("/api/users", userController.getAllUsers);

// POST a new user
router.post("/api/users", userController.createUser);

// PUT update user by ID
router.put("/api/users/:uid", userController.updateUserById);

// DELETE user by ID
router.delete("/api/users/:uid", userController.deleteUserById);




// Update the route name to match the controller function
router.get("/api/products/:pid", productController.getProduct);

// GET all products
router.get("/api/products", productController.getAllProducts);

// POST a new product
router.post("/api/products", productController.createProduct);

// PUT update product by ID
router.put("/api/products/:pid", productController.updateProductById);

// DELETE product by ID
router.delete("/api/products/:pid", productController.deleteProductById);

module.exports = router;
