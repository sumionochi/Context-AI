import { Button } from '@/components/ui/button';
import { Copy, CopyCheck } from 'lucide-react';
import { useState } from 'react';

type Props = {
    text: string | null; // Add the type annotation for the 'text' prop
};

export default function CopyToClipboardButton({ text }: Props) {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    if(text === null) {
        text = "null";
    }
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
    } catch (error) {
      console.error('Failed to copy text: ', error);
    }
  };

  return (
    <div>
      <Button className='w-auto h-auto p-1' variant='secondary' onClick={copyToClipboard}>
        {!isCopied ? <Copy/> : <CopyCheck/>}
      </Button>
    </div>
  );
}
