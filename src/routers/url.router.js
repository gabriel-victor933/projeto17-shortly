import { Router } from "express";
import { validateUrl } from "../middlewares/url.middleware.js";
import { postUrl, getUrl,getRedirect } from "../controllers/url.controllers.js";
import { authToken } from "../middlewares/auth.middleware.js";

const route = Router()

route.post("/urls/shorten",authToken,validateUrl,postUrl)

route.get("/urls/:id",getUrl)

route.get("/urls/open/:shortUrl",getRedirect)


export default route