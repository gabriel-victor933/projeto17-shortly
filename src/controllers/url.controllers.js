import { nanoid } from "nanoid"
import { db } from "../dbs/connectDb.js"
import { postUrlRepository, getUrlRepository, updateUrlRepository,deleteURlRepository } from "../repository/url.repository.js"

export async function postUrl(req,res){

    const shortUrl = nanoid()

    try {
    const data = await postUrlRepository(res.locals.userId,req.body.url,shortUrl)
        
    res.status(201).send(data.rows[0])

    } catch(err){
        return res.status(500).send(err)
    }
}

export async function getUrl(req,res){

    const id = parseInt(req.params.id)

    if(!id) return res.status(400).send("invalid id")

   try { 
    const link = await getUrlRepository(req.params.id)

    if(link.rowCount === 0) return res.status(404).send("URl doenst exist")

    res.send(link.rows[0])

    } catch(err){
        return res.status(500).send(err)
    }
}

export async function getRedirect(req,res){

   try{ 

    const link = await updateUrlRepository(req.params.shortUrl)

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

        const post = await getUrlRepository(req.params.id)

        if(post.rowCount === 0) return res.status(404).send("Not found")

        if(post.rows[0].userId != res.locals.userId) return res.status(401).send("invalid")

        await deleteURlRepository(req.params.id)
    
        return res.status(204).send("deleted")
    } catch(err){
        return res.status(500).send(err)
    }

    
}