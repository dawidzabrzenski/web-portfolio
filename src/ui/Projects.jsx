import ProjectsCard from "../components/ProjectsCard";
import ProjectsTech from "../components/ProjectsTech";
import { motion } from "framer-motion";

function Projects() {
  return (
    <section className="flex flex-col items-center gap-12 bg-[#0A0A0A] px-4 py-24 text-main md:pb-20">
      <h3 className="text-gradient-sec py-2 text-4xl font-semibold md:text-5xl">
        Featured Projects
      </h3>
      <div className="flex flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, translateY: -50 }}
          transition={{ delay: 0.2, duration: 1 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          onViewportLeave={{ opacity: 0 }}
        >
          <ProjectsCard
            name="IssueNest"
            href="https://github.com/dawidzabrzenski/issue-nest"
          >
            <ProjectsTech type="primary">React</ProjectsTech>
            <ProjectsTech>React Hook Form</ProjectsTech>
            <ProjectsTech>React Query</ProjectsTech>
            <ProjectsTech type="primary">Tailwind</ProjectsTech>
            <ProjectsTech type="primary">Supabase</ProjectsTech>
          </ProjectsCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, translateY: -50 }}
          transition={{ delay: 0.4, duration: 1 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          onViewportLeave={{ opacity: 0 }}
        >
          <ProjectsCard
            name="Grip Barber"
            href="https://github.com/dawidzabrzenski/GRIPBarber"
          >
            <ProjectsTech type="primary">React</ProjectsTech>
            <ProjectsTech type="primary">Tailwind</ProjectsTech>
          </ProjectsCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, translateY: -50 }}
          transition={{ delay: 0.4, duration: 1 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          onViewportLeave={{ opacity: 0 }}
        >
          <ProjectsCard
            name="The Wild Oasis"
            href="https://github.com/dawidzabrzenski/worldwise"
          >
            <ProjectsTech type="primary">React</ProjectsTech>
            <ProjectsTech>React Hook Form</ProjectsTech>
            <ProjectsTech>React Query</ProjectsTech>
            <ProjectsTech type="primary">Styled Components</ProjectsTech>
            <ProjectsTech type="primary">Supabase</ProjectsTech>
          </ProjectsCard>
        </motion.div>
      </div>
      <h4 className="text-lg">
        Explore more projects on my{" "}
        <motion.a
          href="https://www.github.com/dawidzabrzenski"
          target="_blank"
          rel="noopener noreferrer"
          whileHover="animate"
          className="relative text-green-400 underline decoration-dotted underline-offset-2 hover:cursor-pointer"
          aria-label="Explore more projects on my GitHub profile"
        >
          GitHub profile
          <motion.img
            className="absolute -right-5 -top-2 transform"
            src="./arrow-projects.svg"
            alt="Doodle drawing of arrow"
            variants={{
              initial: { x: 0, scale: 0 },
              animate: { x: 20, scale: 1.2 },
            }}
          />
        </motion.a>
      </h4>
    </section>
  );
}

export default Projects;
