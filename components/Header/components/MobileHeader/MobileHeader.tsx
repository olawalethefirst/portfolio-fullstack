import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";
import Button from "@/components/atoms/Button";
import Icon from "@/components/atoms/Icon";
import { AnimatePresence, motion } from "framer-motion";
import { NavigationOption } from "../../types";

interface MobileHeaderProps {
  options: NavigationOption[];
  onToggleMenu?: (visible: boolean) => unknown;
}
export default function MobileHeader({
  onToggleMenu,
  options,
}: MobileHeaderProps) {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  
  const toggleMenu = () => setShowMenu((visible) => !visible);
  const handleClickOption = (option: string) => {
    setSelectedOption(option);
    toggleMenu();
  };
  const optionsHandler = useMemo(()=> {
    const handler = {}

    options.forEach(option => {
      handler[option.title] = option.onClick
    })

    return handler
  }, [options])

  useEffect(() => {
    if (!showMenu && selectedOption) {
      setTimeout(() => optionsHandler[selectedOption]?.(), 250);
    }
  }, [selectedOption, showMenu, optionsHandler]);

  return (
    <div className="h-[54px]">
      <motion.div className="tablet:hidden fixed left-0 right-0 top-0 z-50 flex flex-col overscroll-contain">
        <div className="bg-secondary   z-50">
          <div className="flex items-center justify-between p-2 laptop:p-0">
            <Icon name="logo" size={24} />

            <Button
              className="!bg-transparent"
              onClick={toggleMenu}
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
              transition={{ duration: 0.25 }}
              className={`fixed top-[54px] bottom-0 left-0 right-0 flex-1 flex-col flex overflow-y-scroll bg-primary p-2`}
            >
              <div className="flex flex-col px-8 py-2 my-auto">
                {options.map((option, index) => (
                  <div
                    key={option.title}
                    className={`flex justify-center py-4 ${
                      index !== options.length - 1
                        ? "border-b border-white/[0.4]"
                        : ""
                    }`}
                  >
                    <Button
                      className="text-[20px] px-6 py-3 text-white"
                      onClick={()=>handleClickOption(option.title)}
                      type="primary"
                    >
                      {option.title}
                    </Button>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
