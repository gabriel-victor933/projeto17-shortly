import { Router } from "express";
import { validateUrl } from "../middlewares/url.middleware.js";
import { postUrl } from "../controllers/url.controllers.js";
import { authToken } from "../middlewares/auth.middleware.js";

const route = Router()

route.post("/urls/shorten",authToken,validateUrl,postUrl)

export default route