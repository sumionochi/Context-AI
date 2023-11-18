import DeleteButton from "@/components/DeleteButton";
import TipTapEditor from "@/components/TipTapEditor";
import { Button } from "@/components/ui/button";
import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db2";
import { $notes } from "@/lib/db2/schema";
import { auth } from "@clerk/nextjs";
import { and, eq } from "drizzle-orm";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  params: {
    noteId: string;
  };
};

const NotebookPage = async ({ params: { noteId } }: Props) => {
  const session = await getAuthSession();
  if (!session) {
    return redirect("/");
  }
  const notes = await db.select().from($notes).where(and(eq($notes.id, parseInt(noteId)), eq($notes.userId, session.user.id)));

  if (notes.length != 1) {
    return redirect("/home");
  }
  const note = notes[0];

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="border shadow-xl border-stone-200 rounded-lg p-4 flex items-center">
          <Link href="/home">
            <Button className='rounded-md bg-black hover:bg-black flex flex-row justify-center items-center text-sm text-white outline outline-2 outline-white/30' size="sm">
              Back
            </Button>
          </Link>
          <div className="w-3"></div>
          <span className="font-semibold">
            {session.user.name}
          </span>
          <span className="inline-block mx-1">/</span>
          <span className="text-primary font-semibold">{note.name}</span>
          <div className="ml-auto">
            <DeleteButton noteId={note.id} />
          </div>
        </div>

        <div className="h-4"></div>
        <div className="border-stone-200 bg-white/20 dark:bg-white/50 shadow-xl border rounded-lg px-4 sm:px-8 py-4 sm:py-8 w-full">
          <TipTapEditor note={note} />
        </div>
      </div>
    </div>
  );
};

export default NotebookPage;