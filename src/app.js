import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import {db} from "./dbs/connectDb.js" 

const app = express()
dotenv.config()
app.use(cors())

async function testando(){

    const data1 = await db.query("SELECT * FROM users")
    const data2 = await db.query("SELECT * FROM tokens")

    const data3 = await db.query("SELECT * FROM shortlinks")

    console.log(data1.rows)
    console.log(data2.rows)

    console.log(data3.rows)


}

testando()


const port = process.env.port || 5000
app.listen(port,()=>console.log(`running server at port ${port}` ))