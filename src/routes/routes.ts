import fastify, {FastifyInstance} from "fastify";
import { Gf } from "../types/types";

export const MainRoutes = async(fastify: FastifyInstance)=>{
    fastify.post<{Body:Gf}>('/read-gf3', async (req, reply) => {
        try {
            reply.status(200).send({msg:"ok"})
        } catch (error) {
            reply.status(400).send({msg:String(error)})
        }
    })

}