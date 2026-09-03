/** @format */

import MainLayout from "./layouts/MainLayout";
import Hero from "./features/hero/Hero";
import Projects from "./features/projects/Projects";
import About from "./features/about/About";
import Skills from "./features/skills/Skills";
import Journey from "./features/journey/Journey";
import Contact from "./features/contact/Contact";

function App() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Contact />
    </MainLayout>
  );
}

export default App;
