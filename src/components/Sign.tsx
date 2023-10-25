// Import necessary dependencies
"use client";
import React from 'react';
import { Button } from './ui/button';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation'; // Import the useRouter hook

type Props = {};

const Sign = (props: Props) => {
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
    <Button variant="ghost" onClick={handleSignIn} className="border-2 border-gray-500">
      Sign In
    </Button>
  );
};

export default Sign;
