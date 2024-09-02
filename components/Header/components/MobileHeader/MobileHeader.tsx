import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../../../Button";
// Local Data
import Icon from "../../../Icon";
import data from "../../../../data/portfolio.json";
import { AnimatePresence, motion } from "framer-motion";

export default function MobileHeader() {
  // Todo: move navigator logic to global utility helper fns
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [showmenu, setShowMenu] = useState(false);

  const { name, showBlog, showResume } = data;

  const options = ["Work", "About", "Blog", "Resume", "Contact"];

  return (
    <>
      <motion.div
        style={{
          height: showmenu ? "100vh" : "68px",
          overflow: "hidden",
        }}
        className="tablet:hidden fixed left-0 right-0 top-0 z-50 flex flex-col "
      >
        <div className="bg-secondary border-solid border-2 border-secondaryAccent p-1 z-50">
          <div className="flex items-center justify-between p-2 laptop:p-0">
            <h1
              onClick={() => router.push("/")}
              className="font-medium p-2 laptop:p-0 link"
            >
              {name}.
            </h1>

            <Button
              classes="bg-transparent hover:bg-transparent active:bg-transparent"
              onClick={() => setShowMenu((visible) => !visible)}
              type="secondary"
            >
              {showmenu ? <Icon name="close" /> : <Icon name="hamburger" />}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {showmenu && (
            <motion.div
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              exit={{ y: -100 }}
              key="modal"
              className={`flex-1 flex-col flex overflow-y-scroll bg-primary p-2`}
            >
              <div className="flex flex-col px-8 py-2 my-auto">
                {options.map((option, index) => (
                  <div
                    key={option}
                    className={`flex justify-center py-4 ${
                      index !== options.length - 1
                        ? "border-b border-secondary"
                        : ""
                    }`}
                  >
                    <Button
                      classes="text-[24px] px-6 py-3"
                      onClick={() => {}}
                      type="secondary"
                    >
                      {option}
                    </Button>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
