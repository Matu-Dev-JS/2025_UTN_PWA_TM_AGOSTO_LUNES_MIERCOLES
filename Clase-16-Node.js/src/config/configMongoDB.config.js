
import mongoose from 'mongoose'
import ENVIRONMENT from './environment.config.js'

async function connectToMongoDB (){
    try{
        const connection_string = ENVIRONMENT.MONGO_DB_HOST + '/' + ENVIRONMENT.MONGO_DB_NAME
        await mongoose.connect(connection_string)
        console.log("Conexion con DB exitosa!")
    }
    catch(error){
        console.log('[SERVER ERROR]: Fallo en la conexion',  error)
    }
}

export default connectToMongoDB