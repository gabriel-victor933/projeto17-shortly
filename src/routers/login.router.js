import { Router } from "express";
import { validateSignup, validateSignin, checkUser } from "../middlewares/login.middleware.js";
import { postSignup } from "../controllers/login.controllers.js";

const route = Router()

route.post("/signup",validateSignup, checkUser,postSignup)

route.post("/signin",validateSignin, checkUser,postSignup)


export default route