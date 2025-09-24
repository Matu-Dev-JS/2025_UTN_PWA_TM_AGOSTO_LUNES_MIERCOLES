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



//Quiero que falle cuando sea mayor a 0.5
app.get(
    '/ping',
    /* Middleware */
    randomMiddleware(0.5),
    (request, response) => {
        console.log("llego un ping")
        response.send({ ok: true })
    }
)


//Quiero que falle cuando sea mayor a 0.1
app.get(
    '/ping-2',
    /* Middleware */
    randomMiddleware(0.1),
    (request, response) => {
        console.log("llego un ping")
        response.send({ ok: true })
    }
)

//Quiero que falle cuando sea mayor a 0.9
app.get(
    '/ping-3',
    /* Middleware */
    randomMiddleware(0.9),
    (request, response) => {
        console.log("llego un ping")
        response.send({ ok: true })
    }
)



const PORT = 8080

app.listen(
    PORT,
    () => {
        console.log(`Tu servidor se esta ejecutando correctamente en el puerto ${PORT}`)
    }
)