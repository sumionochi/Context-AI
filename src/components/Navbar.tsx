import React from 'react'
import Link from 'next/link'
import Sign from './Sign'
import { getAuthSession } from '@/lib/auth'
import UserAccountNav from './UserAccountNav'
import { Themetoggle } from './ui/Themetoggle'
import { Flower, Flower2, FlowerIcon, Leaf, LeafIcon, LeafyGreenIcon, LucideFastForward, Palmtree } from 'lucide-react'
import { Button } from './ui/button'

type Props = {}

const Navbar = async (props: Props) => {
    const session = await getAuthSession();
    console.log(session);
  return (
    <header className='sticky top-0 z-50 backdrop-blur-sm mx-auto'>
      <nav className='flex justify-between max-w-7xl gap-3 flex-col sm:flex-row items-center p-5 bg-none mx-auto'>
        <Link href={'/'} className=''>
                    <Button className='bg-transparent flex justify-end items-end gap-2 p-0 hover:bg-transparent'>
                        <p className='font-extrabold text-end text-transparent text-3xl bg-clip-text bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-rose-900 via-amber-800 to-rose-400 dark:bg-gradient-to-r dark:from-violet-300 dark:to-violet-400'>Context</p> 
                        <span className='pb-0.5 text-white'>by Khyal AI</span>
                    </Button>
        </Link>
        <div className='flex flex-row justify-center items-center gap-4'>
        <div className='flex items-center gap-5'>
                    {session?.user && (
                                <>
                                <Link href='/settings'>Settings</Link>
                                <Link href='/home'>Home</Link>
                                </>
                            )}
                    <div>
                        {session?.user ? <UserAccountNav user={session.user}/> : <Sign/>}
                    </div> 
                    <Themetoggle className='rounded-sm shadow-md outline-none focus:outline-none'/>
        </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
