import CourseLeft from '@/components/CourseLeft';
import Quiz from '@/components/Quiz';
import VideoSummary from '@/components/VideoSummary';
import { prisma } from "@/lib/db";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
    params: {
        info: string[]
    }
};

const CoursePage = async ({params: {info}}: Props) => {
    const[courseId, unitIndexParam, chapterIndexParam] = info;
    const course = await prisma.course.findUnique({
        where: {id:courseId},
        include:{
            units:{
                include:{chapters: {
                    include: {questions: true},
                }}
            }
        }
    })
    if(!course){
        return redirect('/gallery')
    }
    let unitIndex = parseInt(unitIndexParam)
    let chapterIndex = parseInt(chapterIndexParam)

    const unit = course.units[unitIndex]
    if(!unit){
        return redirect('/gallery')
    }
    const chapter = unit.chapters[chapterIndex];
    if(!chapter){
        return redirect('/gallery')
    }
    const nextchapter = unit.chapters[chapterIndex+1];
    const prevchapter = unit.chapters[chapterIndex-1];
  return (
   <>
        <div className='p-4 pt-8 flex flex-col space-y-3 gap-2 sm:flex-row sm:space-x-3 sm:space-y-0'>
            <CourseLeft course={course} currentChapterId={chapter.id} />
            <VideoSummary chapter={chapter} unit={unit} unitIndex={unitIndex} chapterIndex={chapterIndex} />
            <Quiz chapter={chapter} />
        </div>

        <div className='flex-[1] h-[1px] mt-4 text-gray-500 bg-gray-800 px-8'>
        
        </div>
        <div className='flex w-[100%] text-gray-500 bg-gray-80 p-4 items-start justify-start'>
            {prevchapter && (
                <Link href={`/course/${course.id}/${unitIndex}/${chapterIndex - 1}`} className='flex mt-4 mr-auto w-fit'>
                    <div className='flex items-center'>
                        <ChevronRight className='w-6 h-6 mr-1'/>
                        <div className='flex flex-col items-start'>
                            <span className='text-sm text-secondary-foreground/60'>
                                Previous
                            </span>
                            <span className='text-xl font-bold'>
                                {prevchapter.name}
                            </span>
                        </div>
                    </div>
                </Link>
            )}
            {nextchapter && (
                <Link href={`/course/${course.id}/${unitIndex}/${chapterIndex + 1}`} className='flex mt-4 ml-auto w-fit'>
                    <div className='flex items-center'>
                    <ChevronRight className='w-6 h-6 mr-1'/>
                        <div className='flex flex-col items-start'>
                            <span className='text-sm text-secondary-foreground/60'>
                                Next
                            </span>
                            <span className='text-xl font-bold'>
                                {nextchapter.name}
                            </span>
                        </div>
                        
                    </div>
                </Link>
            )}
        </div>
   </>
  )
};

export default CoursePage