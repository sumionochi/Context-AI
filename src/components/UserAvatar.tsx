import { Avatar, AvatarFallback } from './ui/avatar'
import { User } from 'next-auth'
import Image from 'next/image'
import React from 'react'

type Props = {
  user: User
}

const UserAvatar = ({ user }: Props) => {
  return (
    <Avatar className='flex items-center justify-center'>
      {user.image ? (
        <div className='flex p-2 items-center justify-center relative w-11 h-11 aspect-square rounded-full overflow-hidden'>
          <Image
              fill
              src={user.image}
              alt='User-Profile'
              referrerPolicy='no-referrer'
              sizes='100px'// Set the height based on your design requirements
              priority
            />
        </div>
      ) : (
        <AvatarFallback>
          <span className='sr-only'>{user?.name}</span>
        </AvatarFallback>
      )}
    </Avatar>
  )
}

export default UserAvatar
