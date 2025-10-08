
export class CustomError extends Error{
    constructor(message, status){
        super(message)
        this.status = status
    }
}

/* function ejecutarSuma (){
    try{
        //Try intentara ejecutar este bloque de codigo
        console.log(sumar(2))
    }
    catch(error){
        //En caso de que el bloque falle
        //catch atrapara el error y ejecutara su bloque de codigo
        console.log("la operacion sumar ha fallado")
        console.log('RAZON:', error)
    }
    finally{
        //Finalmente, o independientemente de lo que pase ejecuta esto
        console.log("Finalizo el intento de ejecucion de sumar")
    }
} */

/* ejecutarSuma() */


const manejarError = (accionCallback) =>{
    try{
        accionCallback()
    }
    catch(error){
        if(error.status){
            console.error('[CLIENT ERROR]: ' + error.message, 'Status: ' + error.status)
        }
        else{
            console.error('[SERVER ERROR]: ' + error.message)
        }
    }
}

manejarError(() =>{ sumar(2) })

manejarError(() =>{ sakldhsudosadoas })


export class ServerError extends Error{
    constructor(status, message){
        super(message)
        this.status = status
    }
}

