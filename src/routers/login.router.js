import { Router } from "express";
import { validateSignup,checkUser } from "../middlewares/login.middleware.js";
import { postSignup } from "../controllers/login.controllers.js";

const route = Router()

route.post("/signup",validateSignup, checkUser,postSignup)

export default route