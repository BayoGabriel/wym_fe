"use client";
import Hero_Header from "./Hero_Header";
import Hero_Cards from "./Hero_Card_Section";
import Hero_Features from "./Hero_Features";
import { Home_Context_Ref_State_Provider } from "../api/main_context";

const Home_Hero = () => {
  return (
    <Home_Context_Ref_State_Provider>
      <div className="w-full lg:pt-40 pt-[100px]">
        <Hero_Header />
        <div className="flex max-w-[1400px] mx-auto w-full flex-col relative">
          <Hero_Cards />
          <Hero_Features />
        </div>
      </div>
    </Home_Context_Ref_State_Provider>
  );
};

export default Home_Hero;
