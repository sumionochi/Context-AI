'use client';
import { cn } from '@/lib/utils';
import { Chapter } from '@prisma/client'
import { useMutation } from '@tanstack/react-query';
import React from 'react'
import axios from 'axios';
import { toast, useToast } from './ui/use-toast';
import { Loader2 } from 'lucide-react';

type Props = {
    chapter: Chapter;
    chapterIndex: number;
    compChapters: Set<String>;
    setcompChapters: React.Dispatch<React.SetStateAction<Set<String>>>;
};

export type ChapterCardHandler = {
    triggerLoad: () => void;
}

const ChapterCards = React.forwardRef<ChapterCardHandler, Props>(({chapter, chapterIndex, compChapters, setcompChapters}, ref) => {
    const {toast} = useToast();
    const [success, setSuccess] = React.useState<boolean|null>(null);
    const {mutate: getChapterInfo, isPending} = useMutation({
        mutationFn: async () => {
            const response = await axios.post('/api/chapter/getinfo', {chapterId: chapter.id});
            return response.data;
        }
    })

    const addChapterIdToSet = React.useCallback(()=>{
        setcompChapters((prev)=>{
            const newSet = new Set(prev)
            newSet.add(chapter.id)
            return newSet;
        })
    },[chapter.id, setcompChapters])

    React.useEffect(()=>{
        if(chapter.videoId){
            setSuccess(true)
            addChapterIdToSet;
        }
    }, [chapter, addChapterIdToSet])

    React.useImperativeHandle(ref, ()=>({
        async triggerLoad(){

            if(chapter.videoId){
                addChapterIdToSet();
                return
            }

            console.log('endpoint triggered');
            getChapterInfo(undefined, {
                onSuccess: ()=> {
                    setSuccess(true)
                    toast({
                        title:"Success",
                        description: `${chapter.name} is ready.`,
                        variant: "default"
                    })
                },
                onError:(error) => {
                    console.log(error);
                    setSuccess(false)
                    toast({
                        title:"Error",
                        description: `There was an Error loading ${chapter.name} chapter.`,
                        variant: "destructive"
                    });
                    addChapterIdToSet();
                }
            })
        }, 
    }))
    return (
    <div key={chapter.id} className={cn('px-4 py-2 mt-2 rounded flex justify-between',{
        "bg-secondary": success === null,
        "bg-red-500": success === false,
        "bg-green-500": success === true,
    })}>
        <h5>
           Chapter {chapterIndex+1}: {chapter.name} 
        </h5>
        {isPending && <Loader2 className="animate-spin"/>}
    </div>
  )
});

ChapterCards.displayName = "ChapterCard";

export default ChapterCards