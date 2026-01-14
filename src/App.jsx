import React from "react";
import { ReactLenis } from "lenis/react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';
import CustomCursor from "./components/CustomCursor";

const App = () => {
  return (
    <ReactLenis root>
      <CustomCursor />
      <div className="container mx-auto max-w-7xl">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experiences />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default App;
