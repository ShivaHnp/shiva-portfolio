export default function Hero() {
    return (
        <section id="hero" className="bg-bg">
           <div className="grid md:grid-cols-2 gap-12 items-center px-3 md:px-5 py-3 md:py-20 max-w-6xl mx-auto">
                <div className=""> 
                    <p className="text-xs font-mono bg-accent-soft text-accent-deep px-3 py-1 rounded-full mb-5">// Frontend Developer . open to <br /> oppurtunities</p>
                    <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Hi, I'm {}
                        <span className="bg-pop-soft padding-1">Shiva</span> Hassanpour</h1>
                    <p className="text-ink-soft text-lg max-w-md mb-8">A junior frontend developer who loves building clean, reliable interfaces. Every project is a chance to learn something new and write better code.</p>
                    <div className="flex gap-2 md:gap-4 mb-10">
                        <a href="#projects" className="bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-accent-deep transition-colors duration-300">View Projects</a>
                        <a href="#contact" className="border border-line px-6 py-3 rounded-lg font-medium hover:border-ink-soft/25 hover:text-ink/65 transition-colors duration-300">Contact Me</a>
                    </div>
                    <div className="flex items-center gap-3 md:gap-12">
                        <div className="flex flex-col gap-4">
                            <h3 className="font-mono text-xl font-bold">3+</h3>
                            <p className="font-mono text-sm text-ink-soft">Projects built</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="font-mono text-xl font-bold">6+</h3>
                            <p className="font-mono text-sm text-ink-soft">Technologies</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="font-mono text-xl font-bold">Junior</h3>
                            <p className="font-mono text-sm text-ink-soft">Experience level</p>
                        </div>
                    </div>
                </div>
                <div className="bg-vsc rounded-xl overflow-hidden shadow-xl">
                    <div className="flex items-center gap-1 bg-[#18222C] px-4 py-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                        <span className="ml-auto text-xs font-mono text-gray-400">developer.js</span>
                    </div>
                    <pre className="text-accent-soft p-6 text-xs md:text-sm font-mono leading-7 overflow-x-auto">
            {`const developer = {
                name: "Shiva Hassanpour",
                role: "Frontend Developer",
                location: "Milan, Italy",
                university: "Politecnico di Milano",
                stack: ["React", "JavaScript", "TypeScript"],
                available: true,
            };`}
                    </pre>
                </div>
            
           </div>
        </section>
    )
}