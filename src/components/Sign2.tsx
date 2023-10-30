// Import necessary dependencies
"use client";
import React from 'react';
import { Button } from './ui/button';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation'; // Import the useRouter hook
import { ArrowRight } from 'lucide-react';

type Props = {};

const Sign2 = (props: Props) => {
  const router = useRouter(); // Initialize the useRouter hook

  const handleSignIn = async () => {
    // Use async/await for sign-in
    const result = await signIn('google');

    // Check if sign-in was successful
    if (result?.error) {
      console.error('Sign-in error:', result.error);
    } else {
      // Redirect to the '/home' page upon successful sign-in
      router.push('/home');
    }
  };

  return (
    <Button className='text-white font-semibold text-xl px-4 py-6 bg-gradient-to-r from-blue-400 to-teal-500' onClick={handleSignIn}> 
      Let's Start <ArrowRight className='w-6 h-6 ml-2'/>
    </Button>
  );
};

export default Sign2;
