import React from "react";
import Socials from "@/components/Socials";
import data from "../../../data/portfolio.json";
import { Row, Col } from "@/components/atoms/Layout/index";
import {
  motion,
  useScroll,
  useTransform,
  easeOut,
} from "framer-motion";
import Icon from "@/components/atoms/Icon";
import Spacer from "@/components/atoms/Layout/Spacer/Spacer";

export default function Intro() {
  const { scrollY } = useScroll();

  const transformedScrollY = useTransform(scrollY, [0, 800], [0, 30], {
    clamp: true,
    ease: easeOut,
  });
  const negTransformedScrollY = useTransform(scrollY, [0, 800], [0, -30], {
    clamp: true,
    ease: easeOut,
  });

  return (
    <Row className="h-[70svh] tablet:h-[80svh] tablet:min-h-[550px]  tablet:items-center">
      <Col className="flex flex-col justify-end lg:justify-center">
        <motion.div
          animate={{ scale: 0.95 }}
          whileInView={{
            scale: 1,
            transition: { type: "spring", duration: 3 },
          }}
          exit={{ scale: 0.95 }}
        >
          <div className="mt-5">
            <h1 className="text-4xl mob:text-5xl laptop:text-6xl text-bold w-4/5 mob:w-full ">
              {data.headerTaglineOne}
            </h1>

            <Spacer size={16} />

            <h1 className="text-3xl mob:text-4xl laptop:text-5xl laptopl:text-6xl  text-bold w-full ">
              {data.headerTaglineTwo}
            </h1>
            <h1 className="text-3xl mob:text-4xl laptop:text-5xl laptopl:text-6xl   text-bold w-full ">
              {data.headerTaglineThree}
            </h1>
            <h1 className="text-3xl mob:text-4xl laptop:text-5xl laptopl:text-6xl text-bold w-full ">
              {data.headerTaglineFour}
            </h1>
          </div>

          <Spacer size={16} />

          <Socials className="mt-2 laptop:mt-5" />
        </motion.div>
      </Col>

      <Col className="flex justify-end hidden tablet:flex">
        <div className="h-[375px] w-[360px] relative">
          <Icon
            name="animating-screen-main"
            className="absolute z-50 top-0 left-0"
          />

          <motion.div
            style={{ x: transformedScrollY }}
            className="absolute z-40 top-[-30px] left-[100px]"
            transition={{
              type: "spring",
              stiffness: 10000, // Higher stiffness = faster bounce
              damping: 10, // Lower damping = more bouncy effect
            }}
          >
            <Icon name="animating-screen-screen2" />
          </motion.div>

          <motion.div
            style={{ x: transformedScrollY }}
            className="absolute z-40 top-[35px] left-[100px]"
            transition={{
              type: "spring",
              stiffness: 10000, // Higher stiffness = faster bounce
              damping: 10, // Lower damping = more bouncy effect
            }}
          >
            <Icon name="animating-screen-screen1" />
          </motion.div>

          <motion.div
            style={{ x: negTransformedScrollY }}
            className="absolute z-40 top-[50px] right-[0px]"
            transition={{
              type: "spring",
              stiffness: 10000, // Higher stiffness = faster bounce
              damping: 10, // Lower damping = more bouncy effect
            }}
          >
            <Icon name="animating-screen-screen3" />
          </motion.div>

          <motion.div
            style={{ x: negTransformedScrollY }}
            className="absolute z-40 top-[130px] right-[10px]"
            transition={{
              type: "spring",
              stiffness: 10000, // Higher stiffness = faster bounce
              damping: 10, // Lower damping = more bouncy effect
            }}
          >
            <Icon name="animating-screen-screen4" />
          </motion.div>
        </div>
      </Col>
    </Row>
  );
}
