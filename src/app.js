import Express from "express"
import dotenv from "dotenv"
import cors from "cors"
import {db} from "./dbs/connectDb.js" 
import LoginRoute from "./routers/login.router.js"

const app = Express()
dotenv.config()
app.use(cors())
app.use(Express.json())
app.use(LoginRoute)



const port = process.env.port || 5000
app.listen(port,()=>console.log(`running server at port ${port}` ))