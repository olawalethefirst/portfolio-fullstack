import { useRef } from "react";
import Header from "@/components/Header/index";
import Footer from "@/components/Footer";
import Head from "next/head";
import Intro from "@/components/Sections/Intro/Intro";

// Local Data
import data from "@/data/portfolio.json";
import ProjectCard from "@/components/ProjectImagesCarousel/ProjectImagesCarousel";
import Projects from "@/components/Sections/Projects/Projects";
import Spacer from "@/components/atoms/Layout/Spacer/Spacer";
import Publications from "@/components/Sections/Publications/Publications";
import About from "@/components/Sections/About/About";
import Section from "@/components/atoms/Section/Section";

export default function Home() {
  return (
    <div
      className={`page-wrapper-small !pt-[20px] tablet:page-wrapper bg-black bg-image relative ${
        data.showCursor && "cursor-none"
      }`}
    >
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="container mx-auto">
        <Header />
        
        
        <Intro />

        
        <Section>
          <Projects projects={data?.projects} />
        </Section>

        <Spacer size={160} />

        <Section>
          <Publications publications={data.services} />
        </Section>

        <Spacer size={160} />

        <Section>
          <About data={data.aboutpara} />
        </Section>

        <Spacer size={160} />

        <Section>
          <Footer />
        </Section>
      </div>
    </div>
  );
}
