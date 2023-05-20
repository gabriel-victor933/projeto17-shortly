import { Router } from "express";
import {getRanking} from "../controllers/ranking.controllers.js"

const route = Router()

route.get("/ranking",getRanking)

export default route