import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "@/components/atoms/Button";
// Local Data
import data from "@/data/portfolio.json";
import { MobileHeader } from "./components/MobileHeader";

const Header = () => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { name, showBlog, showResume } = data;

  return (
    <>
      <MobileHeader options={["Work", "About", "Blog", "Resume", "Contact"]} />

      <div
        className={`
          hidden tablet:flex
          sticky top-[10px] z-[99]
          flex-row items-center justify-between  
          bg-primaryAccent rounded-[32px] p-1.5 mx-[-8px]
        `}
      >
        <h1
          onClick={() => router.push("/")}
          className="text-primary font-semibold "
        >
          {"Olawale"}
        </h1>

        <div className="flex">
          <Button
            className="laptop:my-1 p-1 laptop:p-1"
            onClick={() => {}}
            type="secondary"
          >
            Work
          </Button>
          <Button
            className="laptop:my-1 p-1 laptop:p-1"
            onClick={() => {}}
            type="secondary"
          >
            About
          </Button>
          {showBlog && (
            <Button
              className="laptop:my-1 p-1 laptop:p-1"
              onClick={() => router.push("/blog")}
              type="secondary"
            >
              Blog
            </Button>
          )}
          {showResume && (
            <Button
              onClick={() => router.push("/resume")}
              className="laptop:my-1 p-1 laptop:p-1"
              type="secondary"
            >
              Resume
            </Button>
          )}

          <Button
            className="laptop:my-1 p-1 laptop:p-1"
            onClick={() => window.open("mailto:hello@chetanverma.com")}
            type="secondary"
          >
            Contact
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
