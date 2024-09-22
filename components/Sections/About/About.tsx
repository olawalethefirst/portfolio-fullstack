import React from "react";
import SectionHead from "@/components/atoms/SectionHead/SectionHead";

export default function About({ data }) {
  return (
    <div className="p-2 laptop:p-0">
      <SectionHead title="About" />

      <p className="tablet:ml-10 p-2 mt-2 text-lg laptop:w-1/2">{data}</p>
    </div>
  );
}
