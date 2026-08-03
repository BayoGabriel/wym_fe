import Nav_Bar from "@/src/components/layout/Nav_bar";
import Hero_Layout from "@/src/components/Hero_Layout";
import About_Hero from "./about_view_components/About_Hero";
import Core_Values from "./about_view_components/Core_Values";
import We_Are_Bold from "./about_view_components/We_Are_Bold";
import First_Section from "./about_view_components/First_Section";
import Our_Team from "./about_view_components/Our_Team";
import About_Footer from "./about_view_components/About_Footer";

const About_View = () => {
  return (
    <>
      <Nav_Bar
        bgColor="bg-[#091A30]"
        logoColor="white"
        linkColor="text-white"
        linkDColor="text-white"
        getStartedBtn="bg-white text-[#091A30]"
      />
      <Hero_Layout sectionClassName="bg-[#091A30]">
        <About_Hero />
      </Hero_Layout>
      <First_Section />
      <We_Are_Bold />
      <Core_Values />
      {/* <Our_Team /> */}
      <About_Footer />
    </>
  );
};

export default About_View;
