import {FastifyInstance} from "fastify";
import { SisfloraURL } from "../types/types";
import { scraper } from "../controllers/scraper";
import utils from "../utils"


export const MainRoutes = async(fastify: FastifyInstance)=>{
    const {isValidHttpUrl} = utils

    fastify.post<{Body:SisfloraURL}>('/read-gf3', async (req, reply) => {
        try {

            const {url} = req.body

            if(!isValidHttpUrl(url)){
                reply.status(400).send({error:"Url Inválida."})
            }

            const data = await scraper(url)

            if(data){
                reply.status(200).send({siflora:data})
            }

            
            
            
        } catch (error) {
            reply.status(400).send({error})
        }
    }),


    fastify.get('/test', async(req, reply)=>{
        reply.status(200).send({msg:"hello world!"})
    })

}