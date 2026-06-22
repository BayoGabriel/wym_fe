import { MainImage } from "../../../assets";
import Double_Child_Container from "../../../components/containers/Double_Child_Container";
import FullText from "../../../components/FullText";
import { Home_Title } from "../../../assets";
import Real_Time_Second_Child from "./Real_Time_Second_Child";
import Animated_Bg from "../../../assets/svg/Animated_Bg";

const Real_Time_Section = () => {

  return (
    <div className="bg-white max-md:hidden pt-[60px] max-md:pt-[30px]">
      <Double_Child_Container
        styles={{
          container: "",
          childOne: "",
          childTwo: "flex items-center justify-center",
        }}
        Heading={
          <FullText
            textContainerStyle="md:w-[60%] xmd:w-[50%] xl:w-[40%] text-center pb-12 gap-4"
            topCard={{
              text: "WHY CHOOSE US",
              svg: <Home_Title color={"#4C5C75"} />,
            }}
            heading={{
              text: "No Prior Credit History Required",
              subHeadingText: true,
            }}
            paragraph={{
              text: "We believe everyone deserves a chance to build financial confidence without the need for any existing credit history",
              textStyle: "text-[#424242]  text-lg",
            }}
          />
        }
        childOne={
          <div className="relative">
            <img
              src={MainImage}
              className="w-full h-full relative z-[1] object-cover"
              alt="mainimage"
            />
            <div className="absolute top-[0%] left-0 w-[90%]">
              <Animated_Bg/>
            </div>
          </div>
        }
        childTwo={
          <Real_Time_Second_Child/>
        }
      />
    </div>
  );
};

export default Real_Time_Section;
