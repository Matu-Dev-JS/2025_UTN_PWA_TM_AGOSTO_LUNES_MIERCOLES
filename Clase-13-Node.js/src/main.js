import connectToMongoDB from "./config/configMongoDB.config.js";
import express from 'express'

connectToMongoDB()


//Nos crea una app de express (servidor web)
const app = express()

app.get(
    '/test', 
    (request, response) => {
        response.send('<h1>Hola mundo</h1>')
    }
)

const PORT = 8080

//Listen lo usamos para dedicar un puerto a nuestro sevidor
//Recibe 2 parametros
//1. nro puerto
//2. Callback que se ejecutara si todo sale bien
app.listen(
    PORT, 
    () => {
        console.log(`Tu servidor se esta ejecutando correctamente en el puerto ${PORT}`)
    }
)