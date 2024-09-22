import React from "react";
import ProjectImagesCarousel from "@/components/ProjectImagesCarousel/ProjectImagesCarousel";
import Image from "next/image";
import { motion } from "framer-motion";

const ProjectCard = ({ img, name, description, onClick }) => {
  return (
    <div className="p-2 laptop:p-4 border">
      <div className="relative rounded-lg transition-all ease-out duration-300 h-48 mob:h-auto">
        <ProjectImagesCarousel imagesUrl={new Array(5).fill(img)} />
      </div>

      <div className="text-center px-2 py-5 flex flex-col gap-1 laptop:gap-2">
        <h3 className="text-xl laptop:text-3xl font-medium">
          {name ? name : "Project Name"}
        </h3>

        <p className="text-base laptop:text-xl opacity-50">
          {description ? description : "Description"}
        </p>

        <div className="flex justify-center gap-4 mt-4 ">
          {[
            "https://i.imgur.com/Tfrsr4t.png",
            "https://i.imgur.com/Denyq12.png",
            "https://i.imgur.com/REltMJr.png",
          ].map((item) => (
            <motion.div
              key={item}
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
              <Image alt="framework logo" src={item} layout="fill" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
