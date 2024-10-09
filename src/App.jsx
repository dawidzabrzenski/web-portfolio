import Hero from "./ui/Hero";
import AboutMe from "./ui/AboutMe";
import Projects from "./ui/Projects";
import Contact from "./ui/Contact";
import Navbar from "./components/Navbar";
import Form from "./ui/Form";

// snap-y snap-mandatory

function App() {
  return (
    <div className="h-screen overflow-x-hidden selection:bg-green-300">
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
      <Form />
    </div>
  );
}

export default App;
