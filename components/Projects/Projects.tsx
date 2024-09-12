import { forwardRef } from "react";
import ProjectCard from "../ProjectCard";
import SectionHead from "../SectionHead/SectionHead";

export default forwardRef<HTMLDivElement>(function Projects({ projects }, ref) {
  return (
    <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={ref}>
      <SectionHead title="Projects" />

      <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-10">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            img={project.imageSrc}
            name={project.title}
            description={project.description}
            onClick={() => window.open(project.url)}
          />
        ))}
      </div>
    </div>
  );
});
