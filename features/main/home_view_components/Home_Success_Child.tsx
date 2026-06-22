import Check from "../../../assets/svg/Check";
import HeadingText from "../../../components/HeadingText";
import ImgContainer from "../../../components/ImgContainer";
import ParagraphText from "../../../components/ParagraphText";
import { Home_Credit_Data } from "../../../constants/home/Home_Credit_Data";
import { Use_Home_Context_Ref_State_Handler } from "../../../context/page_context/home_context";
import Faded_Btn from "./Faded_Btn";

const Home_Success_Child = () => {
  const { active } = Use_Home_Context_Ref_State_Handler();
  const Icon = Home_Credit_Data[active].svg;

  return (
    <div className="flex flex-col justify-between gap-12 md:gap-0 py-6 md:py-10 px-4 md:px-12 border border-[#E1E5E7] bg-white rounded-xl mb-20 md:flex-row">
      <div className="md:w-[50%] flex flex-col justify-between gap-4 md:gap-0 h-auto">
        <div>
          <div className="w-16 h-16">
            <Icon />
          </div>
          <div className="mt-8">
            <HeadingText
              text={Home_Credit_Data[active].title}
              miniText
              miniTextStyle="text-3xl font-semibold font-montserrat"
            />
            <div className="grid gap-4 mt-4 md:mt-8">
              {Home_Credit_Data[active].data.map((data, index) => (
                <div className="flex gap-2 items-center" key={index}>
                  <Check />
                  <ParagraphText
                    text={data}
                    textStyle="font-montserrat text-[#4C5C75]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <Faded_Btn text="Explore Bravoo Services" />
      </div>

      <ImgContainer
        img={Home_Credit_Data[active].img}
        imgContainerStyle="md:w-[45%] h-auto flex justify-center items-center"
      />
    </div>
  );
};

export default Home_Success_Child;
