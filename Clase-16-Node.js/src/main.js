import ENVIRONMENT from "./config/environment.config.js";

import connectToMongoDB from "./config/configMongoDB.config.js";
import express from 'express'
import authRouter from "./routes/auth.router.js";
import workspaceRouter from "./routes/workspace.router.js";
import randomMiddleware from "./middlewares/random.middleware.js";


connectToMongoDB()

const app = express()


app.use(express.json())

//Todas las consultas que empiezen con /api/auth va a ser gestionadas por el authRouter
app.use('/api/auth', authRouter)
app.use('/api/workspace', workspaceRouter)





app.listen(
    ENVIRONMENT.PORT || 8080,
    () => {
        console.log(`Tu servidor se esta ejecutando correctamente en el puerto ${ENVIRONMENT.PORT}`)
    }
)