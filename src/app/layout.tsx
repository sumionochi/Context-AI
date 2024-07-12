import type { Metadata } from 'next'
import { Lexend } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Navbar from '@/components/Navbar'
import { Provider} from '@/components/Provider'
import { Toaster } from '@/components/ui/toaster'
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
      <body className={cn(lexend.className, 'antialiased  min-h-screen border-none outline-none', 'scrollbar scrollbar-thumb scrollbar-thumb-white scrollbar-track-slate-700 bg-gradient-to-br from-rose-400 to-orange-300 dark:bg-gradient-to-br dark:from-gray-900 dark:via-purple-900 dark:to-violet-600')}>
            <Provider>
              <Navbar/>
              {children}
              <Toaster/>
            </Provider>
      </body>
    </html>
  )
}
