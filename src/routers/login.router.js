import { Router } from "express";
import { validateSignup, validateSignin, checkUserEmail,validateUser } from "../middlewares/login.middleware.js";
import { postSignup,postSignin } from "../controllers/login.controllers.js";

const route = Router()

route.post("/signup",validateSignup, checkUserEmail ,postSignup)

route.post("/signin",validateSignin, validateUser,postSignin)


export default route