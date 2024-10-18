import { forwardRef } from "react";
import ProjectCard, { ProjectCardProps } from "@/components/ProjectCard";
import SectionHead from "@/components/atoms/SectionHead/SectionHead";
import Section from "@/components/atoms/Section/Section";

interface ProjectsProps {
  projects: ProjectCardProps[];
}

export default forwardRef<HTMLDivElement, ProjectsProps>(function Projects(
  { projects },
  ref
) {
  return (
    <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={ref}>
      <SectionHead title="Projects" />

      <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={String(index)} {...project} />
        ))}
      </div>
    </div>
  );
});
