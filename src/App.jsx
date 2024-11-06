import { Toaster } from "react-hot-toast";
import { toastConfig } from "./config/toastConfig";

import Hero from "./ui/Hero";
import AboutMe from "./ui/AboutMe";
import Projects from "./ui/Projects";
import Contact from "./ui/Contact";
import Navbar from "./components/Navbar";

const Section = ({ id, children }) => (
  <div id={id} className="snap-start">
    {children}
  </div>
);

function App() {
  return (
    <>
      <div className="scroll-container h-screen snap-y snap-proximity overflow-x-hidden selection:bg-green-300">
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
          <Contact />
        </Section>
      </div>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "16px" }}
        toastOptions={toastConfig}
      />
    </>
  );
}

export default App;
