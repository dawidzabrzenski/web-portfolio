function ProjectsTech({ type, children }) {
  return (
    <li
      className={`rounded-xl border ${type === "primary" ? "border-light-green" : "border-[#7E7E7E]"} px-4 py-1`}
    >
      {children}
    </li>
  );
}

export default ProjectsTech;
