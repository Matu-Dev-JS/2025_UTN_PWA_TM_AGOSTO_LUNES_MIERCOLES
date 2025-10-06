import ENVIRONMENT from "./config/environment.config.js";

import connectToMongoDB from "./config/configMongoDB.config.js";
import express from 'express'
import authRouter from "./routes/auth.router.js";
import workspaceRouter from "./routes/workspace.router.js";
import randomMiddleware from "./middlewares/random.middleware.js";
import mailTransporter from "./config/mailTransporter.config.js";


connectToMongoDB()

const app = express()


app.use(express.json())

//Todas las consultas que empiezen con /api/auth va a ser gestionadas por el authRouter
app.use('/api/auth', authRouter)
app.use('/api/workspace', workspaceRouter)


/* mailTransporter.sendMail(
    {
        from: ENVIRONMENT.GMAIL_USER, //Desde quien
        to:  'mati.dev.gimenez@gmail.com', //Hacia adonde enviar
        subject: 'Mail de prueba', //asunto
        html: `<h1>Hola desde node js</h1>` //Body del mail
    }
) */


app.listen(
    ENVIRONMENT.PORT || 8080,
    () => {
        console.log(`Tu servidor se esta ejecutando correctamente en el puerto ${ENVIRONMENT.PORT}`)
    }
)