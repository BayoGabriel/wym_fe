import Nav_Bar from "../../components/layout/Nav_bar";
import Second_Section from "./power_view_components/Second_Section";
import Fourth_Section from "./power_view_components/Fourth_Section";
import Power_Hero from "./power_view_components/Power_Hero";
import Hero_Layout from "../../components/Hero_Layout";
import FIrst_Section from "./power_view_components/First_Section";
import Power_FAQ from "./power_view_components/Power_FAQ";
import Airtime_Footer from "../airtime_view/airtime_view_components/Airtime_Footer";
import GetInTouch from "../../components/GetInTouch";
import { NewImage, Powerbg } from "../../assets";
import Simple_Flex_Items from "../../components/Simple_Flex_Items";
import appName from "../../constants/data/App_Name";

const Power_View = () => {
  return (
    <>
      <Nav_Bar
        bgColor="bg-[#F6F2FF]"
        logoColor="blue"
        linkColor="text-black"
        linkDColor="text-black"
        personalStyle="bg-[#0B40EE] text-[#DCFFC7]"
        iconColor="text-black"
      />
      <Hero_Layout
        sectionClassName="bg-[#F6F2FF]"
        lower="yes"
        bgImage={Powerbg}
        cash="-bottom-1"
      >
        <Power_Hero />
      </Hero_Layout>
      <FIrst_Section />
      <Second_Section />
      <div className="bg-[#F4F8FC] pt-[1px] pb-[25px]">
        <Simple_Flex_Items
          img={{
            img: NewImage,
          }}
          bgColor="bg-[#F4F8FC]"
          title={`No Light? No Problem. Top Up Instantly. Quick, Easy, and Reliable Power Units`}
          details={`Keep the lights on with ease by managing your electricity units through ${appName}.
Top up anytime, from anywhere, and enjoy the convenience and peace of mind that comes with uninterrupted power.`}
          btn={{
            btnStyles: "text-white bg-[#0a40ed] w-[190px] max-md:px-10 py-[17px] rounded-[4px] font-[300] text-center",
            btnText: "Get started Now",
          }}
        />
      </div>
      <Fourth_Section />
      <Power_FAQ />
      <GetInTouch />
      <Airtime_Footer />
    </>
  );
};

export default Power_View;
