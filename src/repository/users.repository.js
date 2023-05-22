import { db } from "../dbs/connectDb.js";

export async function getUserUrlsRepository(id){
    return db.query(`SELECT users.id AS userid, users.name, shortlinks.id, 
    shortlinks."shortUrl", shortlinks.url,shortlinks."visitCount", SUM(shortlinks."visitCount") AS total 
    FROM users 
    JOIN shortlinks ON users.id = shortlinks."userId"      
    WHERE users.id = $1
    GROUP by users.id,
    users.name,
    shortlinks.id,
    shortlinks."shortUrl",
    shortlinks.url,
    shortlinks."visitCount"
    ORDER BY shortlinks."visitCount" DESC;`,[id])
}