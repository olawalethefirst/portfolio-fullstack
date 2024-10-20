import {Fragment} from "react";
import Socials from "@/components/Socials";
import { Row, Col } from "@/components/atoms/Layout/index";
import { motion, useScroll, useTransform, easeOut } from "framer-motion";
import Icon from "@/components/atoms/Icon";
import Spacer from "@/components/atoms/Layout/Spacer/Spacer";
import { Social } from "@/types";

interface IntroProps {
  title: string;
  details: string[];
  socials: Social[];
}

export default function Intro({ title, details, socials }: IntroProps) {
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
    <section>
      <Row className="h-[calc(100svh - 25px)] h-[calc(100svh-56px)] py-[40px] tablet:py-[140px]  tablet:items-center">
        <Col className="flex flex-col justify-center">
          <motion.div
            animate={{ scale: 0.95 }}
            whileInView={{
              scale: 1,
              transition: { type: "spring", duration: 3 },
            }}
            exit={{ scale: 0.95 }}
          >
            <div className="">
              <h1 className="text-3xl mobl:text-4xl laptopl:text-5xl   font-black w-4/5 mob:w-full ">
                {title}
              </h1>

              <Spacer size={16} />

              <h2 className="text-[25px] mobl:text-[32px] laptop:text-3xl laptopl:text-4xl  !leading-[1.4] font-medium w-full ">
                {details.map((line, index) => (
                  <Fragment key={line}>
                    {line}
                    {index + 1 !== details.length ? <br /> : null}
                  </Fragment>
                ))}
              </h2>
            </div>

            <Spacer size={16} />

            <Socials
              socials={socials}
              className="mt-2 ml-[-8px] laptop:ml-[-12px] laptop:mt-5"
            />
          </motion.div>
        </Col>

        <Col className="flex justify-center hidden tablet:flex">
          <div className="h-[375px] w-[360px] desktop:scale-[1.2] relative">
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
    </section>
  );
}
