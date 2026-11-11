
import { Code2, Lightbulb, Target } from "lucide-react";
import SectionLabel from "../../components/common/SectionLabel";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Building applications with a focus on clean code, useful features and reliable functionality.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "Exploring new technologies and improving my technical knowledge through practical projects.",
  },
  {
    icon: Target,
    title: "Problem Solving",
    description:
      "Turning real-world challenges into practical solutions through technology and logical thinking.",
  },
];

function AboutSection() {
  return (
    <section
      id="about"
      className="border-y border-white/[0.07] bg-white/1.5 px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionLabel>About me</SectionLabel>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Creating technology.
              <span className="mt-2 block text-violet-300">
                Solving problems.
              </span>
            </h2>

            <p className="mt-7 text-base leading-8 text-zinc-400">
              I'm Ruchira Kaveesha, a Software Engineering graduate from
              Staffordshire University. I'm interested in building practical
              software solutions and exploring how modern technologies can
              solve real-world problems.
            </p>

            <p className="mt-5 text-base leading-8 text-zinc-400">
              My experience includes application development, backend
              engineering, cloud technologies and machine learning. I enjoy
              working on projects that challenge me to learn something new
              and improve my technical skills.
            </p>

            <p className="mt-5 text-base leading-8 text-zinc-400">
              I'm currently focused on growing as a software engineer and
              exploring opportunities to contribute to meaningful projects.
            </p>
          </div>

          <div className="grid gap-4">
            {highlights.map(({ icon: Icon, title, description }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    duration: 0.6,
                    delay: 0.15,
                    ease: "easeOut",
                }}
                whileHover={{ x: 6 }}
                className="group rounded-2xl border border-white/8 bg-[#101018] p-6 transition hover:border-violet-400/30 hover:bg-violet-500/4"
                >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
                    <Icon size={22} />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-zinc-100">
                      {title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-zinc-400">
                      {description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
