import type { Metadata } from 'next'
import { Lexend } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Navbar from '@/components/Navbar'
import { Provider} from '@/components/Provider'
import { Toaster } from '@/components/ui/toaster'
import Tools from '@/components/Tools'
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
      <head>
      <script src="https://www.youtube.com/iframe_api"></script>
      </head>
      <body className={cn(lexend.className, 'antialiased min-h-screen pt-16 border-none outline-none', 'scrollbar scrollbar-thumb scrollbar-thumb-white dark:scrollbar-thumb-black dark:scrollbar-track-white scrollbar-track-slate-700')}>
            <Provider>
              <Navbar/>
              {children}
              <Toaster/>
              <Tools user={undefined}/> 
              <Chat user={undefined}/>
            </Provider>
      </body>
    </html>
  )
}
