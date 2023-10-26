"use client"
import { Chapter, Unit } from '@prisma/client'
import React from 'react'
import CopyToClipboardButton from '@/app/CopyToClipboardButton';

type Props = {
    chapter: Chapter
    unit: Unit
    unitIndex: number
    chapterIndex: number
}

const VideoSummary = ({unit, unitIndex, chapter, chapterIndex}: Props) => {
  return (
    <div className='flex-[2]'>
        <h4 className='text-sm uppercase text-secondary-foreground/60'>
            Unit {unitIndex + 1} &bull; Chapter {chapterIndex + 1}
        </h4>
        <h1 className='text-4xl font-bold'>
            {chapter.name}
        </h1>
        <div className='p-4 pt-1 bg-secondary rounded-md mt-4'>
            <iframe
                title='chapter video'
                className='w-full mt-4 aspect-video max-h-[24rem]'
                src={`https://www.youtube.com/embed/${chapter.videoId}`}
                allowFullScreen
            />
            
        </div>
        <div className='p-4 bg-secondary rounded-md mt-4 relative'>
                <div className='absolute top-0 right-0 m-4'>
                <CopyToClipboardButton text={chapter.summary} />
                </div>
                <h3 className='text-3xl font-semibold'>
                    Summary
                </h3>
                <p className='mt-2 text-secondary-foreground/60'>
                    {chapter.summary}
                </p>
        </div>
    </div>
  )
}

export default VideoSummary