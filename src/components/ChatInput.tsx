"use client";
import { cn } from '@/lib/utils'
import { Message } from '@/validators/message';
import { useMutation } from '@tanstack/react-query';
import { nanoid } from 'nanoid';
import React, {FC, HTMLAttributes, useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'

type Props = {}

interface ChatInpProps extends HTMLAttributes<HTMLDivElement> {}

const ChatInput : FC<ChatInpProps> = ({className, ...props}) => {
  const [input, setInput] = useState<string>('')
  const {mutate: sendMessage, isPending} = useMutation({
    mutationFn: async (message: Message) => {
      const response = await fetch('/api/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({messages: 'hello'}),

      })
      return response.body
    },
    onSuccess: () => {
      console.log("success");
    }
  })
  return (
    <div {...props} className={cn('border-t', className)}>
      <div className='relative mt-4 flex-1 overflow-hidden rounded-lg border-none outline-none'>
        <TextareaAutosize value={input} onKeyDown={e=>{if(e.key === 'Enter' && !e.shiftKey){e.preventDefault(); const message = {id: nanoid(), isUserMessage: true, text:input}; sendMessage(message)}}} onChange={e => setInput(e.target.value)} rows={2} maxRows={4} autoFocus placeholder='Why do stars twinkle...' className='peer disabled:opacity-50 pr-14 resize-none block w-full border-0 py-1.5 text-gray-900 focus:ring-0 text-sm sm:leading-6'/>
       </div>
    </div>
  )
}

export default ChatInput