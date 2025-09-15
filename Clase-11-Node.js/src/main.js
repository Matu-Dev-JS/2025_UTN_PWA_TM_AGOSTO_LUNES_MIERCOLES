import connectToMongoDB from "./config/configMongoDB.config.js";
import User from "./models/User.model.js";

connectToMongoDB()


async function crearUsuario (name, email, password){
    try{
        await User.insertOne({
            name: name,
            email: email,
            password: password
        })
        console.log('[SERVER]: usuario creado exitosamente')
    }
    catch(error){
        console.error('[SERVER ERROR]: no se pudo crear el usuario', error)
    }
}

crearUsuario('pepe', 'pepe@gmail.com', 'Pepe_123')