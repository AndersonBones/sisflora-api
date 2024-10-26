import {FastifyInstance} from "fastify";
import { Gf } from "../types/types";
import { scraper } from "../controllers/scraper";
import utils from "../utils"


export const MainRoutes = async(fastify: FastifyInstance)=>{
    const {isValidHttpUrl} = utils

    fastify.post<{Body:Gf}>('/read-gf3', async (req, reply) => {
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
            reply.status(400).send({error:"Instabilidade no retorno de dados do Scraper."})
        }
    })

}