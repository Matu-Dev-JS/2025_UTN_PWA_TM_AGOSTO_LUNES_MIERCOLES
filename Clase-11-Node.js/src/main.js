import connectToMongoDB from "./config/configMongoDB.config.js";
import User from "./models/User.model.js";
import {promises as filesystem} from 'fs'

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

//crearUsuario('pepe', 'pepe@gmail.com', 'Pepe_123')

async function crearJSON (filename, objeto){
    try{
        await filesystem.writeFile(filename, JSON.stringify(objeto))
        console.log(filename, 'creado con exito')
    }
    catch(error){

    }
}

crearJSON('objeto_2_grande', {
    name: 'pepe',
    email: 'pepe@gmail.com',
    dato: 1,
    dato2: 2,
    dato3: 3,
    dato4: 4,
    dato5: 5,
    dato6: 6,
    dato7: 7

})

crearJSON('objeto_1', {
    name: 'pepe',
    email: 'pepe@gmail.com',
    password: 'Pepe_123'
})

