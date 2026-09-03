/** @format */

import MainLayout from "./layouts/MainLayout";
import Hero from "./features/hero/Hero";
import Projects from "./features/projects/Projects";

function App() {
  return (
    <MainLayout>
      <Hero />
      <Projects />
    </MainLayout>
  );
}

export default App;
