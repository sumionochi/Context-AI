// Import necessary dependencies
"use client";
import React from 'react';
import { Button } from './ui/button';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation'; 
import { ArrowRight } from 'lucide-react';

type Props = {};

const Sign2 = (props: Props) => {
  const router = useRouter(); 
  const handleSignIn = async () => {
    const result = await signIn('google');
    if (result?.error) {
      console.error('Sign-in error:', result.error);
    } else {
      router.push('/home');
    }
  };

  return (
    <Button className='rounded-3xl bg-black hover:bg-black h-10 flex flex-row justify-center items-center text-sm text-white outline outline-2 outline-white/30' onClick={handleSignIn}> 
      Let's Start <ArrowRight className='w-6 h-6 ml-2'/>
    </Button>
  );
};

export default Sign2;
