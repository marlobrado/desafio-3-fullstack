import 'reflect-metadata'
import express from 'express'
import "express-async-errors"
import userRoutes from './routes/users.routes'
import sessionRouter from './routes/sessions.routes'
import handleErrorMiddleware from './middlewares/handleError.middleware'
import contactRouter from './routes/contacts.routes'


const app = express()

app.use(express.json())
app.use("/users", userRoutes)
app.use("/login", sessionRouter)
app.use("/contacts", contactRouter)

app.use(handleErrorMiddleware)

app.listen(3050, () =>{
    console.log('Server running in port 3050')
})





export default app