import {getUserUrlsRepository} from "../repository/users.repository.js"

export async function getUsersUrls(req,res){

    try{

        const data = await getUserUrlsRepository(res.locals.userId)

        if(data.rowCount === 0 ) return res.sendStatus(204)

        const posts = {
            id: data.rows[0].userid,
            name: data.rows[0].name,
            visitCount: 0,
            shortenedUrls: []
        }


        if(data.rows[0].id !== null){
            data.rows.forEach((row)=>{
                const post = {
                    id: row.id,
                    shortUrl: row.shortUrl,
                    url: row.url,
                    visitCount: row.visitCount
                }
                posts.visitCount += row.visitCount;
                posts.shortenedUrls.push(post)
            })
        }
         

        return res.status(200).send(posts)
    } catch(err){
        return res.status(500).send(err)
    }
}