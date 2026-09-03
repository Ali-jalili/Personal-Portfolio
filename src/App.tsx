/** @format */

import MainLayout from "./layouts/MainLayout";
import Hero from "./features/hero/Hero";
import Projects from "./features/projects/Projects";
import About from "./features/about/About";
import Skills from "./features/skills/Skills";
import Journey from "./features/journey/Journey";

function App() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
    </MainLayout>
  );
}

export default App;
