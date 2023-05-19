import {db} from "../dbs/connectDb.js"

export async function postSignup(req,res){
    const {name,email,password} = req.body
    const post = await db.query("INSERT INTO users (name,email,password) VALUES ($1,$2,$3)",[name,email,password])
    res.sendStatus(201)
}

