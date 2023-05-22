import { db } from "../dbs/connectDb.js";


export async function getRanking(req,res){

    try{

        const rank = await db.query(`SELECT users.id AS id, users.name, 
        COALESCE(SUM(shortlinks."visitCount"), 0) AS "visitCount", COUNT(shortlinks.id) AS "linksCount"
            FROM users 
            LEFT JOIN shortlinks ON users.id = shortlinks."userId"      
            GROUP by users.id,
            users.name
            ORDER BY "visitCount" DESC
            LIMIT 10;`)

        return res.status(200).send(rank.rows)

    } catch(err){
        return res.status(500).send(err)
    }
}