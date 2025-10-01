import { Router } from "express";
import AuthController from "../controllers/auth.controller.js";
import { validateRequest } from "../middlewares/validateRequest.middleware.js";
import { registerSchema } from "../schemas/auth.schema.js";


const authRouter = Router()


authRouter.post(
    '/register',
    validateRequest(registerSchema),
    AuthController.register
)

export default authRouter