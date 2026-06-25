export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-ink border-t border-white/10 px-3 md:px-5 py-6">
            <div className="max-w-6xl mx-auto">
                <p className="text-gray-400 text-sm">
                    <span className="text-accent font-mono">&copy; {year}</span> Shiva Hassanpour — All rights reserved.
                </p>
            </div>
        </footer>
    );
}