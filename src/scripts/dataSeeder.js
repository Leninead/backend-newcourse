// Import your user and product models and any other necessary dependencies here
const { userModel } = require("../models/user.model");
const { productModel } = require("../models/product.model");

// Create an array of user data
const users = [
  {
    nombre: "John Doe",
    email: "johndoe@example.com",
  },
  {
    nombre: "Alice Johnson",
    email: "alice@example.com",
  },
  {
    nombre: "Bob Smith",
    email: "bob@example.com",
  },
  {
    nombre: "Eve Johnson",
    email: "eve@example.com",
  },
  {
    nombre: "Charlie Brown",
    email: "charlie@example.com",
  },
];

// Create an array of product data
const products = [
  {
    name: "Product 1",
    category: "Category A",
    price: 19.99,
    stock: 50,
    image: "product1.jpg",
  },
  {
    name: "Product 2",
    category: "Category B",
    price: 29.99,
    stock: 30,
    image: "product2.jpg",
  },
  {
    name: "Product 3",
    category: "Category A",
    price: 39.99,
    stock: 20,
    image: "product3.jpg",
  },
  {
    name: "Product 4",
    category: "Category C",
    price: 49.99,
    stock: 25,
    image: "product4.jpg",
  },
  {
    name: "Product 5",
    category: "Category B",
    price: 59.99,
    stock: 40,
    image: "product5.jpg",
  },
];

// Function to seed the database with users and products
async function seedDatabase() {
  try {
    // Seed users
    const options = { timeout: 30000 }; // Set a longer timeout (30 seconds)
    const seededUsers = await userModel.insertMany(users, options);
    console.log("Seeded users:", seededUsers);

    // Seed products
    const seededProducts = await productModel.insertMany(products);
    console.log("Seeded products:", seededProducts);

  

    console.log("Database seeding complete.");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

// Call the seeding function to populate the database
seedDatabase();
