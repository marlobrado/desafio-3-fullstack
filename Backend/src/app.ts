import 'reflect-metadata'
import express from 'express'
import "express-async-errors"
import userRoutes from './routes/users.routes'
import sessionRouter from './routes/sessions.routes'
import handleErrorMiddleware from './middlewares/handleError.middleware'


const app = express()

app.use(express.json())
app.use("/users", userRoutes)
app.use("/login", sessionRouter)

app.use(handleErrorMiddleware)

app.listen(3000, () =>{
    console.log('Server running in port 3000')
})





export default app