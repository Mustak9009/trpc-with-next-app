import {publicProcedure,router} from './trpc'; //Here is a basic 'procedure' or you can say 'controller' down below

export const appRouter = router({
    getTodo:publicProcedure.query(async ()=>{
        return ["Go to college","Go to GYM","Edit youTube video"]
    })
})

export type AppRouter = typeof appRouter;