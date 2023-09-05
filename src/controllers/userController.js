const { userModel } =require("../models/user.model")




exports.createUser = async (req, res) => {
    try {
        const { nombre, id, email } = req.body;
        const newUser = new userModel({ nombre, id, email });
        const user = await newUser.save();
        res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
        res.status(500).json({ error: "Error creating user", details: error });
    }
};



