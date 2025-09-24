import { Router } from "express";
import AuthController from "../controllers/auth.controller.js";

//Creamos una ruta de express
const authRouter = Router()

authRouter.get(
    '/test', 
    (request, response) => {
        response.send({
            ok: true
        })
    }
)

authRouter.post('/register', AuthController.register)
/* authRouter.post('/verify-email')
authRouter.post('/login') */

export default authRouter