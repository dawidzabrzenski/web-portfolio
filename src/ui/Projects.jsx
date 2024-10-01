import ProjectsCard from "../components/ProjectsCard";
import ProjectsTech from "../components/ProjectsTech";

function Projects() {
  return (
    <section className="flex flex-col items-center bg-[#090909] px-4 text-main">
      <h3 className="text-gradient-sec my-20 text-4xl font-semibold">
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
    </section>
  );
}

export default Projects;
