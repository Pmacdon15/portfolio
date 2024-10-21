'use client';
import Link from 'next/link';
import { useState} from 'react';
import Image from 'next/image';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
   
    return (
        <div className='bg-cyan-300  w-5/6 md:w-fit rounded-md shadow-xl md:hover:scale-105 transition-transform duration-200 p-1'>
            <button
                className="md:hidden text-2xl hover:scale-110 transition-transform duration-200 mx-auto my-2"
                onClick={toggleMenu}
            >
                <Image
                    src="/Hamburger_icon.png" alt="Hamburger Icon" width={30} height={30} />
            </button>
            <div className={`flex-col md:flex md:flex-row p-1  text-xl ${isOpen ? 'flex bg-cyan-200 rounded-md' : 'hidden'}`}>
                <Link
                    onClick={isOpen ? toggleMenu : undefined}
                    href="/"
                    className=' border-cyan-300  transition duration-200 rounded-sm p-2 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-xl'
                >About Me</Link>
                <Link
                    onClick={isOpen ? toggleMenu : undefined}
                    href="/projects"
                    className=' transition duration-200 rounded-sm p-2 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-xl'
                >Projects</Link>
                <Link
                    onClick={isOpen ? toggleMenu : undefined}
                    href="/transcript"
                    className='  transition duration-200 rounded-sm p-2 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-xl'
                >Transcript</Link>
                <Link
                    onClick={isOpen ? toggleMenu : undefined}
                    href="/resume"
                    className=' transition duration-200 rounded-sm p-2 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:border-blue-500 hover:shadow-xl'
                >Resume</Link>
                <Link
                    onClick={isOpen ? toggleMenu : undefined}
                    href="/certifications"
                    className='  transition duration-200 rounded-sm p-2 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:border-blue-500 hover:shadow-xl'
                >Certifications</Link>
            </div>
        </div>
    );
}