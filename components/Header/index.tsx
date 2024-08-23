import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
// Local Data
import data from "../../data/portfolio.json";
import Icon from "../Icons";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { name, showBlog, showResume } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div
        style={{
          position: "fixed",
          left: "0",
          right: "0",
          background: "#E3DCD2",
          padding: "6px",
          top: "0",
          border: "2px solid #013328",
          zIndex: "10000",
          maxWidth: "1480px",
          color: "#013328",
        }}
        className="tablet:hidden"
      >
        <div className="flex items-center justify-between p-2 laptop:p-0">
          <h1
            onClick={() => router.push("/")}
            className="font-medium p-2 laptop:p-0 link"
          >
            {name}.
          </h1>

          <Icon name="hamburger" />
        </div>
        {/* <Popover className="block tablet:hidden">
          {({ open }) => (
            <>
              <div className="flex items-center justify-between p-2 laptop:p-0">
                <div className="flex items-center">
                  <Popover.Button>
                    <img
                      className="h-5"
                      src={`/images/${
                        !open ? "menu-white.svg" : "cancel-white.svg"
                      }`}
                    ></img>
                  </Popover.Button>
                </div>
              </div>

              <Popover.Panel
                className={`absolute right-0 z-10 w-11/12 p-4 ${
                  theme === "dark" ? "bg-slate-800" : "bg-white"
                } shadow-md rounded-md`}
              >
                {
                  <div className="grid grid-cols-1">
                    <Button onClick={handleWorkScroll}>Work</Button>
                    <Button onClick={handleAboutScroll}>About</Button>
                    {showBlog && (
                      <Button onClick={() => router.push("/blog")}>Blog</Button>
                    )}
                    {showResume && (
                      <Button
                        onClick={() =>
                          window.open("mailto:hello@chetanverma.com")
                        }
                      >
                        Resume
                      </Button>
                    )}

                    <Button
                      onClick={() =>
                        window.open("mailto:hello@chetanverma.com")
                      }
                    >
                      Contact
                    </Button>
                  </div>
                }
              </Popover.Panel>
            </>
          )}
        </Popover> */}
      </div>

      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky ${
          theme === "light" && "bg-white"
        } dark:text-white top-0 z-10 tablet:flex`}
        style={{
          position: "fixed",
          left: "20px",
          right: "20px",
          background: "#E3DCD2",
          borderRadius: "32px",
          padding: "6px",
          top: "8px",
          border: `2px solid ${"#013328"}`,
          zIndex: "10000",
          maxWidth: "1480px",
          margin: "auto",
          color: "#013328",
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
          >
            Work
          </Button>
          <Button
            classes="laptop:my-1 p-1 laptop:p-1"
            onClick={handleAboutScroll}
          >
            About
          </Button>
          {showBlog && (
            <Button
              classes="laptop:my-1 p-1 laptop:p-1"
              onClick={() => router.push("/blog")}
            >
              Blog
            </Button>
          )}
          {showResume && (
            <Button
              onClick={() => router.push("/resume")}
              classes="laptop:my-1 p-1 laptop:p-1"
            >
              Resume
            </Button>
          )}

          <Button
            classes="laptop:my-1 p-1 laptop:p-1"
            onClick={() => window.open("mailto:hello@chetanverma.com")}
          >
            Contact
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
