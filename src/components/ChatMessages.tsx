'use client'

import { MessagesContext } from '@/context/messages'
import { cn } from '@/lib/utils'
import { FC, HTMLAttributes, useContext } from 'react'
import MarkdownLite from './MarkdownLite'

interface ChatMessagesProps extends HTMLAttributes<HTMLDivElement> {}

const ChatMessages: FC<ChatMessagesProps> = ({ className, ...props }) => {
  const { messages } = useContext(MessagesContext)
  const inverseMessages = [...messages].reverse()
  return (
    <div
      {...props}
      className={cn(
        'flex flex-col-reverse gap-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch',
        className
      )}>
        
    <div className='flex-1 flex-grow' />
    <div className='flex-1 flex-grow' />
      {inverseMessages.length === 0 ? (
        <div>No messages to display</div>
      ) : (
        inverseMessages.map((message, index) => (
          <div key={index}>{message.text}</div>
        ))
      )}
    </div>
  )
}

export default ChatMessages