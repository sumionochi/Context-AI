// Import necessary dependencies
"use client";
import React from 'react';
import { Button } from './ui/button';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation'; 

type Props = {};

const Sign = (props: Props) => {
  const router = useRouter(); 

  const handleSignIn = async () => {
    const result = await signIn('google');

    if (result?.error) {
      console.error('Sign-in error:', result.error);
    } else {
      console.log("signin sucess")
      router.push('/home');
    }
  };

  return (
    <Button variant="ghost" onClick={handleSignIn} className='rounded-3xl h-10 flex bg-black hover:bg-black hover:text-white flex-row justify-center items-center text-sm text-white outline outline-2 outline-white/30'>
      Sign In
    </Button>
  );
};

export default Sign;
