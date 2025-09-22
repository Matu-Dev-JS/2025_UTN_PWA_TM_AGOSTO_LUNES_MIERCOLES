import connectToMongoDB from "./config/configMongoDB.config.js";
import express from 'express'

connectToMongoDB()


//Nos crea una app de express (servidor web)
const app = express()

//POR DEFECTO, nuestra app no esta preparada para recibir JSON en el body
//Configuramos un middleware que permite que el json que envien en el body de la consulta se transforme en objeto de JS
app.use(express.json())

app.get(
    '/test', 
    (request, response) => {
        response.send('<h1>Hola mundo</h1>')
    }
)

//A mi servidor le van a mandar un objeto con numero_1 y numero_2
//Responder con el resultado de la suma
app.post(
    "/sumar",
    //request es el objeto con la informacion de consulta
    //response es el objeto para dar respuestas
    (request, response) => {
        //Si se quieren comunicar con mi servidor normalmente se transferiran los datos mediante request.body
        const {numero_1, numero_2} = request.body

        if( typeof( numero_1 ) !== 'number' ){
            response.send({
                error: 'Numero 1 debe ser un numero, valor actual: ' + numero_1
            })
            return 
        }
        else if( typeof( numero_2 ) !== 'number' ){
            response.send({
                error: 'Numero 2 debe ser un numero, valor actual: ' + numero_2
            })
            return 
        }


        //Agregar validacion de numero, si alguno de los numeros no es un numero responder con el detalle de error 

        response.send({
            result: Number(numero_1) + Number(numero_2)
        })
    }
)

const products = []


app.post(
    '/products',
    (request, response) => {
        const { title, price, stock } = request.body
        if (!title || typeof (title) !== "string" || title.length < 4) {
            response.send({
                error: 'titulo no valido'
            })
            return
        }
        else if ((!price || typeof (price) !== "number" || price < 0)) {
            return response.send({
                error: 'precio no valido'
            })
        }
        else if (!stock || typeof (stock) !== "number" || stock < 0) {
            response.send({
                error: 'stock no valido'
            })
            return
        }
        else {
            const new_product =
            {
                title,
                price,
                stock: parseInt(stock),
                id : products.length +1
            }
            products.push(new_product)
        }
    }
)
/* 
Crear un endpoint en /products
Cuando se envie un post se debera capturar el title, price, stock del producto y debera crearse un objeto que se agregue a lista de products, muy importante validar que title sea un string de almenos 4 caracteres, price sea un numero positivo y tambien el stock. 
Recuerden crear un id para el producto.

Crear un endpoint en /products
Cuando se envie un get debera responder con {products: [...lista de productos]}
*/


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