import { motion } from "framer-motion";

export interface SectionHeadProps {
  title: string;
}

export default function SectionHead({ title }: SectionHeadProps) {
  return (
    <motion.h2
      animate={{ scale: 0.9 }}
      whileInView={{ scale: 1, transition: { type: "spring", duration: 1 } }}
      exit={{ scale: 0.9 }}
      className="text-2xl laptop:text-3xl font-bold"
    >
      {title}
    </motion.h2>
  );
}
