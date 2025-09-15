
import mongoose from 'mongoose'

async function connectToMongoDB (){
    try{
        const DB_NAME = '2025_TM_PWA_LUNES_MIERCOLES_SLACK_REAL'
        const connection_string = 'mongodb://localhost:27017/' + DB_NAME
        await mongoose.connect(connection_string)
        console.log("Conexion con DB exitosa!")
    }
    catch(error){
        console.log('[SERVER ERROR]: Fallo en la conexion',  error)
    }
}

export default connectToMongoDB