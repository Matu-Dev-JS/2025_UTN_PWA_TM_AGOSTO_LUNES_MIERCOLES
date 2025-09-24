import { ServerError } from "../error.js";

class AuthController {
    static async register (request, response){
        try{
            /* 
            Estas validaciones se suelen hacer con librerias de validacion como joi 
            */
          /*   const {email, name, password} = request.body
            const email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if(!email || !email_regex.test(email)){
                throw new ServerError(400, 'Email no valido')
            } */

            /* 
            Validar el name (que sea string, mayor a 4 caracteres)
            Validar el password (que sea string mayor a 6 caracteres)
            */

            response.send({
                ok: true
            })
        }
        catch(error){
            /*
            Si es un error especifico (tiene status) entonces tirame un error especifico
            Si es un error generico (no tiene status) entonces tirame un error generico
            */
            if(error.status){
                response.send({
                    ok:false,
                    message: error.message,
                    status: error.status
                })
            }
            else{
                console.error(
                    'ERROR AL REGISTRAR', error
                )
                response.send({
                    ok: false,
                    message: 'Error interno del servidor',
                    status: 500
                })
            }
        }
    }
}


export default AuthController
