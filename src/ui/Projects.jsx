import ProjectsCard from "../components/ProjectsCard";
import ProjectsTech from "../components/ProjectsTech";
import { motion } from "framer-motion";

const projectData = [
  {
    name: "IssueNest",
    workInProgress: true,
    href: "https://github.com/dawidzabrzenski/issue-nest",
    desc: "Basic web application designed to facilitate issue tracking and support management for businesses or teams. It allows users to submit, view, and manage tickets related to problems or tasks.",
    techStack: [
      { name: "React", type: "primary" },
      { name: "React Hook Form" },
      { name: "React Query" },
      { name: "Tailwind", type: "primary" },
      { name: "Supabase", type: "primary" },
    ],
  },
  {
    name: "Grip Barber",
    href: "http://www.gripbarbershop.pl",
    desc: "Single page application for barber shop. Fully responsive and prepared for mobile, tablet and PC viewports. Contains section with Google Maps locations and contact form.",
    techStack: [
      { name: "React", type: "primary" },
      { name: "Tailwind", type: "primary" },
    ],
  },
  {
    name: "The Wild Oasis",
    href: "https://github.com/dawidzabrzenski/worldwise",
    desc: "Made with Jonas Schmedtmann React course. Platform designed to simplify the process of finding and reserving cabins. The app provides users with a seamless experience for browsing, booking, and managing stays in cabins.",
    techStack: [
      { name: "React", type: "primary" },
      { name: "React Hook Form" },
      { name: "React Query" },
      { name: "Styled Components", type: "primary" },
      { name: "Supabase", type: "primary" },
    ],
  },
];

const ProjectMotionWrapper = ({ children, delay }) => (
  <motion.div
    initial={{ opacity: 0, translateY: -50 }}
    transition={{ delay, duration: 1 }}
    whileInView={{ opacity: 1, translateY: 0 }}
    exit={{ opacity: 0 }}
  >
    {children}
  </motion.div>
);

function Projects() {
  return (
    <section className="flex flex-col items-center gap-12 bg-[#0A0A0A] px-4 py-24 text-main md:pb-20">
      <h3 className="text-gradient-sec py-2 text-4xl font-semibold md:text-5xl">
        Featured Projects
      </h3>
      <div className="flex flex-col gap-12">
        {projectData.map((project, index) => (
          <ProjectMotionWrapper key={project.name} delay={0.2 + index * 0.2}>
            <ProjectsCard
              name={project.name}
              workInProgress={project.workInProgress}
              href={project.href}
              desc={project.desc}
            >
              {project.techStack.map((tech) => (
                <ProjectsTech key={tech.name} type={tech.type}>
                  {tech.name}
                </ProjectsTech>
              ))}
            </ProjectsCard>
          </ProjectMotionWrapper>
        ))}
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
