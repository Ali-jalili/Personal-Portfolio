/** @format */

import MainLayout from "./layouts/MainLayout";

import Hero from "./features/hero/Hero";
import About from "./features/about/About";
import Skills from "./features/skills/Skills";
import Projects from "./features/projects/Projects";

import Contact from "./features/contact/Contact";
import Currently from "./features/currently/Currently";
import HowIWork from "./features/journey/Journey";
import Resume from "./features/resume/Resume";

function App() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <HowIWork />
      <Currently />
      <Contact />
    </MainLayout>
  );
}

export default App;
