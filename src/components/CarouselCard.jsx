export default function CarouselCard({ name }) {
  return (
    <div className="flex items-center justify-center rounded-lg py-4 text-xl text-white">
      <img
        className="h-16 w-16"
        src={`./icons/${name.toLowerCase().replace(".", "")}.svg`}
        alt={`${name} Icon`}
      />
    </div>
  );
}
