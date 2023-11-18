"use client";
import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Loader2, Plus } from 'lucide-react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/navigation';

type Props = {}

const CreateNotes = (props: Props) => {
  const router = useRouter()  
  const [input, setInput] = React.useState("");  
  const uploadToFirebase = useMutation({
    mutationFn: async (noteId: string) => {
      const response = await axios.post("/api/upload", {
        noteId,
      });
      return response.data;
    },
  });
  const createNotebook = useMutation({
    mutationFn: async () => {
      const response = await axios.post("/api/createNoteBook", {
        name: input,
      });
      return response.data;
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input === "") {
      window.alert("Please enter a name for your notebook");
      return;
    }
    createNotebook.mutate(undefined, {
      onSuccess: ({ note_id }) => {
        console.log("created new note:", { note_id });
        router.push(`/notebook/${note_id}`);
        // hit another endpoint to uplod the temp dalle url to permanent firebase url
      },
      onError: (error) => {
        console.error(error);
        window.alert("Failed to create new notebook");
      },
    });
  };


  return (
    <Dialog>
        <DialogTrigger>
        <div className='rounded-3xl p-4 h-full flex flex-col bg-black/50 hover:bg-black/20 hover:text-white gap-4 justify-center items-center text-sm text-white outline outline-2 outline-white/30'>
          <Plus className="w-6 h-6 text-white mr-2" strokeWidth={3} />
          <h2 className="f">
            New Note Book
          </h2>
        </div>
        </DialogTrigger>
        <DialogContent>
        <DialogHeader>
          <DialogTitle>New Document</DialogTitle>
          <DialogDescription>
            Let's give a name to your Document in Workspace. 
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
        <Input
            value={input}
            onChange={e=>setInput(e.target.value)}
            placeholder="Name..."
          />
          <div className="h-4"></div>
          <div className="flex items-center gap-2">
            <Button type="reset" variant={"outline"} className='bg-black/10'>
              Cancel
            </Button>
            <Button
              type="submit"
              className='rounded-md bg-black hover:bg-black h-10 flex flex-row justify-center items-center text-sm text-white outline outline-2 outline-white/30'
              disabled={createNotebook.isPending}
            >
              {createNotebook.isPending && <Loader2 className='w-4 h-4 mr-2 animate-spin'/>}  
              Create
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default CreateNotes