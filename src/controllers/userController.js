// const { userModel } = require("../models/user.model");

// // Get all users
// exports.getAllUsers = async (req, res) => {
//     try {
//         console.log("getAllUsers function called");
//         const users = await userModel.find();
//         res.status(200).json({ message: "Users retrieved successfully", users });
//     } catch (error) {
//         res.status(500).json({ error: "Error retrieving users", details: error });
//     }
// };

// // Create a new user
// exports.createUser = async (req, res) => {
//     try {
//         const { nombre, email } = req.body;
//         const newUser = new userModel({ nombre, email });
//         const user = await newUser.save();
//         res.status(201).json({ message: "User created successfully", user });
//     } catch (error) {
//         res.status(500).json({ error: "Error creating user", details: error });
//     }
// };

// // Update a user by ID
// exports.updateUserById = async (req, res) => {
//     const { uid } = req.params;
//     const userToUpdate = req.body;
//     try {
//         const updatedUser = await userModel.findByIdAndUpdate(uid, userToUpdate, { new: true });
//         if (!updatedUser) {
//             return res.status(404).json({ error: "User not found" });
//         }
//         res.status(200).json({ message: "User updated successfully", user: updatedUser });
//     } catch (error) {
//         res.status(500).json({ error: "Error updating user", details: error });
//     }
// };

// // Delete a user by ID
// exports.deleteUserById = async (req, res) => {
//     const { uid } = req.params;
//     try {
//         const deletedUser = await userModel.findByIdAndRemove(uid);
//         if (!deletedUser) {
//             return res.status(404).json({ error: "User not found" });
//         }
//         res.status(200).json({ message: "User deleted successfully", user: deletedUser });
//     } catch (error) {
//         res.status(500).json({ error: "Error deleting user", details: error });
//     }
// };
