const mongoose = require("mongoose")

const userCollection = "usuarios"

 const userSchema = new mongoose.Schema({
   nombre: { type: String, required: true, max: 100 },
   id: { type: String, required: true, unique: true }, // Add unique constraint
   email: { type: String, required: true, max: 50 }
 })

 const userModel = mongoose.model(userCollection, userSchema)

 module.exports= { userModel }