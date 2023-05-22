import { db } from "../dbs/connectDb.js";

export async function postUserrepository(name,email,password){
    return db.query("INSERT INTO users (name,email,password) VALUES ($1,$2,$3);",[name,email,password])
}

export async function postTokenRepository(id){
    return db.query(`INSERT INTO tokens ("userId") VALUES ($1) RETURNING id;`,[id])
}