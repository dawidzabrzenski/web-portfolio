export const loadFeatures = () =>
  import("framer-motion").then((mod) => mod.domAnimation);
