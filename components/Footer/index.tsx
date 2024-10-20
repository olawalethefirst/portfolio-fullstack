import React from "react";
import Socials from "@/components/Socials";
import { Social } from "@/types";

interface FooterProps {
  socials: Social[];
}
const Footer = ({ socials }: FooterProps) => {
  return (
    <>
      <div className="mb-6">
        <div>
          <div className="mt-10">
            <h1 className="text-2xl mobl:text-3xl tablet:text-5xl laptopl:text-7xl text-bold leading-tight">
              Let&apos;s Build the Future Together!
            </h1>

            <div className="mt-4 ">
              <Socials socials={socials} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
