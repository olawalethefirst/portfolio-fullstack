import { useRef } from "react";
import Header from "@/components/Header/index";
import ServiceCard from "@/components/ServiceCard";
import Socials from "@/components/Socials";
import WorkCard from "@/components/ProjectCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "@/components/Footer";
import Head from "next/head";
import Button from "@/components/Button";
import Link from "next/link";
import Intro from "@/components/Sections/Intro/Intro";

// Local Data
import data from "@/data/portfolio.json";
import ProjectCard from "@/components/ProjectImagesCarousel/ProjectImagesCarousel";
import Projects from "@/components/Projects/Projects";
import Spacer from "@/components/Spacer/Spacer";
import Publications from "@/components/Publications/Publications";
import About from "@/components/About/About";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef?.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef?.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  // useIsomorphicLayoutEffect(() => {
  //   stagger(
  //     [textOne.current, textTwo.current, textThree.current, textFour.current],
  //     { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
  //     { y: 0, x: 0, transform: "scale(1)" }
  //   );
  // }, []);

  return (
    <div
      className={`page-wrapper-small pt-[56px] tablet:page-wrapper bg-black bg-image relative ${
        data.showCursor && "cursor-none"
      }`}
    >
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="container mx-auto">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <Intro />

        <Spacer size={160} />

        <Projects projects={data.projects} />

        <Spacer size={160} />

        <Publications publications={data.services} />

        <Spacer size={160} />

        <About data={data.aboutpara} />

        <Spacer size={160} />

        <Footer />
      </div>
    </div>
  );
}
