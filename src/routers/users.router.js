import { Router } from "express";
import { authToken } from "../middlewares/auth.middleware.js";
import {getUsersUrls} from "../controllers/users.controllers.js"

const route = Router()

route.get("/users/me",authToken,getUsersUrls)

export default route