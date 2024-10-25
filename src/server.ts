
import fastify from "fastify";
import { MainRoutes } from "./routes/routes";

const server = fastify()

server.register(MainRoutes,{prefix:"/sisflora"} )

server.listen({port:3333}, (err, addres)=>{
    if(err){
        console.error(err)
        process.exit(1)
    }

    console.log(`Server listening at ${addres}`)
})