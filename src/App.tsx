/** @format */

import MainLayout from "./layouts/MainLayout";

import Hero from "./features/hero/Hero";
import About from "./features/about/About";
import Skills from "./features/skills/Skills";
import Projects from "./features/projects/Projects";
import Journey from "./features/journey/Journey";
import Contact from "./features/contact/Contact";
import Currently from "./features/currently/Currently";

function App() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Currently />
      <Contact />
    </MainLayout>
  );
}

export default App;
