import ProjectsCard from "../components/ProjectsCard";
import ProjectsTech from "../components/ProjectsTech";

function Projects() {
  return (
    <section className="flex flex-col items-center gap-12 bg-[#090909] px-4 py-12 text-main">
      <h3 className="text-gradient-sec py-2 text-4xl font-semibold md:text-5xl">
        Featured Projects
      </h3>
      <div className="flex flex-col gap-12">
        <ProjectsCard name="IssueNest">
          <ProjectsTech type="primary">React</ProjectsTech>
          <ProjectsTech>React Hook Form</ProjectsTech>
          <ProjectsTech>React Query</ProjectsTech>
          <ProjectsTech type="primary">Tailwind</ProjectsTech>
          <ProjectsTech type="primary">Supabase</ProjectsTech>
        </ProjectsCard>

        <ProjectsCard name="Grip Barber">
          <ProjectsTech type="primary">React</ProjectsTech>
          <ProjectsTech type="primary">Tailwind</ProjectsTech>
        </ProjectsCard>

        <ProjectsCard name="The Wild Oasis">
          <ProjectsTech type="primary">React</ProjectsTech>
          <ProjectsTech>React Hook Form</ProjectsTech>
          <ProjectsTech>React Query</ProjectsTech>
          <ProjectsTech type="primary">Styled Components</ProjectsTech>
          <ProjectsTech type="primary">Supabase</ProjectsTech>
        </ProjectsCard>
      </div>
      <h4 className="text-lg">
        Explore more projects on my{" "}
        <span className="text-lighter-green relative">
          GitHub profile
          <img
            className="absolute -right-5 -top-2"
            src="./arrow-projects.svg"
            alt="Doodle drawing of arrow"
          />
        </span>
      </h4>
    </section>
  );
}

export default Projects;
