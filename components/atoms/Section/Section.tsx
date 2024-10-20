import { forwardRef, PropsWithChildren } from "react";
import { motion } from "framer-motion";

export default forwardRef<HTMLElement, PropsWithChildren>(function Section(
  { children },
  ref
) {
  return (
    <motion.section
      animate={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { type: "spring", duration: 3 } }}
      exit={{ opacity: 0 }}
      ref={ref}
      className="py-[60px]"
    >
      {children}
    </motion.section>
  );
});
