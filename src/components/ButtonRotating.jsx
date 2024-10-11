import { motion, useTime, useTransform } from "framer-motion";
import { useState } from "react";

function ButtonRotating() {
  const [isHovered, setIsHovered] = useState(false);

  const time = useTime();
  const rotate = useTransform(time, [0, 3000], [0, 360], { clamp: false });
  const rotatingBg = useTransform(rotate, (r) => {
    return `conic-gradient(from ${r}deg, #71F4A5FF 0%, #0bcb58 30%, #0BCB5800 56%, #0BCB5800 75%, #71f4a5 100%)`;
  });

  return (
    <div className="relative inline-block">
      <button
        className="relative z-10 rounded-md bg-[#0A0A0A] px-12 py-2 transition-colors duration-200 hover:bg-[#71f4a5ff] hover:text-dark"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Resume
      </button>
      <motion.div
        initial={false}
        className="absolute -inset-[1px] rounded-md transition-all duration-300"
        style={{
          background: !isHovered ? rotatingBg : "#71f4a5ff",
          filter: !isHovered ? "none" : "blur(5px)",
        }}
      />
    </div>
  );
}

export default ButtonRotating;
