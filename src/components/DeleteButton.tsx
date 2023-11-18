"use client";
import React from "react";
import { Button } from "./ui/button";
import { Trash } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

type Props = {
  noteId: number;
};

const DeleteButton = ({ noteId }: Props) => {
  const router = useRouter();
  const deleteNote = useMutation({
    mutationFn: async () => {
      const response = await axios.post("/api/deleteNote", {
        noteId,
      });
      return response.data;
    },
  });
  return (
    <Button
      variant={"destructive"}
      size="sm"
      disabled={deleteNote.isPending}
      onClick={() => {
        const confirm = window.confirm(
          "Are you sure you want to delete this document?"
        );
        if (!confirm) return;
        deleteNote.mutate(undefined, {
          onSuccess: () => {
            router.push("/home");
          },
          onError: (err) => {
            console.error(err);
          },
        });
      }}
      className='rounded-md bg-black hover:bg-black flex flex-row justify-center items-center text-sm text-white outline outline-2 outline-white/30'
    >
      <Trash />
    </Button>
  );
};

export default DeleteButton;