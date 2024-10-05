import Image from "next/image";
export default function ContentContainerImageRight({text, imagePath}:{text:string, imagePath:string}) {
  return (
    <div className='bg-cyan-300 w-full md:w-5/6  rounded-md shadow-xl p-4'>
    <div className="flex flex-col md:flex-row gap-2 rounded-md p-4 bg-[url('/paper.jpeg')] bg-cover">      
      <p className="flex flex-col indent-4  text-lg md:text-xl text-center  justify-center items-center">
        {text}
      </p>
      <Image src={imagePath} alt="Content Image" width={200} height={200} className="rounded-md" />
    </div>
  </div>

  );
};