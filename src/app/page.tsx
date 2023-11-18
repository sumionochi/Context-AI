
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger }  from '@/components/ui/dropdown-menu';
import { getAuthSession } from '@/lib/auth';
import { User } from 'next-auth'
import { ArrowRight, ArrowUpRight, Book, Bot, BotIcon, Calendar, FolderSearch, Github, Linkedin, Mail, MousePointer2, Pen, Scroll, ScrollText, StickyNote, Text, Users, Wind, Zap } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, {useEffect} from 'react'
import Sign2 from '@/components/Sign2';
import { Separator } from '@/components/ui/separator';
import { prisma } from '@/lib/db';
import TitleSection from '@/components/Title';


const Homepage = async() => {
  async function countAccounts() {
    const count = await prisma.account.count();
    return count
  }
  return (
    <div className='relative'>
      <section className='flex p-4 flex-col gap-20 pb-24'>
        <section className='flex flex-col gap-4 pt-28 sm:pt-48'>
          <TitleSection pill="✨ Your Workspace, Perfected" title="Think, Plan and Create Exceptional Software: A Productivity Platform For Developers" subheading='Enhancing your development workflow with real-time Doc Management, AI assistance, Rich Workspace Environment and much more...'/>
        </section>
        <section className='mx-auto'>
          <Sign2/>
        </section>
        <section className='flex flex-col gap-10'>
          <section className='grid sm:mx-auto text-white max-w-7xl gap-4 place-items-start sm:place-items-center sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 grid-cols-1'>
              <Button className='rounded-3xl bg-black hover:bg-black flex flex-row justify-center items-center pb-2 text-sm text-white outline outline-2 outline-white/30 hover:outline-white/30'>
                  <Text className='mr-2 w-5'/>
                  AI Auto-completion
              </Button>
              <Button className='rounded-3xl bg-black hover:bg-black hover:outline-white/30 flex flex-row justify-center items-center pb-2 text-sm text-white outline outline-2 outline-white/30'>
                <Wind className='mr-2 w-5'/>
                Seemless Workflow
              </Button>
              <Button className='rounded-3xl bg-black hover:bg-black hover:outline-white/30 flex flex-row justify-center items-center pb-2 text-sm text-white outline outline-2 outline-white/30'>
                <FolderSearch className='mr-2 w-5'/>
                Secure and Dynamic Workspace
              </Button>
              <Button className='rounded-3xl bg-black hover:bg-black hover:outline-white/30 flex flex-row justify-center items-center pb-2 text-sm text-white outline outline-2 outline-white/30'>
                  <Pen className='mr-2 w-5'/>
                  AI Multi-Lingual Summarization
              </Button>
              <Button className='rounded-3xl bg-black hover:bg-black hover:outline-white/30 flex flex-row justify-center items-center pb-2 text-sm text-white outline outline-2 outline-white/30'>
                <ScrollText className='mr-2 w-5'/>
                Rich Text Editor
              </Button>
              <Button className='rounded-3xl bg-black hover:bg-black hover:outline-white/30 flex flex-row justify-center items-center pb-2 text-sm text-white outline outline-2 outline-white/30'>
                  <BotIcon className='mr-2 w-5'/>
                  Vector Chatbot with Memory
              </Button>
          </section>
        </section>   
        <section className='flex sm:text-center sm:items-center flex-col gap-4'>
            <h1 className='text-white text-lg max-w-4xl'>"Context has been a game-changer for us. Our productivity and quality have improved significantly, leading to better software."</h1>
            <div className='flex sm:flex-col items-center gap-4'>
            <img src="https://avatars.githubusercontent.com/u/89721628?v=4" className='w-14 h-14 rounded-full border-2 border-white' />
            <Link href={'https://www.linkedin.com/in/aaditya-srivastava-b4564821b/'}>
              <Button className='rounded-3xl bg-black hover:bg-black flex flex-row justify-center items-center pb-2 text-sm text-white outline outline-2 outline-white/30'>
                Aaditya Srivastava
              </Button>
            </Link>
            </div>
        </section>
      </section>
      <div className='flex px-4 pt-1 bg-white/20 text-white justify-between gap-4 flex-row items-center text-primary h-14 absolute bottom-0 w-full'>
        <h2 className='text-white'>© 2023 Context.AI</h2>
        <div className='flex flex-row gap-4 justify-center items-center'>
          <Link href={'https://github.com/sumionochi'}>
            <Github/>
          </Link>
          <Link href={'https://www.linkedin.com/in/aaditya-srivastava-b4564821b/'}>
            <Linkedin/>
          </Link>
          <Link href={'mailto:aaditya.srivastava.connect@gmail.com'}>
            <Mail/>
          </Link>
          <Link href={'https://sumionochi.github.io/Portfolio-landing-page/'}>
            <ArrowUpRight/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Homepage

