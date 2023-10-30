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
    <nav className='fixed inset-x-0 top-0 bg-secondary z-10 h-fit border-b border-zinc-300 py-3 px-5'>
        <div className='flex items-center justify-between mx-auto'>
            <Link href='/home' className="items-center sm:flex">
                <p className='font-bold text-xl border-4 px-2 py-1 hover:bg-gradient-to-r hover:from-teal-200 hover:to-blue-200 rounded-lg border-primary'>
                    Khyal.AI
                </p>
            </Link>
            
            <div className='flex items-center gap-5'>
                {session?.user && (
                            <>
                            <Link href='/settings'>Settings</Link>
                            </>
                        )}
                <div>
                    {session?.user ? <UserAccountNav user={session.user}/> : <Sign/>}
                </div> 
                <Themetoggle className='rounded-md shadow-md outline-none focus:outline-none'/>
            </div>
        </div>
    </nav>
  )
}

export default Navbar