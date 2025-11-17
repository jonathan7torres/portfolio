import { motion } from "framer-motion";

export default function HorizontalLine({
  width = 300, // line width in px
  stroke = "#000", // line color
  strokeWidth = 2, // line thickness
  duration = 1, // animation duration in seconds
  delay = 0, // animation delay
}) {
  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration, delay, ease: "easeInOut" },
    },
  };

  return (
    <svg
      width={width}
      height={strokeWidth * 2}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.line
        x1="0"
        y1={strokeWidth}
        x2={width}
        y2={strokeWidth}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        variants={lineVariants}
        initial="hidden"
        animate="visible"
      />
    </svg>
  );
}
