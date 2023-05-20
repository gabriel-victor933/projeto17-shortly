import Express from "express"
import dotenv from "dotenv"
import cors from "cors"
import LoginRoute from "./routers/login.router.js"
import UrlRoute from "./routers/url.router.js"
import UsersRoute from "./routers/users.router.js"


const app = Express()
dotenv.config()
app.use(cors())
app.use(Express.json())
app.use(LoginRoute)
app.use(UrlRoute)
app.use(UsersRoute)


const port = process.env.port || 5000
app.listen(port,()=>console.log(`running server at port ${port}` ))