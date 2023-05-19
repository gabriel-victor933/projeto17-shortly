import { signUpSchema } from "../schemas/login.schema.js"
import { db } from "../dbs/connectDb.js"

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


export async function checkUser(req,res,next){

    const user = await db.query("SELECT * FROM users WHERE users.email = $1",[req.body.email])
    if(user.rowCount !== 0) return res.status(409).send("Email já foi cadastrado")

    next()
}
