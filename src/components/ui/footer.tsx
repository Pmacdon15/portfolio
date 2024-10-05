import Link from 'next/link';
import Image from 'next/image';
export default function Footer() {
    return (
        <div className="flex flex-col md:flex-row mt-auto bg-cyan-400 bg-opacity-70 w-full  p-0 md:p-1 gap-2 md:gap-8  items-center md:items-start rounded-md shadow-xl">
            <div className='flex flex-col p-2 w-2/6 text-center items-center gap-1 md:gap-4'>
                <h1 className='text-xl text-center items-center'>Contact Info:</h1>
                <p>Email: <Link
                    href="mailto:pmacdonald15@gmail.com"
                    className='flex hover:underline hover:scale-110 hover:text-blue-500 '
                >pmacdonald15@gmail.com</Link></p>
                <p>Phone: 1-403-975-5053</p>
            </div>
            <div className='flex flex-col w-2/6 p-2 gap-1 md:gap-4 text-center items-center'>
                <h1 className='text-xl text-center'>Socials:</h1>
                <p><Link
                    href="https://www.linkedin.com/in/patrick-macdonald-231640285/"
                >
                    <Image src="/linkedin.png" alt="LinkedIn Logo" width={80} height={80} />
                </Link>
                </p>
                <p>
                    <Link href="https://github.com/Pmacdon15">
                        <Image src="/gHub.png" alt="GitHub Logo" width={70} height={80} />
                    </Link>
                </p>
            </div>
            <div className='flex flex-col p-2 text-center w-2/6 gap-1 md:gap-4'>
                <h1 className='text-xl text-center'>Location:</h1>
                <p>Calgary, Alberta, </p>
                <p>Canada</p>
            </div>
        </div>
    );
};