import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import {appRouter} from '@/server'

const hanler = (req:Request) =>[
    fetchRequestHandler({
        endpoint:'/api/v1/trpc',
        req,
        router:appRouter,
        createContext:()=>({})
    })
]
export {hanler as GET,hanler as POST}
