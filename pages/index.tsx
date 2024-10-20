import Header from "@/components/Header/index";
import Footer from "@/components/Footer";
import Intro from "@/components/Sections/Intro/Intro";
import Projects from "@/components/Sections/Projects/Projects";
import Spacer from "@/components/atoms/Layout/Spacer/Spacer";
import Publications from "@/components/Sections/Publications/Publications";
import About from "@/components/Sections/About/About";
import Section from "@/components/atoms/Section/Section";
import { getAppData } from "@/services/firestore";
import { AppData, appDataBackup } from "@/data/appDataBackup";
import { useMemo, useRef } from "react";
import { downloadURI } from "@/lib/utils";

Page.getInitialProps = async () => {
  let appData: AppData;

  try {
    appData = await getAppData();
  } catch {
    console.error("Loading remote data failed, falling to local backup");
    appData = appDataBackup;
  }

  return appData;
};

export default function Page({
  hero,
  projects,
  publications,
  about,
  resume,
  email,
  socials,
}: AppData) {
  const projectsRef = useRef<HTMLElement>();
  const venturesRef = useRef<HTMLElement>();
  const aboutRef = useRef<HTMLElement>();

  const scrollIntoSection = (section: "Projects" | "Ventures" | "About") => {
    switch (section) {
      case "About":
        return aboutRef.current?.scrollIntoView({
          behavior: "smooth",
        });
      case "Projects":
        return projectsRef.current?.scrollIntoView({
          behavior: "smooth",
        });
      case "Ventures":
        return venturesRef.current?.scrollIntoView({
          behavior: "smooth",
        });
      default:
        return;
    }
  };

  const navigationOptions = useMemo(() => {
    const navTitles = [
      "Projects",
      "Ventures",
      "About",
      "Resume",
      "Contact",
    ] as const;

    return navTitles.map((title) => {
      switch (title) {
        case "Contact":
          return {
            title,
            onClick: () => downloadURI(`mailto:${email}`),
          };
        case "Resume":
          return {
            title,
            onClick: () => downloadURI(resume),
          };
        default:
          return {
            title,
            onClick: () => scrollIntoSection(title),
          };
      }
    });
  }, [resume, email]);

  return (
    <div
      className={`page-wrapper-small !pt-[20px] tablet:page-wrapper bg-black bg-image relative`}
    >
      <div className="container mx-auto">
        <Header navigationOptions={navigationOptions} />

        <Intro socials={socials} {...hero} />

        <Section ref={projectsRef}>
          <Projects projects={projects} />
        </Section>

        <Spacer size={100} />

        <Section ref={venturesRef}>
          <Publications publications={publications} />
        </Section>

        <Spacer size={100} />

        <Section ref={aboutRef}>
          <About data={about} />
        </Section>

        <Spacer size={100} />

        <Section>
          <Footer socials={socials} />
        </Section>
      </div>
    </div>
  );
}
