"use client";
import { Chapter, Course, Unit } from '@prisma/client'
import React, { RefObject } from 'react'
import ChapterCards, { ChapterCardHandler } from './ChapterCards';
import { Separator } from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
import { Button, buttonVariants } from './ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Props = {
    course: Course & {
        units: (Unit & {
            chapters: Chapter[];
        })[];
    };
};

const ConfirmChapters = ({course}: Props) => {
    const [loading, setLoading] = React.useState(false);
    const chapterRefs: Record<string, React.RefObject<ChapterCardHandler>> = {};
    course.units.forEach(unit => {
        unit.chapters.forEach(chapter => {
            //eslint-disabled-next-line react-hooks/rules-of-hook
            chapterRefs[chapter.id] = React.useRef(null)
        })
    })
    
    const [compChapters, setcompChapters] = React.useState<Set<String>>(new Set());
    const totalChapterCount = React.useMemo(()=>{
        return course.units.reduce((acc, unit)=> {
            return acc + unit.chapters.length;
        },0);
    }, [course.units]);
    return (
    <div className='w-full mt-4'>
        {course.units.map((unit, unitIndex)=>{
            return(
                <div key={unit.id} className='mt-5'>
                    <h2 className='text-sm uppercase text-secondary-foreground/60'>
                        Unit {unitIndex + 1}
                    </h2>
                    <h3 className='text-2xl font-bold'>
                       Unit {unitIndex+1}: {unit.name}
                    </h3>
                    <div className='mt-3'>
                        {unit.chapters.map((chapter, chapterIndex)=>{
                            return(
                                <ChapterCards 
                                compChapters={compChapters}
                                setcompChapters = {setcompChapters}
                                ref={chapterRefs[chapter.id]}
                                key={chapter.id}
                                chapter={chapter}
                                chapterIndex={chapterIndex}
                                />
                            )
                        })}
                    </div>
                </div>
            )
        })}
        <div className='flex items-center justify-center mt-4'>
            <Separator className='flex-[1]'/>
            <div className='flex items-center mx-4'>
                <Link href="/create" className={buttonVariants({variant: "secondary"})}>
                    <ChevronLeft className='w-4 h-4 mr-2' strokeWidth={4}/>
                    Back
                </Link>
                {
                    totalChapterCount === compChapters.size ? (
                        <Link className={buttonVariants({ className: "ml-4 font-semibold" })} href={`/course/${course.id}/0/0`}>
                          Save & Continue
                          <ChevronRight className="w-4 h-4 ml-2" strokeWidth={4} />
                        </Link>
                      ) : (
                        <Button type='button' disabled={loading} className='ml-4 font-semibold' 
                    onClick={()=>{
                       setLoading(true) 
                        Object.values(chapterRefs).forEach((ref)=>{
                            ref.current?.triggerLoad();
                        });
                    }}
                >
                    Generate
                    <ChevronRight className='w-4 h-4 ml-2' strokeWidth={4}/>
                </Button>
                    )
                }
                
            </div>
            <Separator className='flex-[1]'/>
        </div>
    </div>
  )
}

export default ConfirmChapters