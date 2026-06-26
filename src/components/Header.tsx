import { useState } from "react"

export default function Header() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
            <nav className="mx-auto max-w-6xl px-5 h-[72px] flex justify-between items-center">
                <a href="#" className="flex items-center gap-2 text-md tracking-wide font-semibold">
                    <span className="text-teal-700 font-mono tracking-tight">&lt;/&gt;</span>
                    <span>Shiva Hassanpour</span>
                </a>
                <div className="hidden md:flex items-center gap-4 justify-between ">
                    <a href="#about" className="text-sm tracking-wider text-ink-soft/65 font-medium hover:text-ink-soft transition-colors duration-300">About</a>
                    <a href="#skills" className="text-sm tracking-wider text-ink-soft/65 font-medium hover:text-ink-soft transition-colors duration-300">Skills</a>
                    <a href="#projects" className="text-sm tracking-wider text-ink-soft/65 font-medium hover:text-ink-soft transition-colors duration-300">Projects</a>
                    <a href="#contact" className="bg-ink text-bg-alt text-md rounded-md font-medium px-4 py-2 text-center md:w-auto md:w-auto hover:bg-accent duration-300">Contact</a>
                </div>
                <button 
                   className="md:hidden text-ink-soft"
                   onClick={() => setIsOpen(!isOpen)}
                   aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                   {isOpen ? '✕' : '☰'}
                </button>
            </nav>
            {isOpen && (
                <div className="flex flex-col gap-4 md:hidden px-6 py-6 border-t border-ink-soft/65">
                    <a href="#about" onClick={() => setIsOpen(false)} className="text-sm tracking-wider text-ink-soft/65 font-medium hover:text-ink-soft transition-colors duration-300">About</a>
                    <a href="#skills" onClick={() => setIsOpen(false)} className="text-sm tracking-wider text-ink-soft/65 font-medium hover:text-ink-soft transition-colors duration-300">Skills</a>
                    <a href="#projects" onClick={() => setIsOpen(false)} className="text-sm tracking-wider text-ink-soft/65 font-medium hover:text-ink-soft transition-colors duration-300">Projects</a>
                    <a href="#contact" onClick={() => setIsOpen(false)} className="bg-ink text-bg-alt text-base rounded-md font-medium px-4 py-2 text-center md:w-auto">Contact</a>
                </div>
            )}
        </header>
    )
}