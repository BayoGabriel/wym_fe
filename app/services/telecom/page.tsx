import Hero_Layout from "@/components/layout_components/hero_layout";
import { Fragment } from "react";
import Home_Hero from "@/features/home/components/home_hero";
import Airtime_Data_FAq from "@/features/home/components/Airtime_Data_FAq";
import First_Section_Heading from "@/components/widget_components/first_section_component";
import First_Section from "@/features/home/components/First_Section";
import Flex_Sections from "@/features/home/components/Flex_Sections";
import GetInTouch from "@/components/widget_components/get_in_touch";
import Footer from "@/components/layout_components/footer";
import Nav_Bar from "@/components/layout_components/nav";

const Telecom_Services_Page = () => {
  return (
    <Fragment>
      <Nav_Bar />
      <Hero_Layout sectionClassName="bg-[#CDF2FC]">
        <Home_Hero />
      </Hero_Layout>
      <First_Section_Heading
        title={`Buy Airtime, Get Cashbacks`}
        textStyle="font-[200]"
        headingStyle=" font-[500] xmd:leading-[56px] xmd:text-[52px] text-3xl font-aeonik"
        containerClass="w-[95%] max-w-screen-2lg 3xl:max-w-xlg mx-auto flex flex-col items-center justify-center py-[20px] mt-[40px]"
        description={`Stay connected without interruption, top up your phone instantly, anytime, anywhere and get 2% cashbacks instantly.
          We pay you, when you pay bills.`}
      />
      <First_Section />
      <Flex_Sections />
      <Airtime_Data_FAq />
      <GetInTouch />
      <Footer />
    </Fragment>
  );
};

export default Telecom_Services_Page;
