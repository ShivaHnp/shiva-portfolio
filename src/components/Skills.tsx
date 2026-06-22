export default function Skills() {
    return(
        <section id="skills" className="grid gap-12 items-center px-3 md:px-5 py-3 md:py-20 max-w-6xl mx-auto">
            <div className="">
                <span className="block text-xs font-mono uppercase tracking-wider text-ink-soft mb-2">skills</span>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-5">Technologies I work with</h2>
                <p className="text-ink-soft">A quick look at the tools and languages I use day to day.</p>
            </div>

            <div className="bg-vsc rounded-xl overflow-hidden shadow-xl">
                <div className="flex items-center gap-1 bg-[#18222C] px-4 py-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                    <span className="ml-auto text-xs font-mono text-gray-400">skills.config.js</span>
                </div>
                <pre className="text-accent-soft p-4 text-xs md:text-sm font-mono leading-7 overflow-x-auto">
            {`const skills = {
                languages: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
                frameworks: ["React", "Tailwind CSS", "Bootstrap"],
                tools: ["Git", "Github", "VS Code", "Vite", "Figma"],
            };`}
                    </pre>
            </div>
        </section>
    )
}