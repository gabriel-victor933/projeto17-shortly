import { nanoid } from "nanoid"
import { db } from "../dbs/connectDb.js"

export async function postUrl(req,res){

    const shortUrl = nanoid()

    const data = await db.query(`INSERT INTO shortlinks (userId, url,shorturl) 
        VALUES ($1,$2,$3) RETURNING id,shorturl`,[res.locals.userId,req.body.url,shortUrl])
    res.status(201).send(data.rows[0])
}