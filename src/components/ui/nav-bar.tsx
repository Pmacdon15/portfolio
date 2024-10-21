'use client';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='bg-cyan-300 bg-opacity-70 w-5/6 md:w-fit rounded-md shadow-xl md:hover:scale-105 transition-transform duration-200 p-2'>
            <button
                className="md:hidden text-2xl hover:scale-110 transition-transform duration-200 mx-auto my-2"
                onClick={toggleMenu}
            >
                <Image 
                className=''
                src="/Hamburger_icon.png" alt="Hamburger Icon" width={30} height={30} />
            </button>
            <div className={`flex-col md:flex md:flex-row p-1 md:gap-8 text-xl ${isOpen ? 'flex bg-cyan-200 rounded-md' : 'hidden'}`}>
                <Link
                    onClick={toggleMenu}
                    href="/"
                    className='hover:scale-110  hover:underline transition-transform duration-200 '>About Me</Link>
                <Link
                    onClick={toggleMenu}
                    href="/projects"
                    className='hover:scale-110  hover:underline transition-transform duration-200'>Projects</Link>
                <Link
                    onClick={toggleMenu}
                    href="/transcript"
                    className='hover:scale-110 hover:underline transition-transform duration-200'>Transcript</Link>
                <Link
                    onClick={toggleMenu}
                    href="/resume"
                    className='hover:scale-110  hover:underline transition-transform duration-200'>Resume</Link>
                <Link
                    onClick={toggleMenu}
                    href="/certifications"
                    className='hover:scale-110 hover:underline transition-transform duration-200'>Certifications</Link>
            </div>
        </div>
    );
}
