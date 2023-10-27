import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db2";
import { $notes } from "@/lib/db2/schema";
import { generateImage, generateImagePrompt } from "@/lib/openai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    
    const userId = await getAuthSession();
    if (!userId) {
        return new NextResponse("unauthorised", { status: 401 });
    }
    const body = await req.json();
    const { name } = body;
    
    const userIdFromSession = userId.user.id; 
    // Access the user ID from the session
    const image_description = await generateImagePrompt(name);
    if (!image_description) {
        return new NextResponse("failed to generate image description", {
            status: 500,
        });
    }
    const image_url = await generateImage(image_description);
    if (!image_url) {
        return new NextResponse("failed to generate image ", {
            status: 500,
        });
    }

    console.log({image_description, image_url}, userIdFromSession)
    
    const note_ids = await db
        .insert($notes)
        .values({
            name: name as string,
            userId: userIdFromSession as string, // Use the extracted user ID
            imageUrl: image_url as string,
        })
        .returning({
            insertedId: $notes.id,
        });
    
    return NextResponse.json({
        note_id: note_ids[0].insertedId,
    });
    

}