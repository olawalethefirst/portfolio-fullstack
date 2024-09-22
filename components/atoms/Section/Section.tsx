import { PropsWithChildren } from "react";
import { motion } from "framer-motion";

export default function Section({ children }: PropsWithChildren) {
  return (
    <motion.section
      animate={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { type: "spring", duration: 3 } }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.section>
  );
}
