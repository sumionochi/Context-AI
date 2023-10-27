import type { Metadata } from 'next'
import { Lexend } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Navbar from '@/components/Navbar'
import { Provider} from '@/components/Provider'
import { Toaster } from '@/components/ui/toaster'
import Tools from '@/components/Tools'
import { ClerkProvider } from '@clerk/nextjs'
import Chat from '@/components/Chat'

const lexend = Lexend({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Khyal AI',
  description: 'AI powered classroom',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={cn(lexend.className, 'antialiased min-h-screen pt-16', 'scrollbar scrollbar-thumb scrollbar-thumb-white dark:scrollbar-thumb-black dark:scrollbar-track-white scrollbar-track-slate-700')}>
            <ClerkProvider>
            <Provider>
              <Navbar/>
              {children}
              <Toaster/>
              <Tools user={undefined}/> 
            </Provider>
            </ClerkProvider>
      </body>
    </html>
  )
}
