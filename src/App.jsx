import { Toaster } from "react-hot-toast";
import { toastConfig } from "./config/toastConfig";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { LazyMotion, domAnimation } from "framer-motion";

import Hero from "./ui/Hero";
import AboutMe from "./ui/AboutMe";
import Projects from "./ui/Projects";
import Contact from "./ui/Contact";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";

const Section = ({ id, children }) => (
  <div id={id} className="snap-start">
    {children}
  </div>
);

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="scroll-container bg-bg-dark bg-main-bg h-screen snap-y snap-proximity overflow-x-hidden bg-[#0A0A0A] selection:bg-green-300">
        <Navbar />
        <Section id="home">
          <Hero />
        </Section>
        <Section id="about">
          <AboutMe />
        </Section>
        <Section id="projects">
          <Projects />
        </Section>
        <Section id="contact">
          <Carousel />
        </Section>
        <Section id="contact">
          <Contact />
        </Section>
      </div>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "16px" }}
        toastOptions={toastConfig}
      />
      <SpeedInsights />
    </LazyMotion>
  );
}

export default App;
