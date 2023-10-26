import { cn } from "@/lib/utils";
import { Chapter, Course, Unit } from "@prisma/client";
import Link from "next/link";
import React from "react";
import { Separator } from "./ui/separator";

type Props = {
    course: Course & {
        units: (Unit & {
            chapters: Chapter[];
        })[];
    }
    currentChapterId: string;
};

const CourseLeft = async ({course, currentChapterId}: Props) => {
  return (
    <div className='flex flex-col p-6 rounded-md bg-secondary max-w-xl h-max'>
        <h1 className='text-4xl font-bold mb-4'>
            {course.name}
        </h1>
        {course.units.map((unit, unitIndex)=>{
            return (
                <div key={unit.id} className='mt-0'>
                    <h2 className='text-sm uppercase text-secondary-foreground/60 mt-2'>
                        Unit {unitIndex + 1}
                    </h2>
                    <h2 className='text-2xl font-bold'>
                        {unit.name}
                    </h2>
                    {unit.chapters.map((chapter, chapterIndex) =>{
                        return (
                            <div key={chapter.id} className="my-1">
                                <Link className={cn("text-secondary-foreground/60", {"text-green-500 font-bold" : chapter.id === currentChapterId})} href={`/course/${course.id}/${unitIndex}/${chapterIndex}`}>
                                    {chapter.name}
                                </Link>
                            </div>
                        )
                        
                    })}
                    <Separator className="my-2 text-gray-500 bg-gray-500"/>
                </div>
            )
        })}
    </div>
  )
}

export default CourseLeft