
import { ArrowUp } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-white/[0.07]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 text-xs text-zinc-500 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
        <a href="#home" className="font-semibold tracking-wide text-zinc-300">
          RK<span className="text-violet-400">.</span> Developer
        </a>

        <p>
          © {new Date().getFullYear()} Ruchira Kaveesha. Built with React.
        </p>

        <a
          href="#home"
          className="inline-flex items-center gap-2 transition hover:text-white"
        >
          Back to top <ArrowUp size={14} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
