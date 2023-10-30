import { getAuthSession } from '@/lib/auth'
import React from 'react'
import { redirect } from 'next/navigation';
import { InfoIcon } from 'lucide-react';
import ClientForm from '@/components/Client';
import { subCheck } from '@/lib/subscriptions';

type Props = {}

const page = async (props: Props) => {
  const session = await getAuthSession();
  if(!session?.user){
    return redirect("/gallery");
  }
  const isPro = await subCheck();
  return (
    <div className='flex flex-col items-start max-w-xl min-h-screen px-8 mx-auto mt-16 sm:px-0'>
      <h1 className='self-center text-3xl font-bold text-center sm:text-4xl'> 
        Generate Personalized Course
      </h1>
      <div className='rounded-md flex p-4 mt-5 border-none bg-secondary'>
        <InfoIcon className='w-12 h-12 text-blue-400 mr-3'/>
        <div>
          <p>Tell us your desired course title, provide a list of units you want to cover. Voilà! We'll craft a personalized course just for you.</p>
        </div>
      </div>
      <ClientForm isPro={isPro}/>
    </div>
  )
}

export default page