import React, { useEffect } from "react";
import Simple_Flex_Items from "../../components/Simple_Flex_Items";
import {
  AirtimeFooterImg,
  AirtimeWithLovedOnes,
  BlackWomanSmiling,
  iPhoneMockUp,
  NetworkProvider,
} from "../../assets";
import Airtime_Data_FAq from "./airtime_view_components/Airtime_Data_FAq";
import Airtime_Footer from "./airtime_view_components/Airtime_Footer";
import GetInTouch from "../../components/GetInTouch";
import Airtime_Hero from "./airtime_view_components/Airtime_Hero";
import Airtime_View_Modals from "./airtime_view_components/Airtime_View_Modal";
import Hero_Layout from "../../components/Hero_Layout";
import First_Section from "./airtime_view_components/First_Section";
import Nav_Bar from "../../components/layout/Nav_bar";
import Flex_Sections from "./airtime_view_components/Flex_Sections";
import First_Section_Heading from "../../components/First_Section_Heading";
import appName from "../../constants/data/App_Name";

const Airtime_View = () => {

  return (
    <>
      <Nav_Bar
        bgColor="bg-[#CDF2FC]"
        logoColor="blue"
        linkColor="text-black"
        linkDColor="text-black"
        personalStyle="bg-[#0B40EE] text-[#DCFFC7]"
        iconColor="text-black"
      />

      <Hero_Layout sectionClassName="bg-[#CDF2FC]">
        <Airtime_Hero />
      </Hero_Layout>
      <First_Section_Heading
        title={`Buy Airtime, Get Cashbacks`}
        textStyle="font-[200]"
        // headingStyle=" font-[500] xmd:leading-[46px] xmd:text-[52px] text-3xl "
        headingStyle=" font-[500] xmd:leading-[56px] xmd:text-[52px] text-3xl font-aeonik"
        containerClass="w-[95%] max-w-screen-2lg 3xl:max-w-xlg mx-auto flex flex-col items-center justify-center py-[20px] mt-[40px]"
        description={`Stay connected without interruption, top up your phone instantly, anytime, anywhere and get 2% cashbacks instantly.
          We pay you, when you pay bills.`}
      />
      <First_Section />
      <Flex_Sections />
      <Airtime_Data_FAq />
      <GetInTouch />
      <Airtime_Footer />
    </>
  );
};

export default Airtime_View;
