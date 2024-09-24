function AboutMeTech({ name }) {
  return (
    <li className="flex items-center gap-2 text-main">
      <img
        className="h-5 w-5"
        src={`./public/icons/${name}.svg`}
        alt={`${name} Icon`}
      />
      {name}
    </li>
  );
}

export default AboutMeTech;
