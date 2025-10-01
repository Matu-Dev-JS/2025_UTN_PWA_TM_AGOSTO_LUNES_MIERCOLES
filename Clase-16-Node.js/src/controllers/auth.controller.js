import { ServerError } from "../error.js";
import AuthService from "../services/auth.service.js";

class AuthController {
    static async register (request, response){
        try{
            const { email, password, name } = request.body
            
            await AuthService.register(email, password, name)
            response.send({
                ok: true,
                message: 'Usuario registrado con exito'
            })
        }
        catch(error){
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
