import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import ChatHeader from './ChatHeader'
import ChatInput from './ChatInput'
import { Separator } from './ui/separator'
import ChatMessages from './ChatMessages'
import { User } from 'next-auth'
import { getAuthSession } from '@/lib/auth'
type Props = {
  user: User | undefined;
}

const Chat = async({ user }: Props) => {
  const session = await getAuthSession();
  return (
    <div>
      {session?.user ? (
       <Accordion type='single' collapsible className='relative bg-white z-10 shadow-sm'>
       <AccordionItem value='item-1'>
         <div className='fixed w-80 left-8 bottom-8 bg-secondary border border-gray-200 rounded-md overflow-hidden'>
           <div className='w-full h-full flex flex-col'>
             <AccordionTrigger className='px-4 py-3'>
               <ChatHeader/>
             </AccordionTrigger>
             <AccordionContent>
               <div className='flex flex-col h-80 px-4 py-3'>
                 <ChatMessages className='flex-1'/>
                 <ChatInput className='px-0'/>
               </div>
             </AccordionContent>
           </div>
         </div>
       </AccordionItem>
      </Accordion>
      ) : (
        null
      )}
    </div>
  )
}

export default Chat