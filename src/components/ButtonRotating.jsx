import { motion, useTime, useTransform } from "framer-motion";

function ButtonRotating() {
  const time = useTime();

  const rotate = useTransform(time, [0, 3000], [0, 360], { clamp: false });

  const rotatingBg = useTransform(rotate, (r) => {
    return `conic-gradient(from ${r}deg, #71F4A5FF 0%, #0bcb58 30%, #0BCB5800 56%, #0BCB5800 75%, #71f4a5 100%)`;
  });

  return (
    <div className="relative inline-block">
      <button className="relative z-10 rounded-md bg-[#0A0A0A] px-12 py-2 transition-colors duration-200 hover:bg-light-green hover:text-dark">
        Resume
      </button>
      <motion.div
        className="absolute -inset-[1px] rounded-md"
        style={{
          background: rotatingBg,
        }}
      />
    </div>
  );
}

export default ButtonRotating;

// "conic-gradient(#ff4545, #00ff99, #006aff, #ff0095, #ff4545)",
