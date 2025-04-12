'use client';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentSection, setCurrecntSetction] = useState("About Me");

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='bg-cyan-400 bg-opacity-50 w-5/6 md:w-fit rounded-md shadow-xl md:hover:scale-105 transition-transform duration-200 p-2 md:p-0'>
            <div className='flex items-center justify-start'>
                <button
                    className="md:hidden text-2xl hover:scale-110 transition-transform duration-200 my-1"
                    onClick={toggleMenu}
                >
                    <Image
                        src="/Hamburger_icon.png" alt="Hamburger Icon" width={30} height={30} />
                </button>
                <div className='w-full mr-8 text-center text-2xl font-bold md:hidden'>{currentSection}</div>
            </div>
            <div className={`flex-col md:flex md:flex-row p-1 text-xl ${isOpen ? 'flex bg-cyan-200 rounded-md' : 'hidden'} md:justify-start`}> {/* Align left on desktop */}
                <Section sectionName='About Me' isOpen={isOpen} toggleMenu={toggleMenu} currentSection={currentSection} setCurrentSection={setCurrecntSetction} />
                <Section sectionName='Projects' isOpen={isOpen} toggleMenu={toggleMenu} currentSection={currentSection} setCurrentSection={setCurrecntSetction} />
                <Section sectionName='Transcript' isOpen={isOpen} toggleMenu={toggleMenu} currentSection={currentSection} setCurrentSection={setCurrecntSetction} />
                <Section sectionName='Resume' isOpen={isOpen} toggleMenu={toggleMenu} currentSection={currentSection} setCurrentSection={setCurrecntSetction} />
                <Section sectionName='Certifications' isOpen={isOpen} toggleMenu={toggleMenu} currentSection={currentSection} setCurrentSection={setCurrecntSetction} />
            </div>
        </div>
    );
}

function Section({ sectionName, isOpen, toggleMenu, currentSection, setCurrentSection }: { sectionName: string, isOpen: boolean, toggleMenu: () => void, currentSection: string, setCurrentSection: (currentSection: string) => void }) {
    const isCurrent = sectionName === currentSection;
    return (
        <Link
            onClick={() => { if (isOpen) toggleMenu(); setCurrentSection(sectionName) }}
            href={`/${sectionName.toLocaleLowerCase().split(" ")[0] == 'about' ? '/' : sectionName.toLocaleLowerCase()}`}
            className={`border-cyan-300 transition duration-200 rounded-sm p-2 ${isCurrent ? 'bg-gradient-to-r from-cyan-500 to-blue-500 shadow-xl' : 'hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:shadow-xl'}`}
        >{sectionName}</Link>
    )
}