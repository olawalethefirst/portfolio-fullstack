import React from "react";
import Button from "@/components/atoms/Button";
import { Social } from "@/types";

export interface SocialProps {
  className?: string;
  socials: Social[];
}
const Socials = ({ className, socials }: SocialProps) => {
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link gap-2`}>
      {socials.map((social, index) => (
        <Button key={index} onClick={() => window.open(social.url)}>
          {social.label}
        </Button>
      ))}
    </div>
  );
};

export default Socials;
