import {UrlSchema} from "../schemas/url.schema.js"

export function validateUrl(req,res,next){

    const {error} = UrlSchema.validate(req.body)

    if(error){
        return res.status(401).send(error.details[0].message)
    }
    next()
}