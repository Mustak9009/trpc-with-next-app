'use client'
import React, { useState } from "react";
import { trpc } from "./client";
import { QueryClient,QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
export function Provider({ children }: { children: React.ReactNode }) {
    const [queryClient] = useState(()=> new QueryClient());
    const [trpcClient] = useState(()=> trpc.createClient({
        links:[
            httpBatchLink({
                url:'http://localhost:3000/api/trpc'
            })
        ]
    }))
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  )
}
