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

type Props = {}

const Dashboard = async (props: Props) => {
  const session = await getAuthSession();
  const notes = await db
    .select()
    .from($notes)
    .where(eq($notes.userId, session?.user.id!));
  return (
    <>
      <div className='antialiased min-h-screen bg-gradient-to-r from-rose-100 to-teal-100 flex pb-24'>
        <div className="max-w-7xl mx-auto p-10">
            <div className="flex items-center p-4 mt-4 gap-4 mb-4">
              <Link href="/home">
                <Button className='font-semibold text-white text-base px-3 py-5 bg-gradient-to-r from-blue-400 to-teal-500' size="sm">
                  <ArrowLeft className="mr-1 w-4 h-4" />
                  Back
                </Button>
              </Link>
              <h1 className="text-3xl font-bold text-gray-900">My Notes</h1>

            </div>
            <Separator />
            {/* list all the notes */}
            {/* if no notes, display this */}
            {notes.length === 0 && (
              <div className="text-center mt-8">
                <h2 className="text-xl text-gray-500">You have no notes yet.</h2>
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