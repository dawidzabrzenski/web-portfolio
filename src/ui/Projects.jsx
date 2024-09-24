import ProjectsCard from "../components/ProjectsCard";
import ProjectsTech from "../components/ProjectsTech";

function Projects() {
  return (
    <section className="flex h-screen flex-col items-center bg-[#090909] px-4 text-main">
      <h3 className="text-gradient-sec my-20 text-4xl font-semibold">
        Featured Projects
      </h3>
      <ProjectsCard name="IssueNest" />
    </section>
  );
}

export default Projects;
