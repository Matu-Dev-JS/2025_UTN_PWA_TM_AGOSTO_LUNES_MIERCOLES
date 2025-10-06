import ENVIRONMENT from "../config/environment.config.js";
import mailTransporter from "../config/mailTransporter.config.js";
import { ServerError } from "../error.js";
import UserRepository from "../repositories/user.repository.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


class AuthService {
    static async register(email, password, name){
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
            'Tu43PtuCjvykGuBttnSKiJeypvsSQVvKG6BJ3FlMlSGsDz6Cf0bu5Cu395/yUQmC'
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
            const payload = jwt.verify(verification_token, 'Tu43PtuCjvykGuBttnSKiJeypvsSQVvKG6BJ3FlMlSGsDz6Cf0bu5Cu395/yUQmC' )
            const {user_id} = payload
            if(!user_id){
                throw new ServerError(400, 'Accion denegada, token con datos insuficientes')
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
}

export default AuthService