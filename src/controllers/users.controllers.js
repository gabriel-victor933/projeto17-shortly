import { db } from "../dbs/connectDb.js";


export async function getUsersUrls(req,res){

    try{

        const data = await db.query(`SELECT users.id AS userid, users.name, shortlinks.id, 
        shortlinks.shorturl, shortlinks.url,shortlinks.visitcount, SUM(shortlinks.visitcount) AS total 
        FROM users 
        JOIN shortlinks ON users.id = shortlinks.userid       
        WHERE users.id = $1
        GROUP by users.id,
        users.name,
        shortlinks.id,
        shortlinks.shorturl,
        shortlinks.url,
        shortlinks.visitcount
        ORDER BY shortlinks.visitcount DESC;`,[res.locals.userId])


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
                    shortUrl: row.shorturl,
                    url: row.url,
                    visitCount: row.visitcount
                }
                posts.visitCount += row.visitcount;
                posts.shortenedUrls.push(post)
            })
        }
         

        return res.status(200).send(posts)
    } catch(err){
        return res.status(500).send(err)
    }
}