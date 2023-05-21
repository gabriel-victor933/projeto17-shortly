import { db } from "../dbs/connectDb.js";


export async function getUsersUrls(req,res){

    try{

        const data = await db.query(`SELECT users.id AS userid, users.name, shortlinks.id, 
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
        ORDER BY shortlinks."visitCount" DESC;`,[res.locals.userId])


        const posts = {
            id: data.rows[0].userid,
            name: data.rows[0].name,
            visitCount: 0,
            shortenedUrls: []
        }


        if(data.rows[0].id !== null){
            data.rows.forEach((row)=>{
                const post = {
                    id: row.id,
                    shortUrl: row.shortUrl,
                    url: row.url,
                    visitCount: row.visitCount
                }
                posts.visitCount += row.visitCount;
                posts.shortenedUrls.push(post)
            })
        }
         

        return res.status(200).send(posts)
    } catch(err){
        return res.status(500).send(err)
    }
}