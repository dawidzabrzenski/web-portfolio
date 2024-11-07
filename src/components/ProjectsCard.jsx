import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

ProjectsCard.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
  href: PropTypes.string,
  desc: PropTypes.string,
  workInProgress: PropTypes.bool,
};

const WorkInProgressBadge = () => (
  <p className="rounded-xl bg-orange-500 px-2 py-1 text-xs font-light transition-colors duration-300 hover:bg-orange-600 sm:text-sm">
    WORK IN PROGRESS
  </p>
);

const IconStyleWrapper = ({ children }) => (
  <div className="opacity-25 transition-opacity duration-300 hover:cursor-pointer hover:opacity-100">
    {children}
  </div>
);

const ProjectLink = ({ href, label, icon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
    <IconStyleWrapper>{icon}</IconStyleWrapper>
  </a>
);

function ProjectsCard({ name, children, href, desc, workInProgress }) {
  const isGitHubLink = href.includes("github");
  const linkIcon = isGitHubLink ? (
    <FaGithub className="size-6" />
  ) : (
    <TbWorldWww className="size-6" />
  );

  return (
    <div className="flex flex-col rounded-lg bg-[#1B1B1B] md:max-w-[80vw] md:flex-row">
      <img
        loading="lazy"
        className="min-h-12 rounded-t-lg object-cover object-left md:max-w-[35vw] md:rounded-l-[0.5rem] md:rounded-r-none"
        src={`./projects/${name.toLowerCase().replace(/\s/g, "")}.webp`}
        alt={`Screenshot from IT project for portfolio called ${name}`}
      />
      <div className="flex flex-col justify-between px-6 py-4">
        <div>
          <div className="mb-2 flex items-center justify-between">
            <h4 className="text-gradient-sec text-3xl font-medium">{name}</h4>
            <div className="flex items-center gap-4">
              {workInProgress && <WorkInProgressBadge />}
              <ProjectLink
                href={href}
                label={`${isGitHubLink ? "GitHub" : "Website"} link to the ${name} project`}
                icon={linkIcon}
              />
            </div>
          </div>
          <p className="text-sm font-light md:text-base">{desc}</p>
        </div>
        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm md:text-base">
          {children}
        </ul>
      </div>
    </div>
  );
}

export default ProjectsCard;
