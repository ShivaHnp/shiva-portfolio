export default function Contact() {
    return (
        <section id="contact" className="px-3 md:px-5 py-12 md:py-20 bg-ink">
            <div className="max-w-6xl mx-auto text-center">
                <span className="block text-xs text-gray-400 font-mono uppercase tracking-wider mb-2">contacts</span>
                <h2 className="text-white text-2xl md:text-3xl font-semibold tracking-tight mb-4">Let's get in touch</h2>
                <p className="text-ink-soft mb-8">I'd love to talk about oppurtunities, or just frontend stuff</p>
                <div className="flex gap-4 justify-center">
                    <a 
                        href="mailto: shivahp75@gmail.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-white bg-white/5 border border-white/15 rounded-lg px-5 py-3 hover:border-accent hover:text-accent-soft duration-300"
                    >
                        Email
                    </a>
                    <a 
                        href="https://github.com/ShivaHnp" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-white bg-white/5 border border-white/15 rounded-lg px-5 py-3 hover:border-accent hover:text-accent-soft duration-300"
                    >
                        GitHub
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/shiva-hassanpour-8335081ba/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-white bg-white/5 border border-white/15 rounded-lg px-5 py-3 hover:border-accent hover:text-accent-soft duration-300"
                    >
                        LinkedIn
                    </a>
                </div>

            </div>
        </section>
    )
}