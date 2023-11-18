import CreateNotes from '@/components/CreateNotes'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { db } from "@/lib/db2";
import { $notes } from "@/lib/db2/schema";
import { UserButton, auth } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getAuthSession } from '@/lib/auth';
import { redirect } from 'next/navigation';

type Props = {}

const Dashboard = async (props: Props) => {
  const session = await getAuthSession();
  if(!session) return redirect('/')
  const notes = await db
    .select()
    .from($notes)
    .where(eq($notes.userId, session?.user.id!));
  return (
    <>
      <div className='antialiased bg-transparent min-h-screen flex pb-24'>
        <div className="max-w-7xl mx-auto p-10">
            <div className="flex items-center p-4 mt-4 gap-4 mb-4">
            <h1 className="text-6xl font-bold mx-auto text-white">Workspace</h1>
            </div>
            {/* list all the notes */}
            {/* if no notes, display this */}
            {notes.length === 0 && (
              <div className="text-center mt-8">
                <h2 className='rounded-3xl h-10 flex bg-black hover:bg-black hover:text-white flex-row justify-center items-center text-sm text-white outline outline-2 outline-white/30'>You have no notes yet.</h2>
              </div>
            )}

            {/*display new notes*/}
            <div className="grid mt-10 xl:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-6">
            <CreateNotes />
            {notes.map((note) => {
              return (
                <a href={`/notebook/${note.id}`} key={note.id}>
                  <div className="border border-stone-300 rounded-lg overflow-hidden flex flex-col hover:shadow-xl transition hover:-translate-y-1">
                    <Image
                      width={400}
                      height={200}
                      alt={note.name}
                      src={note.imageUrl || ""
                    }
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {note.name}
                      </h3>
                      <div className="h-1"></div>
                      <p className="text-sm text-gray-500">
                        {new Date(note.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard