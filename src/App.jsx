import Hero from "./ui/Hero";
import AboutMe from "./ui/AboutMe";
import Projects from "./ui/Projects";

function App() {
  // return (
  //   <>
  //     <Hero />
  //     <AboutMe />
  //   </>
  // );

  return (
    <div className="h-screen snap-y snap-mandatory overflow-scroll overflow-x-hidden">
      <div className="snap-start">
        <Hero />
      </div>
      <div className="snap-start">
        <AboutMe />
      </div>
      <div className="snap-start">
        <Projects />
      </div>
    </div>
  );
}

export default App;
