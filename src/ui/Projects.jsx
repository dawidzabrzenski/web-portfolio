import ProjectsCard from "../components/ProjectsCard";
import ProjectsTech from "../components/ProjectsTech";
import { m } from "framer-motion";

const projectData = [
  {
    name: "GFCorp Link",
    workInProgress: true,
    href: "https://github.com/dawidzabrzenski/gfcorp-link",
    desc: "A modern web application designed to integrate with the Comarch XL ERP system via a REST API and Websocket. Developed for my current company, this project streamlines data management and enhances usability through an intuitive frontend. The application supports user authentication with accounts stored in a MongoDB database. Passwords are securely encrypted, and successful login provides a JWT token, which is used to protect application routes and ensure secure access. It includes user management and permission control through customizable groups. The application allows users to view product prices, stock levels, and other essential information from the ERP database. It also provides advanced filtering, sorting, and customizable table column management.",
    techStack: [
      { name: "React", type: "primary" },
      { name: "Redux" },
      { name: "Node.js", type: "primary" },
      { name: "Express", type: "primary" },
      { name: "MongoDB", type: "primary" },
      { name: "Mongoose", type: "primary" },
      { name: "Axios" },
      { name: "React Hook Form" },
      { name: "Tanstack Query" },
      { name: "Tanstack Table" },
      { name: "Tailwind CSS", type: "primary" },
      { name: "Material Icons" },
    ],
  },
  {
    name: "IssueNest",
    workInProgress: true,
    href: "https://github.com/dawidzabrzenski/issue-nest",
    desc: "Basic web application designed to facilitate issue tracking and support management for businesses or teams. It allows users to submit, view, and manage tickets related to problems or tasks.",
    techStack: [
      { name: "React", type: "primary" },
      { name: "React Hook Form" },
      { name: "React Query" },
      { name: "Tailwind CSS", type: "primary" },
      { name: "Supabase", type: "primary" },
    ],
  },
  {
    name: "Recursive Tabs",
    href: "https://github.com/dawidzabrzenski/recursive-tabs-next",
    desc: "SPA for creating recursive tabs in Next.js. In the future it will also include drag and drop functionality. For now it offers infinite depth level. I've implemented many custom and reusable Tailwind classes.",
    techStack: [
      { name: "Next.js", type: "primary" },
      { name: "React Hook Form" },
      { name: "Tailwind CSS", type: "primary" },
      { name: "dnd kit" },
    ],
  },
  {
    name: "Grip Barber",
    href: "http://www.gripbarbershop.pl",
    desc: "Single page application for barber shop. Fully responsive and prepared for mobile, tablet and PC viewports. Contains section with Google Maps locations and contact form.",
    techStack: [
      { name: "React", type: "primary" },
      { name: "Tailwind CSS", type: "primary" },
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
  <m.div
    initial={{ opacity: 0, translateY: -50 }}
    transition={{ delay, duration: 1 }}
    whileInView={{ opacity: 1, translateY: 0 }}
    exit={{ opacity: 0 }}
  >
    {children}
  </m.div>
);

function Projects() {
  return (
    <section className="flex flex-col items-center gap-12 px-4 py-24 text-main md:pb-20">
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
        <m.a
          href="https://www.github.com/dawidzabrzenski"
          target="_blank"
          rel="noopener noreferrer"
          whileHover="animate"
          className="relative text-green-400 underline decoration-dotted underline-offset-2 hover:cursor-pointer"
          aria-label="Explore more projects on my GitHub profile"
        >
          GitHub profile
          <m.img
            className="absolute -right-5 -top-2 transform"
            src="./arrow-projects.svg"
            alt="Doodle drawing of arrow"
            variants={{
              initial: { x: 0, scale: 0 },
              animate: { x: 20, scale: 1.2 },
            }}
          />
        </m.a>
      </h4>
    </section>
  );
}

export default Projects;
