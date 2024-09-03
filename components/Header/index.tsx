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
      <MobileHeader options={["Work", "About", "Blog", "Resume", "Contact"]}/>

      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky ${
          theme === "light" && "bg-white"
        } dark:text-white top-0 z-10 tablet:flex`}
        style={{
          position: "fixed",
          left: "20px",
          right: "20px",
          background: "#CC8B65",
          borderRadius: "32px",
          padding: "6px",
          top: "8px",
          border: `2px solid ${"#100C0D"}`,
          zIndex: "10000",
          maxWidth: "1480px",
          margin: "auto",
          // color: "#100C0D",
        }}
      >
        <h1
          onClick={() => router.push("/")}
          className="font-medium cursor-pointer mob:p-2 laptop:p-0"
        >
          {name}.
        </h1>

        <div className="flex">
          <Button
            classes="laptop:my-1 p-1 laptop:p-1"
            onClick={handleWorkScroll}
            type="secondary"
          >
            Work
          </Button>
          <Button
            classes="laptop:my-1 p-1 laptop:p-1"
            onClick={handleAboutScroll}
            type="secondary"
          >
            About
          </Button>
          {showBlog && (
            <Button
              classes="laptop:my-1 p-1 laptop:p-1"
              onClick={() => router.push("/blog")}
              type="secondary"
            >
              Blog
            </Button>
          )}
          {showResume && (
            <Button
              onClick={() => router.push("/resume")}
              classes="laptop:my-1 p-1 laptop:p-1"
              type="secondary"
            >
              Resume
            </Button>
          )}

          <Button
            classes="laptop:my-1 p-1 laptop:p-1"
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
