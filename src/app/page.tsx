// Adjust the path as needed

import About from "./components/About";
import Hero from "./components/Hero";
import ProjectCarousel from "./components/ProjectCarousel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import DesignServices from "./components/DesigningServices";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <ProjectCarousel />
      <DesignServices />
      <Footer />
    </>
  );
}
