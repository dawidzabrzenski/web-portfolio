function AboutMeTech({ name }) {
  return (
    <li className="flex items-center gap-2 text-main md:text-xl">
      <img
        className="h-5 w-5"
        src={`./icons/${name.toLowerCase()}.svg`}
        alt={`${name} Icon`}
      />
      {name}
    </li>
  );
}

export default AboutMeTech;
