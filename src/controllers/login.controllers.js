import {db} from "../dbs/connectDb.js"
import bcrypt from "bcrypt"

export async function postSignup(req,res){
    const {name,email} = req.body
    const password = bcrypt.hashSync(req.body.password,10)
    const post = await db.query("INSERT INTO users (name,email,password) VALUES ($1,$2,$3);",[name,email,password])
    res.sendStatus(201)
}

export async function postSignin(req,res){
    console.log(res.locals.userId)

    const token = await db.query(`INSERT INTO tokens (userId) VALUES ($1) RETURNING id;`,[res.locals.userId])
    res.status(200).send(token.rows[0].id)
}

