import { motion } from "framer-motion";

export default function Squiggle() {
  return (
    <svg
      width="200"
      height="80"
      viewBox="0 0 200 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
    >
      <motion.path
        d="M 10 40 Q 40 10 70 40 T 130 40 T 190 40"
        stroke="currentColor"
        strokeWidth="3"
        animate={{
          d: [
            "M 10 40 Q 40 10 70 40 T 130 40 T 190 40",
            "M 10 40 Q 40 20 70 40 T 130 50 T 190 40",
            "M 10 40 Q 40 10 70 40 T 130 40 T 190 40",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </svg>
  );
}
