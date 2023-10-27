import TypewriterTitle from '@/components/ui/TypewriterTitle';
import TypewriterTitle2 from '@/components/ui/TypewriterTitle2';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger }  from '@/components/ui/dropdown-menu';
import { getAuthSession } from '@/lib/auth';
import { User } from 'next-auth'
import { ArrowRight, StickyNote } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react'
import Tools from '@/components/Tools';
import TypewriterTitle3 from '@/components/ui/TypewriterTitle3';
import Sign2 from '@/components/Sign2';
import TypewriterTitle4 from '@/components/ui/TypewriterTitle4';

const Homepage = async() => {
  return (
    <div className='antialiased min-h-screen bg-gradient-to-r from-rose-100 to-teal-100 flex items-center justify-center pb-24'>
        <div className='flex justify-center items-center flex-col gap-4'>
          <h1 className='font-semibold text-7xl text-center'>Khyal Workstation</h1>
          <div className='flex items-center flex-col gap-4 font-semibold text-3xl text-center text-slate-700 '>
            <TypewriterTitle4/>
            <h2>With the Insight of AI.</h2>
          </div> 
          <div className='mt-2'>
            <Sign2/>
          </div>
        </div>
    </div>
  )
}

export default Homepage

