import { getAuthSession } from '@/lib/auth';
import { redirect } from 'next/navigation';
import React from 'react'
import { prisma } from "../../../lib/db";
import { Info } from 'lucide-react';
import ConfirmChapters from '@/components/ConfirmChapters';

type Props = {
    params:{
        courseId: string;
    };
};

const CreateChapters = async ({params:{courseId}}: Props) => {
    const session = await getAuthSession();
    if(!session?.user){
        return redirect('/gallery');
    }
    const course = await prisma.course.findUnique({
        where: {
            id: courseId
        },//joins in prisma
        include:{
            units:{
                include:{
                    chapters: true
                }
            }
        }
    })
    if(!course){
        return (
            <div>{courseId}</div>
        );
    }
    return(
        <div className='flex flex-col justify-items-center items-center p-4'>
            <div className='flex flex-col items-start max-w-xl mx-auto my-20'>
                <h5 className='text-sm uppercase text-secondary-foreground/60 mb-1'>
                    Course Name
                </h5>
                <h1 className='text-5xl font-bold mb-2'>
                    {course.name}
                </h1>
                <div className='flex rounded-md flex-row p-4 mt-5 border-none bg-secondary'>
                    <Info className='w-12 h-12 mr-3 text-blue-400'/>
                    <div>
                        <p>Here's a list of generated unit titles. Click 'Generate' to create this course powered by AI. If any of the generated courses are marked in red, you can reload the page to generate again until you see green, or 'Save & continue' without that unit.</p>
                    </div>
                </div> 
                <ConfirmChapters course={course}/>
            </div>
            
        </div>
    )
}

export default CreateChapters