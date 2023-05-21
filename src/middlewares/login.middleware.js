import { signUpSchema,signInSchema } from "../schemas/login.schema.js"
import { db } from "../dbs/connectDb.js"
import bcrypt from "bcrypt"


export function validateSignup(req,res,next){
    const {error} = signUpSchema.validate(req.body,{abortEarly: false})

    if(error){
        console.log(error.details)
        const message = error.details.map((d)=> d.message)
        res.status(422).send(message)
    } else {
        next()
    }
}

export function validateSignin(req,res,next){

    const {error} = signInSchema.validate(req.body,{abortEarly: false})

    if(error){
        
        const message = error.details.map((d)=> d.message)
        res.status(422).send(message)
    } else {
        next()
    }
}


export async function checkUserEmail(req,res,next){

    try {const user = await db.query("SELECT * FROM users WHERE users.email = $1",[req.body.email])
    if(user.rowCount !== 0) return res.status(409).send("Email já foi cadastrado")

    next()
    } catch(err){
        return res.status(500).send(err)
    }
}

export async function validateUser(req,res,next){

    try {
    const user = await db.query(`SELECT password, id FROM users WHERE email=$1`,[req.body.email])

    if(user.rowCount === 0 || !bcrypt.compareSync(req.body.password, user.rows[0].password)){
        return res.status(401).send("email/senha incorretos")
    }
    res.locals.userId = user.rows[0].id
    next()
    } catch(err){
        return res.status(500).send(err)
    }
    

}
