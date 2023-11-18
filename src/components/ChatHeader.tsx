import React from 'react'

type Props = {}

const ChatHeader = (props: Props) => {
  return (
      <div className='w-full flex gap-3 justify-start items-center'> 
        <div className='flex flex-col items-start text-sm'>
          <p className='text-xs text-gray-500 font-normal'>Chat with</p>
          <div className='flex gap-2 items-center'>
            <p className='font-medium'>Context : A vector memory bot</p>
            <p className='w-2 h-2 rounded-full bg-teal-500'></p>
          </div>
        </div>
      </div>
  )
}

export default ChatHeader