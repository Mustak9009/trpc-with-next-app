import {publicProcedure,router} from './trpc'; //Here is a basic 'procedure' or you can say 'controller' down below

export const appRouter = router({
    getTodos:publicProcedure.query(async ()=>{
        return ["Go to college","Go to GYM","Edit youTube video",20]
    })
})

export type AppRouter = typeof appRouter;