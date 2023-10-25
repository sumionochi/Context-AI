import TypewriterTitle from '@/components/ui/TypewriterTitle';
import TypewriterTitle2 from '@/components/ui/TypewriterTitle2';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger }  from '@/components/ui/dropdown-menu';
import { getAuthSession } from '@/lib/auth';
import { User } from 'next-auth'
import { ArrowRight, StickyNote } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { use } from 'react'
import Tools from '@/components/Tools';
import TypewriterTitle3 from '@/components/ui/TypewriterTitle3';

const Home = async({}) => {
  const session = await getAuthSession();
  if(!session?.user){
    return redirect("/display");
  }
  else{
    return (
      <div className='flex items-center justify-center antialiased min-h-screen bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400 dark:bg-gradient-to-r dark:from-indigo-600 dark:via-purple-600 dark:to-pink-600'>
        <div className='max-w-6xl p-2 flex flex-col gap-4'>
        <div className='flex justify-center items-center flex-col text-center'>
          <h1 className='text-5xl font-bold text-center mt-8 max-w-xl'>
          AI-powered world class Education at your own pace.
          </h1>
          <h2 className='max-w-xl text-center mt-6 text-lg '>Khyal: AI-generated personalized courses with smart noteBook, calender and kanban for productive learning</h2>
          <Link href={'/create'}>
          <Button className='text-white hover:bg-blue-800 hover:text-white mt-6 rounded-lg text-2xl px-6 py-6 bg-blue-600'>
            Let's Create For Free 
          </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:col-span-2 gap-4 p-4">
          <div className="text-black flex justify-center items-center h-[250px] text-center rounded-md border-2 text-2xl md:text-4xl font-semibold p-4 bg-gradient-to-r grainy from-rose-100 to-teal-100">
            <div className='pt-4'>
            Personalized <span className="text-green-600">AI Course</span> assistant
            <h2 className="font-semibold mt-4 text-xl md:text-2xl text-center text-slate-700">
              <TypewriterTitle2 />
            </h2>
            <Link href="/create">
              <Button className="m-4 bg-green-600 text-white hover:bg-green-800 hover:text-white">
                Get Started
              </Button>
            </Link>
            </div>
          </div>

          <div className="text-black flex justify-center items-center h-[250px] text-center rounded-md border-2 text-2xl md:text-4xl font-semibold p-4 bg-gradient-to-r grainy from-green-100 to-blue-100">
            <div className='pt-4'>
            Personalized <span className="text-rose-600">Smart NoteBook</span> assistant
            <h2 className="font-semibold mt-4 text-xl md:text-2xl text-center text-slate-700">
              <TypewriterTitle />
            </h2>
            <Link href="/dashboard">
              <Button className="m-4 bg-rose-600 hover:bg-rose-800 hover:text-white text-white">
                Get Started
              </Button>
            </Link>
            </div>
          </div>

          <div className="text-black flex justify-center items-center h-[250px] text-center rounded-md border-2 text-2xl md:text-4xl font-semibold p-4 bg-gradient-to-r grainy from-rose-100 to-teal-100">
            <div className='pt-4'>
            Productivity<span className="text-purple-600"> Tool</span> assistants
            <h2 className="font-semibold mt-4 text-xl md:text-2xl text-center text-slate-700">
              <TypewriterTitle3 />
            </h2>
            <Link href="/calender">
              <Button className="m-4 bg-purple-600 text-white hover:bg-purple-800 hover:text-white">
                Calender
              </Button>
            </Link>
            <Link href="/kanban">
              <Button className="m-4 bg-purple-600 text-white hover:bg-purple-800 hover:text-white">
                Scheduler
              </Button>
            </Link>
            </div>
          </div>

          <div className="text-white h-[250px] flex justify-center hover:bg-slate-800/90 items-center text-center rounded-md border-2 border-dashed bg-slate-800 text-2xl md:text-4xl font-semibold p-4 bg-gray ">
            More Assistants Coming Soon
          </div>
        </div>
        </div>     
      </div>
    )
  }
}

export default Home

