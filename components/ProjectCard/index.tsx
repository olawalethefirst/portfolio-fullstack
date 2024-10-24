import React from "react";
import ProjectImagesCarousel from "@/components/ProjectImagesCarousel/ProjectImagesCarousel";
import Image from "next/legacy/image";
import { motion } from "framer-motion";

export interface Tag {
  imageUrl: string;
  url: string;
}
export interface ProjectCardProps {
  images: string[];
  title: string;
  description: string;
  tags: Tag[];
}
const ProjectCard = ({
  images,
  title,
  description,
  tags,
}: ProjectCardProps) => {
  return (
    <div className="p-2 laptop:p-4 border">
      <div className="relative rounded-lg transition-all ease-out duration-300 h-48 mob:h-auto">
        <ProjectImagesCarousel imagesUrl={images} />
      </div>

      <div className="text-center px-2 py-5 flex flex-col gap-1 laptop:gap-2">
        <h3 className="text-xl laptop:text-3xl font-medium">{title}</h3>

        <p className="text-base laptop:text-xl opacity-50">
          {description ? description : "Description"}
        </p>

        <div className="flex justify-center gap-4 mt-4 cursor-pointer">
          {tags.map((tag, i) => (
            <a
              key={tag.imageUrl + i}
              href={tag.url}
              target="_blank"
              rel="noreferrer"
            >
              <motion.div
                className="relative w-[35px] h-[35px] laptop:w-[45px] laptop:h-[45px] "
                animate={{
                  scale: 1,
                }}
                whileHover={{
                  scale: 1.1,
                }}
                whileTap={{
                  scale: 1.1,
                }}
              >
                <Image alt="framework logo" src={tag.imageUrl} layout="fill" />
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
