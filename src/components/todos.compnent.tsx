'use client'
import React from 'react'
import {trpc} from '@/trpc/client';
export default function Todos() {
  const todos = trpc.getTodos.useQuery();
  return (
    <div>{JSON.stringify(todos.data)}</div>
  )
}
