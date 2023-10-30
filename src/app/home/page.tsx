import TypewriterTitle from '@/components/ui/TypewriterTitle';
import TypewriterTitle2 from '@/components/ui/TypewriterTitle2';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger }  from '@/components/ui/dropdown-menu';
import { getAuthSession } from '@/lib/auth';
import { User } from 'next-auth'
import { ArrowRight, BookText, BookmarkCheck, CalendarCheck, Pencil, StickyNote } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { use } from 'react'
import Tools from '@/components/Tools';
import TypewriterTitle3 from '@/components/ui/TypewriterTitle3';
import Calender from '@/components/Calender';

const Home = async({}) => {
  const session = await getAuthSession();
  if(!session?.user){
    return redirect("/");
  }
  else{
    return (
      <div className='flex items-start justify-start antialiased min-h-screen bg-gradient-to-br from-blue-300 via-purple-300 to-pink-300 dark:bg-gradient-to-r dark:from-indigo-600 dark:via-purple-600 dark:to-pink-600'>
        <div className='p-4 mt-2 w-full h-full flex flex-col-reverse xl:flex-row gap-4 justify-center items-center'>
          <div className="flex max-w-xl justify-center items-center flex-col gap-4">
            <div className="text-black flex justify-center items-center h-[275px] text-center rounded-md border-2 text-4xl md:text-4xl font-semibold p-4 bg-gradient-to-r grainy from-rose-100 to-teal-100">
              <div className='gap-2'>
              Personalized <span className="text-green-600">AI Course</span> assistant
              <h2 className="font-semibold mt-2 text-xl md:text-2xl text-center text-slate-700">
                <TypewriterTitle2 />
              </h2>
              <Link href="/create">
                <Button className='text-white mt-3 hover:bg-gradient-to-br hover:from-green-500 hover:to-emerald-600 text-base px-4 py-6 bg-gradient-to-br from-green-400 to-emerald-500'>
                  Get Started <BookText className='w-5 h-5 ml-2'/>
                </Button>
              </Link>
              </div>
            </div>
            <div className="text-black flex justify-center items-center h-[275px] text-center rounded-md border-2 text-4xl md:text-4xl font-semibold p-4 bg-gradient-to-r grainy from-green-100 to-blue-100">
              <div className=''>
              Adaptive <span className="text-rose-600">Smart NoteBook</span> assistant
              <h2 className="font-semibold mt-2 text-xl md:text-2xl text-center text-slate-700">
                <TypewriterTitle/>
              </h2>
              <Link href="/dashboard">
              <Button className='text-white mt-3 hover:bg-gradient-to-br hover:from-rose-500 hover:to-yellow-600 text-base px-4 py-6 bg-gradient-to-br from-rose-400 to-yellow-500'>
                  Get Started <Pencil className='w-5 h-5 ml-2'/>
                </Button>
              </Link>
              </div>
            </div>
            <div className="text-black flex justify-center items-center h-[260px] text-center rounded-md border-2 text-4xl md:text-4xl font-semibold p-4 bg-gradient-to-r grainy from-green-100 to-blue-100">
              <div className=''>
              General <span className="text-blue-500">Health</span> Resources
              <h2 className="font-semibold mt-2 text-xl md:text-2xl text-center text-slate-700">
                <TypewriterTitle3/>
              </h2>
              <Link href="/health">
              <Button className='text-white mt-3 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-pink-600 text-base px-4 py-6 bg-gradient-to-br from-cyan-400 to-pink-500'>
                  Get Started <Pencil className='w-5 h-5 ml-2'/>
                </Button>
              </Link>
              </div>
            </div>
          </div>
          <div className='w-full h-full bg-secondary rounded-lg'>
            <Calender/>
          </div>
        </div>     
      </div>
    )
  }
}

export default Home

