import Image from "next/image";
import PageHeader from "@/components/ui/page-header";
export default function Transcripts() {
  return (
    <>
      <PageHeader title="Transcripts" />
      <div className='bg-cyan-300 w-fit  rounded-md shadow-xl p-4'>
        <div className="flex flex-col gap-2 rounded-md p-4 bg-[url('/paper.jpeg')] bg-cover">
          <Image 
            src="/certs/transcript.png" 
            alt="Transcript" 
            width={800} 
            height={600} 
            className="rounded-md p-4 opacity-75"
          />
        </div>
      </div>
    </>
  );
};