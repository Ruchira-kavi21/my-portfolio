
import { useRef, useState } from "react";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  ShoppingCart,
  ClipboardList,
  Code2,
  Smartphone,
  Cloud,
} from "lucide-react";

import SectionLabel from "../../components/common/SectionLabel";

// ==========================================
// PROJECT DATA
// ==========================================

const projects = [
  {
    id: 1,
    number: "01",
    title: "Predictive Operator Skill Classification",
    category: "AI & Machine Learning",
    type: "Final Year Research Project",
    description:
      "A data-driven research project focused on predicting sewing operator skill levels in the Sri Lankan apparel industry using machine learning and explainable AI.",
    technologies: [
      "Python",
      "Machine Learning",
      "Scikit-learn",
      "Pandas",
      "Explainable AI",
    ],
    highlights: [
      "Beginner, Intermediate and Expert classification",
      "Factory production data analysis",
      "Operator efficiency and SMV analysis",
      "Explainable machine learning research",
    ],
    icon: BrainCircuit,
    featured: true,
    color: "from-violet-600/25 to-purple-900/10",
  },
  {
    id: 2,
    number: "02",
    title: "SmartRetailX",
    category: "Full Stack Development",
    type: "Microservices Application",
    description:
      "A microservices-based retail application developed using independent services for authentication, products, orders and inventory management.",
    technologies: [
      "Node.js",
      "Express",
      "Docker",
      "AWS ECS",
      "MySQL",
      "RabbitMQ",
    ],
    highlights: [
      "Authentication service",
      "Product, Order and Inventory services",
      "Docker containerization",
      "AWS ECS Fargate deployment work",
    ],
    icon: ShoppingCart,
    featured: true,
    color: "from-blue-600/25 to-indigo-900/10",
  },
  {
    id: 3,
    number: "03",
    title: "SYOS Inventory Management System",
    category: "Full Stack Development",
    type: "Java Application",
    description:
      "A Java-based inventory management system developed as part of a concurrent programming project, featuring client-server communication and database integration.",
    technologies: [
      "Java",
      "MySQL",
      "Concurrency",
      "Client-Server",
    ],
    highlights: [
      "Inventory management",
      "Billing functionality",
      "Reporting features",
      "Concurrent application processing",
    ],
    icon: ClipboardList,
    featured: false,
    color: "from-cyan-600/25 to-blue-900/10",
  },
  {
    id: 4,
    number: "04",
    title: "Laravel Web Applications",
    category: "Web Development",
    type: "Project Collection",
    description:
      "A collection of web development work using Laravel and MySQL, exploring backend development, database operations and application functionality.",
    technologies: [
      "PHP",
      "Laravel",
      "MySQL",
      "HTML",
      "CSS",
    ],
    highlights: [
      "Server-side application development",
      "Database integration",
      "Web application functionality",
      "Backend development practice",
    ],
    icon: Code2,
    featured: false,
    color: "from-orange-600/25 to-red-900/10",
  },
  {
    id: 5,
    number: "05",
    title: "Flutter & Android Applications",
    category: "Mobile Development",
    type: "Project Collection",
    description:
      "Mobile application development work exploring Flutter, Android development and the process of building applications for mobile devices.",
    technologies: [
      "Flutter",
      "Dart",
      "Android",
      "Gradle",
    ],
    highlights: [
      "Mobile application development",
      "Flutter development",
      "Android build configuration",
      "Cross-platform development experience",
    ],
    icon: Smartphone,
    featured: false,
    color: "from-sky-600/25 to-cyan-900/10",
  },
  {
    id: 6,
    number: "06",
    title: "AquaSense Smart Utilities",
    category: "Cloud & DevOps",
    type: "Cloud Architecture Project",
    description:
      "A proposed AWS cloud architecture for a smart utilities platform, focusing on IoT data collection, serverless processing, storage and monitoring.",
    technologies: [
      "AWS",
      "IoT Core",
      "Lambda",
      "S3",
      "Aurora",
      "DynamoDB",
      "CloudWatch",
    ],
    highlights: [
      "IoT data collection architecture",
      "Serverless processing with Lambda",
      "Cloud database and storage design",
      "Monitoring and security architecture",
    ],
    icon: Cloud,
    featured: false,
    color: "from-emerald-600/25 to-teal-900/10",
  },
];

const filters = [
  "All",
  "AI & Machine Learning",
  "Full Stack Development",
  "Web Development",
  "Mobile Development",
  "Cloud & DevOps",
];

// ==========================================
// PROJECT CARD
// ==========================================

function ProjectCard({ project }) {
  const Icon = project.icon;

  return (
    <article
      className="
        group flex h-175 w-[min(86vw,360px)]
        shrink-0 snap-start flex-col overflow-hidden
        rounded-2xl border border-white/10
        bg-[#101018]
        transition-colors duration-200
        hover:border-violet-400/40
      "
    >
      {/* Project visual */}
      <div
        className={`
          relative flex h-46.25 shrink-0
          items-center justify-center overflow-hidden
          bg-linear-to-br ${project.color}
        `}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(#a78bfa 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />

        <div className="absolute h-36 w-36 rounded-full border border-violet-300/15" />

        <div
          className="
            relative flex h-20 w-20 items-center
            justify-center rounded-2xl
            border border-violet-300/20
            bg-[#11101c]/90 text-violet-300
          "
        >
          <Icon size={36} strokeWidth={1.4} />
        </div>

        <span className="absolute left-5 top-5 font-mono text-xs text-zinc-400">
          PROJECT / {project.number}
        </span>

        {project.featured && (
          <span className="absolute right-5 top-5 rounded-full border border-violet-300/30 bg-violet-500/15 px-3 py-1 text-[10px] font-medium text-violet-200">
            FEATURED
          </span>
        )}

        <span className="absolute bottom-4 left-5 text-[10px] text-zinc-400">
          {project.type}
        </span>
      </div>

      {/* Project details */}
      <div className="flex flex-1 flex-col p-5">

        <p className="min-h-5 text-[10px] font-semibold uppercase tracking-[0.17em] text-violet-300">
          {project.category}
        </p>

        <h3 className="mt-3 min-h-14 text-lg font-semibold leading-7 text-zinc-100">
          {project.title}
        </h3>

        <p className="mt-3 line-clamp-4 h-24 overflow-hidden text-sm leading-6 text-zinc-400">
          {project.description}
        </p>

        {/* Highlights */}
        <div className="mt-5">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
            Key highlights
          </p>

          <ul className="h-28 space-y-2 overflow-hidden">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-2 text-xs leading-5 text-zinc-400"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                <span className="line-clamp-2">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="mt-5 min-h-19">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
            Technologies
          </p>

          <div className="flex flex-wrap content-start gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="
                  rounded-md border border-white/8
                  bg-white/3 px-2.5 py-1.5
                  text-[10px] text-zinc-400
                "
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom label */}
        <div className="mt-auto flex items-center justify-between border-t border-white/8 pt-4">
          <span className="text-xs text-zinc-500">
            {project.featured ? "Featured project" : "Project overview"}
          </span>

          <ArrowUpRight
            size={18}
            className="text-violet-300 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </div>
      </div>
    </article>
  );
}

// ==========================================
// MAIN PROJECT SECTION
// ==========================================

function ProjectsSection() {
  const sliderRef = useRef(null);

  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  const slide = (direction) => {
    if (!sliderRef.current) return;

    const card = sliderRef.current.querySelector("[data-project-card]");
    if (!card) return;

    const cardWidth = card.getBoundingClientRect().width;
    const gap = 24;

    sliderRef.current.scrollBy({
      left: direction * (cardWidth + gap),
      behavior: "smooth",
    });
  };

  const changeFilter = (filter) => {
    setActiveFilter(filter);

    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="projects" className=" border-y border-white/[0.07] bg-white/1.5 px-5 py-24 sm:px-8 lg:px-12 lg:py-32 ">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <SectionLabel>Selected work</SectionLabel>

        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              Projects &
              <span className="block text-violet-300">
                engineering work.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-400">
              A collection of my research, software applications,
              cloud architecture and mobile development work.
            </p>
          </div>

          <span className="font-mono text-xs text-zinc-500">
            {String(filteredProjects.length).padStart(2, "0")} PROJECTS
          </span>
        </div>

        {/* Filters */}
        <div className="mb-9 flex gap-2 overflow-x-auto pb-3">
          {filters.map((filter) => (
            <button key={filter} onClick={() => changeFilter(filter)} className={`
                shrink-0 rounded-lg border px-4 py-2.5 text-xs font-medium transition-colors duration-200
                ${
                  activeFilter === filter
                    ? "border-violet-400/50 bg-violet-500/15 text-violet-200"
                    : "border-white/10 bg-white/2 text-zinc-400 hover:border-violet-400/30 hover:text-white"
                }
              `} >
              {filter}
            </button>
          ))}
        </div>

        {/* Carousel controls */}
        <div className="mb-5 flex items-center justify-between">
          <p className="text-xs text-zinc-500">
            Scroll or use the arrows to explore
          </p>

          <div className="flex gap-3">
            <button type="button"onClick={() => slide(-1)}aria-label="Previous projects" className="  flex h-11 w-11 items-center justify-center  rounded-xl border border-white/10 bg-white/3 text-zinc-300  transition-colors hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-white ">
              <ArrowLeft size={19} />
            </button>

            <button
              type="button"
              onClick={() => slide(1)}
              aria-label="Next projects"
              className="
                flex h-11 w-11 items-center justify-center
                rounded-xl border border-white/10
                bg-white/3 text-zinc-300
                transition-colors hover:border-violet-400/40
                hover:bg-violet-500/10 hover:text-white
              "
            >
              <ArrowRight size={19} />
            </button>
          </div>
        </div>

        {/* Sliding cards */}
        <div
          ref={sliderRef}
          className="
            flex snap-x snap-mandatory gap-6
            overflow-x-auto overflow-y-hidden
            scroll-smooth pb-5
            scrollbar-thin
            [scrollbar-color:#49376b_transparent]
          "
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              data-project-card
              className="shrink-0"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-8 flex flex-col justify-between gap-3 border-t border-white/[0.07] pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-zinc-500">
            Showing {filteredProjects.length} project entries
          </p>

          <p className="text-xs text-zinc-500">
            More project details and demonstrations coming soon.
          </p>
        </div>

      </div>
    </section>
  );
}

export default ProjectsSection;
