'use client'
import { chapterSchema } from '@/validators/course'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Form } from './ui/form'
import {z} from 'zod'
import { FormControl, FormField, FormItem, FormLabel } from './ui/form'
import { Input } from './ui/input'
import { Separator } from '@radix-ui/react-dropdown-menu'
import { Button } from './ui/button'
import { Loader2, Plus, Trash } from 'lucide-react'
import {motion, AnimatePresence} from 'framer-motion'
import { useMutation } from '@tanstack/react-query'
import axios from "axios";
import { useToast } from './ui/use-toast'
import { useRouter } from 'next/navigation'
import Error from 'next/error'
import Subscribe from './Subscribe'
import SubscriptionAction from './SubscriptionAction'

type Props = {isPro : boolean}

type Input = z.infer<typeof chapterSchema>

const ClientForm = ({isPro}: Props) => {
    const router = useRouter();
    const {toast} = useToast()
    const { mutate: createChapters, isPending} = useMutation({
      mutationFn: async ({ title, units }: Input) => {
        const response = await axios.post('/api/course/createChapters', {
            title,
            units,
        });
        return response.data;
      },
    });
    const form = useForm<Input>({
        resolver: zodResolver(chapterSchema),
        defaultValues: {
            title: '',
            units: ['','','']
        },
    });

    function onSubmit(data:Input){
        console.log('data.units:', data.units); 
        if(data.units.some((unit)=>unit === "")){
            toast({
                title:"Error",
                description: "Please fill all the units",
                variant: "destructive"
            });
            return;
        }
        createChapters(data, {
            onSuccess: ({course_id})=>{
                toast({
                    title:"Success",
                    description: "Course created successfully",
                })
                router.push(`/create/${course_id}`)
            },
            onError: ()=> {
                console.log(Error);
                toast({
                    title:"Error",
                    description: "Something went Wrong",
                    variant: "destructive"
                });
            }
        })
    }

    console.log(form.watch())

    return (
    <div className='w-full'>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='w-full mt-4'>
                
                <FormField control={form.control} name='title' render={({field})=>{
                    return(
                    <FormItem className='flex flex-col items-start w-full sm:items-center sm:flex-row mb-2'>
                        <FormLabel className='flex-[1] text-xl'>
                            Title
                        </FormLabel>
                        <FormControl className='flex-[6]'>
                            <Input placeholder='Enter the Main topic of the course' {...field}/>
                        </FormControl>
                    </FormItem>
                    )
                }}/>

                <AnimatePresence>
                {form.watch('units').map((_, index) => {
                    return (
                        <motion.div 
                        key={index}
                        initial={{opacity:0, height:0}}
                        animate={{opacity:1, height:"auto"}}
                        exit={{opacity:0, height:0}}
                        transition={{
                            opacity: {duration:0.2},
                            height: {duration:0.2}
                        }}
                    >
                        <FormField
                        key={index}
                            control={form.control}
                            name={`units.${index}`}
                            render={({field})=>{
                                return (
                                    <FormItem className='flex flex-col items-start w-full sm:flex-row sm:items-center mb-2'>
                                        <FormLabel className='flex-[1] text-xl'>
                                            Unit {index+1}
                                        </FormLabel>
                                        <FormControl className='flex-[6]'>
                                            <Input
                                                placeholder='Enter the Sub topic for the course'
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )
                            }}
                        />
                    </motion.div>
                    )
                })}
                </AnimatePresence>

                <div className='flex items-center justify-center flex-col mt-6'>
                    <Separator className='flex-[1]'/>
                    <div className='mx-0'>
                        <Button onClick={()=>{
                            form.setValue('units', [...form.watch("units"), ""])
                        }} type='button' variant='secondary' className='font-semibold m-2'>
                            Add Unit
                            <Plus className='w-4 h-4 ml-2 text-green-500'/>
                        </Button>
                        <Button onClick={()=>{
                            form.setValue('units', [...form.watch("units").slice(0,-1)])
                        }} type='button' variant='secondary' className='font-semibold m-2'>
                            Remove Unit
                            <Trash className='w-4 h-4 ml-2 text-red-500'/>
                        </Button>
                    </div>
                    <Separator className='flex-[1]'/>
                    <Button disabled={isPending} type='submit' className='w-full mt-3 mb-1 flex justify-center items-center' size='lg'>
                        {isPending ? <Loader2 className="animate-spin text-white"/> : <p className='font-semibold text-xl'>Let's Go</p>}
                    </Button>
                    
                </div>

            </form>
        </Form>
        {!isPro && <SubscriptionAction/>}
    </div>
  )
}

export default ClientForm