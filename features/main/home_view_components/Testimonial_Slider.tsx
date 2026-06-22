import { Home_Title } from "../../../assets";
import FullText from "../../../components/FullText";
import { Use_Home_Context_Ref_State_Handler } from "../../../context/page_context/home_context";
import Founder_Carousel_Data from "../../../constants/home/Founder_Carousel_Data";
import FounderCard from "./Testimonial_Card";

const Testimonial_Slider = () => {
  const { currentIndex, goToIndex } = Use_Home_Context_Ref_State_Handler();

  const getCard = (offset: number) => {
    return Founder_Carousel_Data[
      (currentIndex + offset) % Founder_Carousel_Data.length
    ];
  };

  return (
    <div className="bg-[#F5F5F5] py-[7rem] max-xmd:py-8 overflow-hidden">
      <div className="flex flex-col containerclass mx-auto">
        <div className="">
          <FullText
            textContainerStyle="md:w-[60%] xmd:w-[50%] xl:w-[60%] text-center pb-12 gap-4"
            topCard={{
              text: "TESTIMONIALS",
              svg: <Home_Title color={"#4C5C75"} />,
            }}
            heading={{
              text: "Success Stories from Visionary Founders",
              subHeadingText: true,
            }}
          />
        </div>

        <div className="w-full overflow-hidden">
          <div className="flex gap-6 transition-all duration-700 ease-in-out">
            {[0, 1, 2].map((offset, idx) => {
              const card = getCard(offset);
              return <FounderCard key={idx} card={card} index={idx} />;
            })}
          </div>
        </div>
        <div className="flex justify-center mt-6 gap-2">
          {Founder_Carousel_Data.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToIndex(idx)}
              className={`w-3 h-3 cursor-pointer rounded-full transition-all duration-300 ${
                idx === currentIndex ? "bg-[#4C5C75] scale-110" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial_Slider;
