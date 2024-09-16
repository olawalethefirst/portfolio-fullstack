import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
// Local Data
import data from "../../data/portfolio.json";
import Icon from "../Icon/index";
import { MobileHeader } from "./components/MobileHeader";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { name, showBlog, showResume } = data;

  return (
    <>
      <MobileHeader options={["Work", "About", "Blog", "Resume", "Contact"]} />

      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky bg-primaryAccent dark:text-white top-0 z-10 tablet:flex`}
        style={{
          position: "fixed",
          left: "8px",
          right: "8px",
          borderRadius: "32px",
          padding: "6px",
          top: "8px",
          zIndex: "10000",
          maxWidth: "1480px",
          margin: "auto",
        }}
      >
        <h1 onClick={() => router.push("/")} className="text-secondaryAccent font-semibold ">
          {"Olawale"}
        </h1>

        <div className="flex">
          <Button
            className="laptop:my-1 p-1 laptop:p-1"
            onClick={handleWorkScroll}
            type="secondary"
          >
            Work
          </Button>
          <Button
            className="laptop:my-1 p-1 laptop:p-1"
            onClick={handleAboutScroll}
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
