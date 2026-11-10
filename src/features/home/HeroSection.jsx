
import { motion } from "framer-motion";


import {
  ArrowDownRight,
  Mail,
  Sparkles,
} from "lucide-react";

import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

function HeroSection() {
  return (
    <section
      id="home"
      className="mx-auto grid min-h-[calc(90vh-73px)] max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-12 lg:py-28"
    >
      {/* Introduction */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/[0.08] px-4 py-2 text-xs text-violet-200">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          SOFTWARE ENGINEERING · SRI LANKA
        </div>

        <p className="mb-3 text-lg text-zinc-400">Hey, I'm</p>

        <h1 className="max-w-3xl text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
          Ruchira
          <span className="mt-2 block bg-gradient-to-r from-violet-300 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Kaveesha.
          </span>
        </h1>

        <h2 className="mt-7 text-xl font-medium text-zinc-200 sm:text-2xl">
          Software Engineer & Developer
        </h2>

        <p className="mt-5 max-w-xl text-base leading-8 text-zinc-400">
          I build software, explore cloud technologies and turn data into
          useful applications. I'm passionate about backend development,
          AI and solving real-world problems through technology.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-violet-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-950/40 transition hover:bg-violet-400"
          >
            Explore my work
            <ArrowDownRight
              size={17}
              className="transition group-hover:translate-x-1 group-hover:translate-y-1"
            />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-zinc-200 transition hover:border-white/25 hover:bg-white/[0.07]"
          >
            <Mail size={16} /> Get in touch
          </a>
        </div>

        <div className="mt-12 flex items-center gap-5">
          <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-zinc-500 transition hover:text-white"
            >
              <FaGithub size={21} />
            </a>

          <a
            href="https://www.linkedin.com/in/ruchira-kaveesha-5102a6273/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-zinc-500 transition hover:text-white"
          >
            <FaLinkedinIn size={21} />
          </a>

          <span className="h-px w-12 bg-white/10" />

          <span className="text-xs tracking-wide text-zinc-500">
            BUILDING · LEARNING · IMPROVING
          </span>
        </div>
      </motion.div>

      {/* Developer code card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="relative mx-auto w-full max-w-md"
      >
        <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-violet-600/20 via-transparent to-indigo-600/20 blur-2xl" />

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#101018]/95 p-6 shadow-2xl shadow-black/40 sm:p-8">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
            <div className="flex gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
            </div>

            <span className="font-mono text-xs text-zinc-500">
              developer.js
            </span>
          </div>

          <div className="py-7 font-mono text-sm leading-8 sm:text-base">
            <p className="text-zinc-500">// A little about me</p>
            <p>
              <span className="text-fuchsia-300">const</span>{" "}
              <span className="text-sky-300">developer</span> = {"{"}
            </p>
            <p className="pl-5">
              <span className="text-violet-300">name</span>:{" "}
              <span className="text-emerald-300">"Ruchira"</span>,
            </p>
            <p className="pl-5">
              <span className="text-violet-300">focus</span>: [
            </p>
            <p className="pl-10 text-emerald-300">
              "Software Engineering",
            </p>
            <p className="pl-10 text-emerald-300">"Cloud & AI"</p>
            <p className="pl-5">],</p>
            <p className="pl-5">
              <span className="text-violet-300">mindset</span>:{" "}
              <span className="text-emerald-300">"Keep building"</span>
            </p>
            <p>{"}"}</p>

            <p className="mt-4 text-zinc-500">
              // Always learning{" "}
              <span className="animate-pulse text-violet-300">▍</span>
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 border-t border-white/[0.08] pt-5">
            {[
              ["01", "Curiosity"],
              ["02", "Creativity"],
              ["03", "Consistency"],
            ].map(([number, label]) => (
              <div key={label} className="rounded-xl bg-white/[0.03] p-3">
                <p className="font-mono text-xs text-violet-300">{number}</p>
                <p className="mt-1 text-xs text-zinc-400">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute -right-3 -top-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-300/20 bg-[#171326] text-violet-300 shadow-xl sm:-right-5">
          <Sparkles size={22} />
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
