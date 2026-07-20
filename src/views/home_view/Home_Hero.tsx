import { HomeHeroImg } from "../../assets";
import SEO from "../../components/Seo";
import appName from "../../constants/data/App_Name";
import { Use_Home_Context_Ref_State_Handler } from "../../context/page_context/home_context";
import Hero from "../cashback_view/cashback_view_components/Hero";

const Home_Hero = () => {
  const { toggleModal } = Use_Home_Context_Ref_State_Handler();

  return (
    <>
      <SEO
        title={`${appName} | Fintech, Telecom & Online Learning Platform`}
        description="Wymnet is an all-in-one digital platform for secure payments, digital banking, airtime, data bundles, eSIMs, bill payments, money transfers, and online learning courses."
      />

      <Hero
        title="One Platform for Payments, Telecom & Learning"
        subText="Manage your money, buy airtime, data bundles and eSIMs, pay bills, send and receive payments, and learn new skills through expert-led courses—all from one secure platform."
        img={HomeHeroImg}
        btnText={`Get Started with ${appName}`}
        styles={{
          imgContainer: "",
          container: "text-white",
          btn: "bg-[#DCFFC7] rounded-[4px] w-[220px] py-[18px] text-[16px] text-center font-[400] text-[#2250DAFF]",
          subTextStyle: "font-[200] text-[#ECF3FFFF] text-[18px]",
          titleStyle: "lg:leading-[68px]",
        }}
        btnAction={toggleModal}
      />
    </>
  );
};

export default Home_Hero;