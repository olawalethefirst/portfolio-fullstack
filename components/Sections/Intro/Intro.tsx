import React from "react";
import Socials from "../../Socials";
import data from "../../../data/portfolio.json";
import { Row, Col } from "../../atoms/Layout/index";
import { motion } from "framer-motion";
import main from "../../../public/images/moving-screens/main.svg";
import screen1 from "../../../public/images/moving-screens/screen1.svg";
import screen2 from "../../../public/images/moving-screens/screen2.svg";
import screen3 from "../../../public/images/moving-screens/screen3.svg";
import screen4 from "../../../public/images/moving-screens/screen4.svg";
import Icon from "../../Icon"

export default function Intro() {
  return (
    <Row>
      <Col>
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
      <Col>
        <div className="intro-image-boundary">
          <motion.div
            className="intro-image-container"
            // onHoverStart={pauseAnimation}
            // onHoverEnd={playAnimation}
          >
            <Icon name="moving-screen-main" />
            {/* <motion.img
              className="intro-image intro-image-screen-1"
              src={screen1}
              alt="machine-screen"
              // style={{ x: p85, y: p27point5 }}
              draggable="false"
            />
            <motion.img
              className="intro-image intro-image-screen-2"
              src={screen2}
              alt="machine-screen"
              // style={{ x: p85, y: p32point5 }}
              draggable="false"
            />
            <motion.img
              className="intro-image intro-image-screen-3"
              src={screen3}
              alt="machine-screen"
              // style={{ y: p57point5 }}
              draggable="false"
            />
            <motion.img
              className="intro-image intro-image-screen-4"
              src={screen4}
              alt="machine-screen"
              // style={{ x: pMinus85, y: pMinus22point5 }}
              draggable="false"
            /> */}
          </motion.div>
        </div>
      </Col>
    </Row>
  );
}
