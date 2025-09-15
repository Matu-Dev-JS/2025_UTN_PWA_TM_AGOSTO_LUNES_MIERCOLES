import { CustomError } from "./error.js"

function sumar (a, b){

    if(!a){
        //Throw puede lanzar errores
        //Se corta el hilo de ejecucion de la funcion como return 
        throw new CustomError('a is not valid', 400)
    }
    else if(!b){
        throw new CustomError('b is not valid', 400)
    }
    return a + b
}


export {
    sumar
}