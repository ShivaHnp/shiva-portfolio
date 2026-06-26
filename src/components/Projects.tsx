interface Project {
    title: string;
    description: string;
    tags: string[];
    liveUrl?: string;
    githubUrl?: string;
}

const projects: Project[] = [
    {
    title: "Interior Design Studio Website",
    description: "A website for an interior design client, with a contact form and an album-style gallery to showcase completed projects.",
    tags: ["React", "Tailwind CSS"],
    liveUrl: "https://interior-studio-cevu.vercel.app/",
    },
    {
    title: "Personal Developer Site",
    description: "This very site — built from scratch with React, TypeScript, and Tailwind CSS to showcase my work and skills.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
    title: "Sports Website",
    description: "A multi-page sports website built collaboratively with my sister, using HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    },
]

export default function Projects() {

    return(
        <section id="projects" className="grid gap-12 items-center px-3 md:px-5 py-3 md:py-20 max-w-6xl mx-auto">
            <div className="flex flex-col ">
                <span className="block text-xs text-ink-soft font-mono uppercase tracking-wider mb-2">projects</span>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-5">A few things I've built</h2>
                <p className="text-ink-soft">Projects show what I can do</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <div key={project.title} className="border border-line rounded-xl bg-bg p-6">
                        <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                        <p className="text-ink-soft text-sm mb-4">{project.description}</p>
                        <div className="flex gap-2">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-xs font-mono bg-accent-soft text-accent-deep px-2 py-1 rounded-md"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-accent-deep underline mt-4 inline-block"
                        >
                            View Project
                        </a>
                    )}
                    </div>
                ))}
            </div>
        </section>
    )
}