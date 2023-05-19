import { db } from "../dbs/connectDb.js";

export async function authToken(req,res,next){

    const token = req.headers.authorization?.replace("Bearer","").trim()


    if(token === undefined || token == "") return res.status(401).send("missing token")

    const user = await db.query(`SELECT * FROM tokens WHERE tokens.id = $1`,[token])

    if(user.rowCount === 0) return res.status(401).send("invalid token")

    res.locals.userId = user.rows[0].userid
    res.locals.token = token
    next()

}