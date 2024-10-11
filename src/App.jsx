import Hero from "./ui/Hero";
import AboutMe from "./ui/AboutMe";
import Projects from "./ui/Projects";
import Contact from "./ui/Contact";
import Navbar from "./components/Navbar";

//

function App() {
  return (
    <div className="h-screen snap-y snap-proximity overflow-x-hidden selection:bg-green-300">
      <Navbar />
      <div id="home" className="snap-start">
        <Hero />
      </div>
      <div id="about" className="snap-start">
        <AboutMe />
      </div>
      <div id="projects" className="snap-start">
        <Projects />
      </div>
      <div id="contact" className="snap-start">
        <Contact />
      </div>
    </div>
  );
}

export default App;
