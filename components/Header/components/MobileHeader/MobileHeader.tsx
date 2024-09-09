import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../../../Button";
import Icon from "../../../Icon";
import { AnimatePresence, motion } from "framer-motion";
import { NavigationOption } from "../../../../types";

interface MobileHeaderProps {
  options: NavigationOption[];
  onToggleMenu?: (visible: boolean) => unknown;
}
export default function MobileHeader({
  onToggleMenu,
  options,
}: MobileHeaderProps) {
  // Todo: move navigator logic to global utility helper fns
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [showMenu, setShowMenu] = useState(false);

  const name = "Olawale";

  useEffect(() => {
    onToggleMenu?.(showMenu);
  }, [onToggleMenu, showMenu]);

  return (
    <>
      <motion.div className="tablet:hidden fixed left-0 right-0 top-0 z-50 flex flex-col overscroll-contain">
        <div className="bg-secondary border-solid border-2 border-secondaryAccent p-1 z-50">
          <div className="flex items-center justify-between p-2 laptop:p-0">
            <h1
              onClick={() => router.push("/")}
              className="font-medium p-2 laptop:p-0 link"
            >
              {name}.
            </h1>

            <Button
              classes="bg-transparent hover:bg-transparent active:bg-transparent overflow-hidden"
              onClick={() => setShowMenu((visible) => !visible)}
              type="secondary"
            >
              <AnimatePresence mode="wait">
                {showMenu && (
                  <motion.div
                    transition={{ duration: 0.125, bounce: 0 }}
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    exit={{ y: -100 }}
                    key="close-icon"
                  >
                    <Icon name="close" />
                  </motion.div>
                )}

                {!showMenu && (
                  <motion.div
                    transition={{ duration: 0.125, bounce: 0 }}
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    exit={{ y: 100 }}
                    key="hamburger-icon"
                  >
                    <Icon name="hamburger" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {showMenu && (
            <motion.div
              initial={{ y: "-110%" }}
              animate={{ y: 0 }}
              exit={{ y: "-110%" }}
              key="menu-items"
              transition={{duration: 0.25}}
              className={`fixed top-[68px] bottom-0 left-0 right-0 flex-1 flex-col flex overflow-y-scroll bg-primary p-2`}
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
                      classes="text-[20px] px-6 py-3"
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
