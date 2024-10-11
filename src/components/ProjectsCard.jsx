import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";

ProjectsCard.propTypes = {
  name: PropTypes.string.isRequired,
};

function ProjectsCard({ name, children }) {
  return (
    <div className="flex flex-col rounded-lg bg-[#1B1B1B] md:max-w-[80vw] md:flex-row">
      <img
        className="min-h-12 rounded-t-lg md:max-w-[35vw] md:rounded-l-[0.5rem] md:rounded-t-none"
        src={`./projects/${name.toLowerCase().replace(/\s/g, "")}.webp`}
        alt={`Screenshot from IT project for portfolio called ${name}`}
      />
      <div className="flex flex-col justify-between px-6 py-4">
        <div>
          <div className="mb-2 flex items-center justify-between">
            <h4 className="text-gradient-sec text-3xl font-medium">{name}</h4>
            <FaGithub className="size-6 opacity-25 transition-all duration-300 hover:cursor-pointer hover:opacity-100" />
          </div>
          <p className="text-sm font-light md:text-base">
            Basic web application designed to facilitate issue tracking and
            support management for businesses or teams. It allows users to
            submit, view, and manage tickets related to problems or tasks.
          </p>
        </div>
        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm md:text-base">
          {children}
        </ul>
      </div>
    </div>
  );
}

export default ProjectsCard;
