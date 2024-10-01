import Hero from "./ui/Hero";
import AboutMe from "./ui/AboutMe";
import Projects from "./ui/Projects";
import Contact from "./ui/Contact";
import Navbar from "./components/Navbar";

function App() {
  // return (
  //   <>
  //     <Hero />
  //     <AboutMe />
  //   </>
  // );

  return (
    <div className="h-screen snap-y snap-mandatory overflow-scroll overflow-x-hidden">
      <Navbar />
      <div className="snap-start">
        <Hero />
      </div>
      <div className="snap-start">
        <AboutMe />
      </div>
      <div className="snap-start">
        <Projects />
      </div>
      <div className="snap-start">
        <Contact />
      </div>
    </div>
  );
}

export default App;
