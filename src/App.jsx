
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Reveal from "./components/common/Reveal";

import HeroSection from "./features/home/HeroSection";
import AboutSection from "./features/about/AboutSection";
import SkillsSection from "./features/skills/SkillsSection";
import ProjectsSection from "./components/projects/ProjectsSection";
import ContactSection from "./features/contact/ContactSection";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#09090f] text-zinc-100">

      {/* Ambient background glow */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-30">
        <div className="absolute -top-48 left-1/3 size-125 rounded-full bg-violet-700/20 blur-[150px]" />

        <div className="absolute -right-50 top-150 size-100 rounded-full bg-indigo-700/10 blur-[140px]" />
      </div>

      <div className="relative z-10">
        <Navbar />

        <main>
          <HeroSection />

          <Reveal>
            <AboutSection />
          </Reveal>

          <Reveal>
            <SkillsSection />
          </Reveal>
          
          <Reveal>
            <ProjectsSection />
          </Reveal>

          <Reveal>
            <ContactSection />
          </Reveal>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
