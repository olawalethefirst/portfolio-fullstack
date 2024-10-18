import Header from "@/components/Header/index";
import Footer from "@/components/Footer";
import Intro from "@/components/Sections/Intro/Intro";
import Projects from "@/components/Sections/Projects/Projects";
import Spacer from "@/components/atoms/Layout/Spacer/Spacer";
import Publications from "@/components/Sections/Publications/Publications";
import About from "@/components/Sections/About/About";
import Section from "@/components/atoms/Section/Section";
import { getAppData } from "@/services/firestore";
import { NextPageContext } from "next";
import { AppData } from "@/data/appDataBackup";

Page.getInitialProps = async (ctx: NextPageContext) => {
  const appData = await getAppData();

  return appData;
};

export default function Page({ hero, projects, publications, about }: AppData) {
  return (
    <div
      className={`page-wrapper-small !pt-[20px] tablet:page-wrapper bg-black bg-image relative`}
    >
      <div className="container mx-auto">
        <Header />

        <Intro {...hero} />

        <Section>
          <Projects projects={projects} />
        </Section>

        <Spacer size={160} />

        <Section>
          <Publications publications={publications} />
        </Section>

        <Spacer size={160} />

        <Section>
          <About data={about} />
        </Section>

        <Spacer size={160} />

        <Section>
          <Footer />
        </Section>
      </div>
    </div>
  );
}
