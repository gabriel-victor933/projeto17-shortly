import { db } from "../dbs/connectDb.js";
import { getRankingRepository } from "../repository/ranking.repository.js";


export async function getRanking(req,res){

    try{

        const rank = await getRankingRepository()

        return res.status(200).send(rank.rows)

    } catch(err){
        return res.status(500).send(err)
    }
}