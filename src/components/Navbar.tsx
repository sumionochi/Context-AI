import React from 'react'
import Link from 'next/link'
import Sign from './Sign'
import { getAuthSession } from '@/lib/auth'
import UserAccountNav from './UserAccountNav'
import { Themetoggle } from './ui/Themetoggle'

type Props = {}

const Navbar = async (props: Props) => {
    const session = await getAuthSession();
    console.log(session);
  return (
    <nav className='fixed inset-x-0 top-0 bg-white dark:bg-gray-950 z-10 h-fit border-b border-zinc-300 py-3 px-5'>
        <div className='flex items-center justify-between max-w-7xl mx-auto'>
            <Link href='/home' className="items-center hidden sm:flex">
                <p className='rounded-xl border-2 border-b-4 border-black px-2 py-1 text-xl font-bold transition-all hover:translate-y-2 md:block dark:border-white'>
                    Khyal AI
                </p>
            </Link>
            
            <div className='flex items-center gap-5'>
                {session?.user && (
                            <>
                            <Link href='/gallery'>Gallery</Link>
                            <Link href='/create'>Create</Link>
                            <Link href='/settings'>Settings</Link>
                            </>
                        )}
                <div>
                    {session?.user ? <UserAccountNav user={session.user}/> : <Sign/>}
                </div> 
                <Themetoggle className='border border-gray-900 rounded-md shadow-md focus:outline-none'/>
            </div>
        </div>
    </nav>
  )
}

export default Navbar