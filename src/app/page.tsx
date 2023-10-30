import TypewriterTitle from '@/components/ui/TypewriterTitle';
import TypewriterTitle2 from '@/components/ui/TypewriterTitle2';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger }  from '@/components/ui/dropdown-menu';
import { getAuthSession } from '@/lib/auth';
import { User } from 'next-auth'
import { ArrowRight, Book, Bot, Calendar, ScrollText, StickyNote, Zap } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, {useEffect} from 'react'
import Tools from '@/components/Tools';
import TypewriterTitle3 from '@/components/ui/TypewriterTitle3';
import Sign2 from '@/components/Sign2';
import TypewriterTitle4 from '@/components/ui/TypewriterTitle4';
import { Separator } from '@/components/ui/separator';

const Homepage = async() => {
  return (
    <div className='antialiased min-h-screen gap-8 flex flex-col bg-gradient-to-r from-rose-100 to-teal-100'>
        <div className='flex justify-center text-black px-4 items-center max-w-5xl mx-auto'>
          <div className='flex gap-8 justify-center items-center pt-20 flex-col'>
          <h1 className='text-center font-bold text-3xl md:text-5xl xl:text-6xl'>
            The most advanced classroom has never been more inclusive until now...
          </h1>
          <h2 className='text-center text-xl'>
            Khyal.AI uses <span className='font-bold'>AI insights</span> to Redesign the whole aspect of classroom education.
          </h2>
          <Sign2/>
          </div>
        </div>
        <Separator className='bg-primary'/>
        <div className='grid mx-auto max-w-5xl gap-4 place-items-center px-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 grid-cols-1'>
          <Button className='p-6 border-white bg-gradient-to-r from-rose-500 to-blue-500 border text-white rounded-md'>
            <Book className='mr-2'/>
            AI Generated Courses
          </Button>
          <Button className='p-6 bg-gradient-to-r from-teal-500 to-black border text-white rounded-md border-white'>
            <ScrollText className='mr-2'/>
            Adaptive Quizzes
          </Button>
          <Button className='p-6 border-white bg-gradient-to-r from-rose-500 to-orange-500 border text-white rounded-md'>
            <Calendar className='mr-2'/>
            Time on Scheduler
          </Button>
          <Button className='p-6 border-white bg-gradient-to-r from-purple-500 to-yellow-500 border text-white rounded-md'>
            <ScrollText className='mr-2'/>
            Create Smart Notes
          </Button>
          <Button className='p-6 border-white bg-gradient-to-r from-fuchsia-500 to-teal-500 border text-white rounded-md'>
            <Bot className='mr-2'/>
            Anytime Tutor
          </Button>
          <Button className='p-6 border-dashed bg-gradient-to-r from-slate-500 to-gray-500 border border-white text-white rounded-md'>
            <Zap className='mr-2 text-y-500'/>
            More Coming Soon...
          </Button>
        </div>
        <div className='flex justify-center px-4 items-center'>
        <iframe
            src="https://www.youtube.com/embed/3swOoNJ0gTo?autoplay=1&loop=1&showinfo=0&controls=0&modestbranding=1&rel=0"
            title="YouTube Video"
            className="w-full h-full aspect-video rounded-3xl max-w-7xl"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className='flex bg-secondary gap-4 flex-col justify-start items-start text-black'>
          <Separator className=' bg-primary'/>
          <h2 className='pl-4 pb-3 text-primary'>© 2023 Khyal.AI</h2>
        </div>
    </div>
  )
}

export default Homepage

