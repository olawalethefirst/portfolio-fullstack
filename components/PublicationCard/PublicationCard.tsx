import { motion } from "framer-motion"

export interface PublicationCardProps {
  name: string;
  description: string;
}

export default function PublicationCard({
  name,
  description,
}: PublicationCardProps) {
  return (
    <motion.div
      className={`w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 ${"hover:bg-slate-50"} hover:scale-105 link`}
    >
      <h1 className="text-3xl">{name ? name : "Heading"}</h1>
      <p className="mt-5 opacity-40 text-xl">
        {description
          ? description
          : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "}
      </p>
    </motion.div>
  );
}
