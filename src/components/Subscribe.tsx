"use client"
import { useSession } from 'next-auth/react'
import React from 'react'
import { Progress } from './ui/progress'
import { Zap } from 'lucide-react'
import { Button } from './ui/button'
import axios from 'axios'

type Props = {}

const Subscribe = (props: Props) => {
    const {data} = useSession();
    const [loading, setLoading] = React.useState(false)
    const handleSub = async()=>{
        setLoading(true)
        try{
            const response = await axios.get('/api/stripe')
            window.location.href=response.data.url
        } catch (error) {
            console.log("error", error)
        } finally {
            setLoading(false)
        }
    }
    return (
    <div className='flex mt-6 flex-col items-center w-1/2 p-4 mx-auto rounded-md bg-secondary'>
        {data?.user.credits} / 10 Free Generations
        <Progress className='mt-2' value={data?.user.credits ? (data.user.credits / 10)*100 : 0}/>
        <Button onClick={handleSub} className='mt-3 font-bold text-white transition bg-gradient-to-tr from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-400'>
            <span className='pr-1'>Upgrade</span> 
            <Zap/>
        </Button>
    </div>
  )
}

export default Subscribe