import {z} from 'zod';

export const chapterSchema = z.object({
    title: z.string().min(3).max(100),
    units: z.array(z.string()),
})