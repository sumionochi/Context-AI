'use client'

import React from 'react'
import { Button } from './ui/button'
import { User } from 'next-auth'
import { signOut } from 'next-auth/react'
import { LogOut } from 'lucide-react'
import UserAvatar from './UserAvatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'

type Props = {
    user: User
};

const UserAccountNav = ({user}: Props) => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger>
                <UserAvatar user={user}/>
        </DropdownMenuTrigger>
            <DropdownMenuContent align='end' className='rounded-lg shadow-md p-2 bg-white border border-gray-300'>
                        <DropdownMenuItem>
                       {user?.name && (<p className=' font-medium text-black'>{user.name}</p>)}
                       </DropdownMenuItem>
                        <DropdownMenuItem>
                        {user?.email && (<p className='font-medium text-black'>{user.email}</p>)}
                        </DropdownMenuItem>
                <>
                    <DropdownMenuItem onSelect={()=>{
                    signOut();
                }} className=' text-red-600 cursor-pointer flex flex-row items-center px-2 focus:outline-none'>
                    Sign Out
                    <LogOut className='w-4 h-4 ml-2'/>
                    </DropdownMenuItem>
                </>
            </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserAccountNav