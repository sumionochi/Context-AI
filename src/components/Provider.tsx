"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import { SessionProvider } from "next-auth/react"
import {FC, ReactNode} from 'react'
import { MessagesProvider } from "@/context/messages"

interface ProviderProps {
  children: ReactNode
}

const queryClient = new QueryClient();
export function Provider({ children, ...props }: ProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <NextThemesProvider attribute="class" defaultTheme="system" enableSystem  {...props}>
      <SessionProvider>
      <MessagesProvider>{children}</MessagesProvider>
      </SessionProvider>
      </NextThemesProvider>
    </QueryClientProvider>
  )
}
