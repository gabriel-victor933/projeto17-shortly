import { nanoid } from "nanoid"
import { db } from "../dbs/connectDb.js"

export async function postUrl(req,res){

    const shortUrl = nanoid()

    try {const data = await db.query(`INSERT INTO shortlinks (userId, url,shorturl) 
        VALUES ($1,$2,$3) RETURNING id,shorturl`,[res.locals.userId,req.body.url,shortUrl])
    res.status(201).send(data.rows[0])

    } catch(err){
        return res.status(500).send(err)
    }
}

export async function getUrl(req,res){

    const id = parseInt(req.params.id)

    if(!id) return res.status(400).send("invalid id")

   try { 
    const link = await db.query(`SELECT id,shorturl,url FROM shortlinks WHERE shortlinks.id = $1`,[req.params.id])

    if(link.rowCount === 0) return res.status(404).send("URl doenst exist")

    res.send(link.rows[0])

    } catch(err){
        return res.status(500).send(err)
    }
}

export async function getRedirect(req,res){

   try{ 

    const link = await db.query(`UPDATE shortlinks SET  visitcount = visitcount + 1 
    WHERE shortlinks.shorturl =  $1 RETURNING url`,[req.params.shortUrl])

    if(link.rowCount === 0 ) return res.status(404).send("not found")

    return res.redirect(link.rows[0].url)

    } catch(err){
        return res.status(500).send(err)
    }
}

export async function deleteUrl(req,res){

    const id = parseInt(req.params.id)

    if(!id) return res.status(400).send("invalid id")
    
    try{

        const post = await db.query(`SELECT * FROM  shortlinks WHERE shortlinks.id = $1;`,[req.params.id])

        if(post.rowCount === 0) return res.status(404).send("Not found")

        if(post.rows[0].userid != res.locals.userId) return res.status(401).send("invalid")

        await db.query(`DELETE FROM shortlinks WHERE shortlinks.id = $1`,[req.params.id])
    
        return res.status(204).send("deleted")
    } catch(err){
        return res.status(500).send(err)
    }

    
}