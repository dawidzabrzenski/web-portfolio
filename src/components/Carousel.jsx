import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
import CarouselCard from "./CarouselCard";

const technologies = [
  "React",
  "JavaScript",
  "Next",
  "TypeScript",
  "Redux",
  "Tailwind",
  "Supabase",
  "Sass",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Mongoose",
  "Vite",
];

export default function Carousel() {
  return (
    <div className="w-full py-10">
      <Splide
        options={{
          type: "loop",
          perPage: 7,
          perMove: 1,
          gap: "0.5rem",
          arrows: false,
          pagination: false,
          drag: false,
          autoScroll: {
            speed: 1,
          },
          breakpoints: {
            1280: { perPage: 7 },
            1024: { perPage: 4 },
            768: { perPage: 3 },
            480: { perPage: 2 },
          },
        }}
        extensions={{ AutoScroll }}
      >
        {[...technologies, ...technologies].map((tech, index) => (
          <SplideSlide key={index}>
            <CarouselCard name={tech} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
