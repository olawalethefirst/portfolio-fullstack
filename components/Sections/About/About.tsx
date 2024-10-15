import React from "react";
import SectionHead from "@/components/atoms/SectionHead/SectionHead";

export default function About({ data }) {
  return (
    <div className="p-2 laptop:p-0">
      <SectionHead title="About" />

      <p className="tablet:ml-10 p-2 mt-2 text-lg laptop:w-1/2 text-justify">
        {`
          I am a dedicated Software Engineer, with 4 years of experience in crafting innovative web and mobile solutions. I'm passionate about turning ideas into reality, paying close attention to every detail to ensure exceptional user experiences. I focus on delivering high-quality digital solutions, from initial development to deployment and ongoing management, I'm committed to a consistent quality that exceed expectations. Let's work together to bring your vision to life!
        `}
      </p>
    </div>
  );
}
