import React from "react";
import Socials from "../../Socials";
import data from "../../../data/portfolio.json";
import { Row, Col } from "../../atoms/Layout/index";
import { motion, useScroll, useTransform, spring } from "framer-motion";
import main from "../../../public/images/moving-screens/main.svg";
import screen1 from "../../../public/images/moving-screens/screen1.svg";
import screen2 from "../../../public/images/moving-screens/screen2.svg";
import screen3 from "../../../public/images/moving-screens/screen3.svg";
import screen4 from "../../../public/images/moving-screens/screen4.svg";
import Icon from "../../Icon";

export default function Intro() {
  const { scrollY } = useScroll();

  const transformedScrollY = useTransform(scrollY, [0, 200], [0, 20], {
    clamp: true,
  });
  const negTransformedScrollY = useTransform(scrollY, [0, 200], [0, -20], {
    clamp: true,
  });

  return (
    <Row className="h-[100svh] min-h-[450px] max-h-[800px] tablet:items-center">
      <Col className="flex flex-col justify-center">
        <div>
          <div className="mt-5">
            <h1 className="text-4xl laptop:text-5xl laptopl:text-6xl text-bold w-4/5 mob:w-full ">
              {data.headerTaglineOne}
            </h1>
            <h1 className="text-4xl laptop:text-5xl laptopl:text-6xl  text-bold w-full ">
              {data.headerTaglineTwo}
            </h1>
            <h1 className="text-4xl laptop:text-5xl laptopl:text-6xl   text-bold w-full ">
              {data.headerTaglineThree}
            </h1>
            <h1 className="text-4xl laptop:text-5xl laptopl:text-6xl text-bold w-full ">
              {data.headerTaglineFour}
            </h1>
          </div>

          <Socials className="mt-2 laptop:mt-5" />
        </div>
      </Col>

      <Col className="flex justify-end hidden tablet:flex">
        <div
          className="h-[375px] w-[360px] relative"
          // onHoverStart={pauseAnimation}
          // onHoverEnd={playAnimation}
        >
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
