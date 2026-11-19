/** @format */

import {
  LazyAbout,
  LazyContact,
  LazyCurrently,
  LazyHowIWork,
  LazyProjects,
  LazyResume,
  LazySkills,
} from "./components/LazySection";
import MainLayout from "./layouts/MainLayout";

import Hero from "./features/hero/Hero";

function App() {
  return (
    <MainLayout>
      <Hero />
      <LazyAbout />
      <LazySkills />
      <LazyProjects />
      <LazyHowIWork />
      <LazyCurrently />
      <LazyResume />
      <LazyContact />
    </MainLayout>
  );
}

export default App;
