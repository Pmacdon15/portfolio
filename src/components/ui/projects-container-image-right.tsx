import Image from "next/image";
import Link from "next/link";
export default function ProjectContainerRight({ title, text, imagePath, gitHubUrl, linkText, website}: { title:string, text: string, imagePath: string, gitHubUrl: string, linkText: string , website:string}) {
    return (
        <div className='bg-cyan-300 w-full md:w-5/6  rounded-md shadow-xl p-4'>
            <div className="flex flex-col md:flex-row gap-2 rounded-md p-4 bg-[url('/paper.jpeg')] bg-cover">
                <div className="flex flex-col gap-2 rounded-md p-4 justify-center">
                    <h1 className="text-2xl md:text-3xl text-center justify-center items-center">
                        {title}
                    </h1>
                    <p className="flex flex-col indent-4 text-lg md:text-xl text-center justify-center items-center">
                        {text}
                    </p>
                    <p className="flex flex-col indent-4 text-lg md:text-xl text-center justify-center items-center">
                        Check projects GitHub at: <Link
                            className='hover:scale-110 hover:text-blue-400 hover:underline transition-transform duration-200'
                            href={gitHubUrl}>{linkText}</Link>
                    </p>
                </div>
                <Image src={imagePath} alt="Content Image" width={220} height={220} className="rounded-md self-center md:self-start" />
            </div>
        </div>

    );
};