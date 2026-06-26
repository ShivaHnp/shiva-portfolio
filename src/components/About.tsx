export default function About() {
    return(
        <section id="about" className="bg-bg-alt border-y border-line py-24">
            <div className="mx-auto max-w-6xl px-5 grid md:grid-cols-[0.8fr_1.2fr] gap-16">
                <div className="max-w-[260px] bg-accent-soft aspect-[4/5] flex items-center justify-center text-accent-deep font-mono text-4xl font-bold rounded-lg">
                    s.h
                </div>
                <div>
                    <span className="block text-xs font-mono uppercase tracking-wider text-ink-soft mb-2">About</span>
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-5">
                        A developer who's just getting started - and taking it seriously
                    </h2>
                    <p className="text-ink-soft mb-4">I'm a frontend developer based in Milan, Italy. I did my master's at Politecnico di Milano, where I built a solid foundation in how designs actually work - not just how it looks.</p>
                    <p className="border-l-2 border-accent-deep pl-4 my-6 text-xl">I build interfaces that are intentional, visual, and human — with a sharp eye for layout, hierarchy, and the details that make the difference.</p>
                    <p className="text-ink-soft">Right now I'm focused on React and Typescript, and looking for a team 
                        where I can keep learning, take on real problems, and grow as a developer.
                    </p>
                </div>
            </div>
            
        </section>
    )
}