import Nav_Bar from "../../components/layout/Nav_bar";
import Cable_Hero from "./cable_view_components/Cable_Hero";
import Hero_Layout from "../../components/Hero_Layout";
import FIrst_Section from "./cable_view_components/FIrst_Section";
import Second_Section from "./cable_view_components/Second_Section";
import Easy_Mange from "./cable_view_components/Easy_Mange";
import Tobi_Experience from "./cable_view_components/Tobi_Experience";
import Cable_FAQ from "./cable_view_components/Cable_FAQ";
import GetInTouch from "../../components/GetInTouch";
import Airtime_Footer from "../airtime_view/airtime_view_components/Airtime_Footer";

const Cable_View = () => {
  return (
    <>
      <Nav_Bar
        bgColor="bg-[#F2F4FE]"
        logoColor="blue"
        linkColor="text-black"
        linkDColor="text-black"
        personalStyle="bg-[#0B40EE] text-[#DCFFC7]"
        iconColor="text-black"
      />
      <Hero_Layout sectionClassName="bg-[#F2F4FE]">
        <Cable_Hero />
      </Hero_Layout>
      <FIrst_Section />
      <Second_Section />
      <Easy_Mange />
      <Tobi_Experience />
      <Cable_FAQ />
      <GetInTouch />
      <Airtime_Footer />
    </>
  );
};

export default Cable_View;
