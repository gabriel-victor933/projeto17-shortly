import { db } from "../dbs/connectDb.js";


export async function postUrlRepository(id,url,shortUrl){
    return db.query(`INSERT INTO shortlinks ("userId", url,"shortUrl") 
    VALUES ($1,$2,$3) RETURNING id,"shortUrl"`,[id,url,shortUrl])
}

export async function getUrlRepository(id){
    return db.query(`SELECT id,"shortUrl",url,"userId" FROM shortlinks WHERE shortlinks.id = $1`,[id])
}

export async function updateUrlRepository(shortUrl){
    return db.query(`UPDATE shortlinks SET  "visitCount" = "visitCount" + 1 
    WHERE shortlinks."shortUrl" =  $1 RETURNING url`,[shortUrl])
}

export async function deleteURlRepository(id){
    return db.query(`DELETE FROM shortlinks WHERE shortlinks.id = $1`,[id])
}