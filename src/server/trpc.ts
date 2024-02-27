import {initTRPC} from '@trpc/server'; // Baic initilation 'down below'
const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;