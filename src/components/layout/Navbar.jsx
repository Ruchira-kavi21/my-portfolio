
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#09090f]/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
            <a href="#home" className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/30 bg-violet-500/10 font-mono text-sm font-bold text-violet-300">
                    RK.
                </span>

                <span className="text-sm font-semibold tracking-wide">
                    Developer 
                    <span className="text-violet-400">.</span>
                </span>
            </a>

            <div className="hidden items-center gap-8 md:flex">
            {navItems.map(({ label, href }) => (
                <a
                key={label}
                href={href}
                className="text-sm text-zinc-400 transition hover:text-white"
                >
                {label}
                </a>
            ))}

            <a
                href="#contact"
                className="rounded-lg border border-violet-400/30 bg-violet-500/10 px-4 py-2.5 text-sm font-medium text-violet-200 transition hover:bg-violet-500/20"
            >
                Let's talk <ArrowUpRight className="ml-1 inline" size={15} />
            </a>
            </div>

            <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            className="rounded-lg border border-white/10 p-2 text-zinc-300 md:hidden"
            >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
        </nav>

        {menuOpen && (
            <div className="border-t border-white/10 bg-[#09090f] px-5 py-4 md:hidden">
            {navItems.map(({ label, href }) => (
                <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-sm text-zinc-300 transition hover:text-violet-300"
                >
                {label}
                </a>
            ))}
            </div>
        )}
        </header>
    );
}

export default Navbar;
