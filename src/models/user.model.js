const mongoose = require("mongoose")

const userCollection = "users"

 const userSchema = new mongoose.Schema({
   nombre: { type: String, required: true, max: 100 },
   email: { type: String, required: true, max: 50 }
 })

 const userModel = mongoose.model(userCollection, userSchema)

 module.exports= { userModel }