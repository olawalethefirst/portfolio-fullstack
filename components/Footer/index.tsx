import React from "react";
import Socials from "@/components/Socials";
import Link from "next/link";
import Button from "@/components/atoms/Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mb-6">
        <div>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              Let&apos;s Build the Future Together!
            </h1>

            <Button onClick={() => {}} type="primary">
              Schedule a call
            </Button>
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
