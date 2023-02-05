import 'reflect-metadata'
import express from 'express'
import "express-async-errors"
import userRoutes from './routes/users.routes'
import sessionRouter from './routes/sessions.routes'
import handleErrorMiddleware from './middlewares/handleError.middleware'
import contactRouter from './routes/contacts.routes'


const cors = require('cors')
const app = express()

app.use(cors()); 

app.use(express.json())
app.use("/users", userRoutes)
app.use("/login", sessionRouter)
app.use("/contacts", contactRouter)

app.use(handleErrorMiddleware)

export default app