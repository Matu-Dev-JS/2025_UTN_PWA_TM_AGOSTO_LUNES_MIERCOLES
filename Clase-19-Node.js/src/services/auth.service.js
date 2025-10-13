import ENVIRONMENT from "../config/environment.config.js";
import mailTransporter from "../config/mailTransporter.config.js";
import { ServerError } from "../error.js";
import UserRepository from "../repositories/user.repository.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


class AuthService {
    static async register(email, password, name){

        console.log(email, name, password)
        const user = await UserRepository.getByEmail(email)
        
        if(user){
            throw new ServerError(400, 'Email ya en uso')
        }
    
        const password_hashed = await bcrypt.hash(password, 12)
        const user_created = await UserRepository.create(name, email, password_hashed)
        const user_id_created = user_created._id

        //CREAMOS UN JSON WEB TOKEN
        //Un JSON web token es un objeto pasado a texto con una firma (SIGNATURE)
        //Vamos a enviar entre JWT por URL 

        //.sing() firmar un token
        const verification_token = jwt.sign(
            {
                user_id: user_id_created
            },
            ENVIRONMENT.JWT_SECRET
        )

        await mailTransporter.sendMail({
            from: ENVIRONMENT.GMAIL_USER,
            to: email,
            subject: 'Verifica tu cuenta de mail',
            html: `
                <h1>Verifica tu cuenta de mail</h1>
                <a href="http://localhost:${ENVIRONMENT.PORT}/api/auth/verify-email/${verification_token}">Verificar</a>
            `
        })

        return
    }

    static async verifyEmail (verification_token){
        try{
            //Nos dice si el token esta firmado con x clave
            const payload = jwt.verify(
                verification_token, 
                ENVIRONMENT.JWT_SECRET
            )
            const {user_id} = payload
            if(!user_id){
                throw new ServerError(400, 'Accion denegada, token con datos insuficientes')
            } 

            const user_found = await UserRepository.getById(user_id)
            if(!user_found){
                throw new ServerError(404, 'Usuario no encontrado')
            }

            if(user_found.verified_email){
                throw new ServerError(400, 'Usuario ya validado')
            }

            await UserRepository.updateById(user_id, {verified_email: true})

            return 
        }
        catch(error){
            //Checkeamos si el error es de la verificacion del token
            if(error instanceof jwt.JsonWebTokenError){
                throw new ServerError(400, 'Accion denegada, token invalido')
            }
            throw error
        }
    }

    static async login (email, password){
        /* 
        -Buscar al usuario por email
        -Validar que exista
        -Validar que este verificado su mail
        -Comparar la password recibida con la del usuario
        -Genera un token con datos de sesion del usuario y responderlo
        */

        const user_found = await UserRepository.getByEmail(email)
        
        if(!user_found) {
            throw new ServerError(404, 'Usuario con este mail no encontrado')
        }
        
        if(!user_found.verified_email){
            throw new ServerError(401, 'Usuario con mail no verificado')
        }

        const is_same_passoword = await bcrypt.compare( password, user_found.password )
        if(!is_same_passoword){
            throw new ServerError(401, 'Contraseña invalida')
        }

        //creo un token con datos de sesion (DATOS NO SENSIBLES)
        const auth_token = jwt.sign(
            {
                name: user_found.name,
                email: user_found.email,
                id: user_found.id,
            },
            ENVIRONMENT.JWT_SECRET,
            {
                expiresIn: '24h'
            }
        )

        return {
            auth_token: auth_token
        }
    }
}

export default AuthService

/* 
AUTOMATIZACION DE GENERADOR DE CLAVES PARA JWT

Creo esta tabla o coleccion
- type: "AUTH" | "PRODUCTS" | "SESSIONS"
- id : INT | STRING
- secret : STRING
- expire_in : DATE
- created_at: DATE
- active: boolean

PARA CREAR: 
    Cada vez que creemos el token usamos el ultimo registro de la tabla
    Si el registro esta expirado crear uno nuevo
    y guardamos en el token el secret_id (el id de esa clave)

PARA USAR/VERIFICAR: 
    Vas a tomar el secret_id y vas a buscar el la DB si existe un secreto con ese secret_id, en caso de existir vas a verificar el token con ese secret
*/