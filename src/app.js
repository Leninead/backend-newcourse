// creacion de server con express. Que escuche en el puerto 8080.

// *separar las rutas en una carpeta router.

// GET - POST - PUT - DELETE

// *Conexion a DB con MongoDB Atlas

// *Utilizacion de Mongoose para el modelado de los datos.

// *Db -> e-commerce.

// 2 Colecciones: Users - Products (cada uno con su schema).

// *REPOSITORIO con Readme con capturas de Postman o

// Capturas de Postman en el campo de la entrega.

// *USERS: Nombre - Email - Id(no repetible)

// PRODUCTS: Nombre - Categoria - Precio(N°) - Stock(N°) - Imagen

const express = require('express')
const mongoose = require('mongoose')
const apiRouter = require('./routes/api.routes')



const app = express()
const port = 8080




// Middleware to parse JSON requests
app.use(express.json())

mongoose.connect('mongodb+srv://leninacosta1987:integratingproject@cluster0.a73oj0s.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Connected to MongoDB Atlas");
})
.catch((error) => {
    console.error("Error connecting to MongoDB Atlas:", error);
});


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});


app.use('/api', apiRouter); 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



