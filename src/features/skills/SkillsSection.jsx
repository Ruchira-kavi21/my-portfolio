
import {
  Code2,
  Server,
  Cloud,
  BrainCircuit,
  Database,
  Wrench,
} from "lucide-react";

import SectionLabel from "../../components/common/SectionLabel";

const skillGroups = [
  {
    title: "Frontend Development",
    icon: Code2,
    description: "Building responsive user interfaces.",
    skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    icon: Server,
    description: "Developing application logic and APIs.",
    skills: ["Node.js", "Express", "Java", "Laravel", "REST APIs"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    description: "Working with cloud infrastructure and deployment.",
    skills: ["AWS", "Docker", "Amazon ECS", "Amazon ECR", "Git"],
  },
  {
    title: "AI & Machine Learning",
    icon: BrainCircuit,
    description: "Building data-driven prediction applications.",
    skills: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Streamlit"],
  },
  {
    title: "Databases",
    icon: Database,
    description: "Working with relational and NoSQL databases.",
    skills: ["MySQL", "MongoDB"],
  },
  {
    title: "Development Tools",
    icon: Wrench,
    description: "Tools used throughout development and testing.",
    skills: ["VS Code", "Postman", "GitHub", "k6"],
  },
];

function SkillsSection() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <SectionLabel>Technical skills</SectionLabel>

      <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">
          My technical
          <span className="block text-violet-300">toolkit.</span>
        </h2>

        <p className="max-w-md text-sm leading-7 text-zinc-400">
          Technologies and tools I've explored through academic work,
          practical projects and continuous learning.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map(({ title, icon: Icon, description, skills }) => (
          <div
            key={title}
            className="group rounded-2xl border border-white/[0.08] bg-[#101018] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
              <Icon size={23} />
            </div>

            <h3 className="text-lg font-semibold text-zinc-100">
              {title}
            </h3>

            <p className="mt-2 text-sm text-zinc-500">
              {description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-xs text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
