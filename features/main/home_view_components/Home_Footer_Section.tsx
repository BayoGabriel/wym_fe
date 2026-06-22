import SimpleFlex from "../../../components/SimpleFlex";
import { HomeFooter } from "../../../assets";
import Bottom from "../../../assets/svg/Bottom";

const Home_Footer_Section = () => {
  return (
    <>
      <section className=" bg-black relative">
        <div className="2xl:relative 2xl:max-w-[1200px] containerclass mx-auto">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 z-[0] h-[30rem] w-[20%] flex items-center">
            <Bottom />
          </div>
          <div className="absolute top-0 right-0 md:right-[12rem] h-20 w-[38%] bg-[#FFFFFF24] blur-2xl rounded-full"></div>
          <div className="hidden md:block absolute top-0 left-[2rem] h-[10rem] md:h-20 w-[40%] md:w-[15%] bg-[#FFFFFF24] blur-2xl rounded-full"></div>

          <SimpleFlex
            flexStyle=" w-full mx-auto"
            allTextStyles={{
              textContainerStyle: "grid gap-6",
              heading: {
                text: "Experience ease with banking",
                subHeadingText: true,
                subHeadingStyle: "text-white",
              },
              paragraph: {
                text: "Experience the comfort of banking designed for your lifestyle easy, reliable, and always accessible.",
                textStyle: "text-[#D9D9D9] text-lg",
              },
            }}
            imgStyles={{
              img: HomeFooter,
              imgContainerStyle: "lmd:w-[50%]",
            }}
            btnProps={{ btnStyle: "bg-[#FD5E1D] text-white" }}
          />
        </div>
      </section>
    </>
  );
};

export default Home_Footer_Section;
