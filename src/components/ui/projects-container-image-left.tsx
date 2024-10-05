import Image from "next/image";
import Link from "next/link";
export default function ProjectContainerLeft({ text, imagePath, url, linkText }: { text: string, imagePath: string, url: string, linkText: string }) {
    return (
        <div className='bg-cyan-300 w-full md:w-5/6  rounded-md shadow-xl p-4'>
            <div className="flex flex-col md:flex-row gap-2 rounded-md p-4 bg-[url('/paper.jpeg')] bg-cover">
                <Image src={imagePath} alt="Content Image" width={200} height={200} className="rounded-md self-center md:self-start" />
                <div className="flex flex-col gap-2 rounded-md p-4 justify-center">
                    <p className="flex flex-col indent-4 text-lg md:text-xl text-center justify-center items-center">
                        {text}
                    </p>
                    <p className="flex flex-col indent-4 text-lg md:text-xl text-center justify-center items-center">
                        Check projects GitHub at: <Link
                            className='hover:scale-110 hover:text-blue-400 hover:underline transition-transform duration-200'
                            href={url}>{linkText}</Link>
                    </p>
                </div>
            </div>
        </div>

    );
};