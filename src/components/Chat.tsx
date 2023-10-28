import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import ChatHeader from './ChatHeader'
import ChatInput from './ChatInput'
import { Separator } from './ui/separator'

type Props = {}

const Chat = (props: Props) => {
  return (
    <Accordion type='single' collapsible className='relative bg-white z-10 shadow-sm'>
        <AccordionItem value='item-1'>
          <div className='fixed left-8 w-72 bottom-8 bg-secondary border border-gray-200 rounded-md overflow-hidden'>
            <div className='w-full h-full flex flex-col'>
              <AccordionTrigger className='px-4 py-3'>
                <ChatHeader/>
              </AccordionTrigger>
              <AccordionContent>
                <Separator/>
                <div className='flex flex-col h-80 px-4 py-3'>
                  message
                  <ChatInput className='px-4'/>
                </div>
              </AccordionContent>
            </div>
          </div>
        </AccordionItem>
    </Accordion>
  )
}

export default Chat