import { db } from "../dbs/connectDb.js";


export async function getRanking(req,res){

    try{

        const rank = await db.query(`SELECT users.id AS userid, users.name, 
        SUM(shortlinks.visitcount) AS "visitCount", COUNT(shortlinks.ID) AS "linksCount"
            FROM users 
            LEFT JOIN shortlinks ON users.id = shortlinks.userid       
            GROUP by users.id,
            users.name
            ORDER BY "visitCount" DESC
            LIMIT 10;`)

        return res.status(200).send(rank)

    } catch(err){
        return res.status(500).send(err)
    }
}