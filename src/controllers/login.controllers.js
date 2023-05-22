import {db} from "../dbs/connectDb.js"
import bcrypt from "bcrypt"
import { postUserrepository,postTokenRepository } from "../repository/login.repository.js"

export async function postSignup(req,res){
    const {name,email} = req.body
    const password = bcrypt.hashSync(req.body.password,10)

   try { 
    const post = await postUserrepository(name,email,password)
    return res.sendStatus(201)

    } catch(err){
        return res.status(500).send(err)
    }
}

export async function postSignin(req,res){

    try {
        console.log(res.locals.userId)
        const token = await postTokenRepository(res.locals.userId)
    res.status(200).send({token: token.rows[0].id})
    } catch(err){
        return res.status(500).send(err)
    }
}

