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





app.use(express.json())

mongoose.connect('mongodb+srv://leninacosta2107:leadyglm8788@cluster0.kdvajd8.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log("Conectado a la BD de Mongo Atlas");
})
.catch(error=>{
    console.error("Error en la conexion", error);;
})


app.use('/api', apiRouter); // Use the renamed route file

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});