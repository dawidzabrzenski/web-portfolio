import ProjectsTech from "./ProjectsTech";
import PropTypes from "prop-types";

ProjectsCard.propTypes = {
  name: PropTypes.string.isRequired,
};

function ProjectsCard({ name }) {
  return (
    <div className="rounded-lg bg-[#1B1B1B]">
      <img
        className="max-w-full rounded-t-lg"
        src={`./public/${name}.jpg`}
        alt={`Screenshot from IT project for portfolio called ${name}`}
      />
      <div className="px-6 py-4">
        <h4 className="text-gradient-sec mb-2 text-3xl font-medium">{name}</h4>
        <p className="text-sm font-light">
          Basic web application designed to facilitate issue tracking and
          support management for businesses or teams. It allows users to submit,
          view, and manage tickets related to problems or tasks.
        </p>
        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
          <ProjectsTech type="primary">React</ProjectsTech>
          <ProjectsTech>React Hook Form</ProjectsTech>
          <ProjectsTech>React Query</ProjectsTech>
          <ProjectsTech type="primary">Tailwind</ProjectsTech>
          <ProjectsTech type="primary">Supabase</ProjectsTech>
        </ul>
      </div>
    </div>
  );
}

export default ProjectsCard;
