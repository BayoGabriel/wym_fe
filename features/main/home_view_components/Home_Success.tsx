import { Home_Title } from "../../../assets";
import FullText from "../../../components/FullText";
import { tabData } from "../../../constants/home/Home_Credit_Data";
import { Use_Home_Context_Ref_State_Handler } from "../../../context/page_context/home_context";
import Home_Success_Child from "./Home_Success_Child";

const Home_Success = () => {
  const { active, setActive } = Use_Home_Context_Ref_State_Handler();
  return (
    <section className="containerclass">
      <FullText
        textContainerStyle="md:w-[80%] text-center pb-12 gap-4 "
        topCard={{
          text: "WHY CHOOSE US",
          svg: <Home_Title color="black" />,
          topCardStyle: "bg-white mx-auto",
        }}
        heading={{
          text: "Everything you need for success on a platform",
          subHeadingText: true,
          subHeadingStyle: "md:w-[70%] mx-auto",
        }}
      />
      <div className=" overflow-x-auto">
        <div className="w-max rounded-full bg-[#E3E7EA] py-2 px-2  flex items-center gap-4 mx-auto mb-10">
          {tabData.map((data, index) => (
            <button
              key={index}
              className={`cursor-pointer font-montserrat whitespace-nowrap  text-sm px-4 w-fit ${
                active == index &&
                "bg-[#FD5E1D] text-[#F5F5F5] shadow-xs   py-2 rounded-full"
              }`}
              onClick={() => setActive(index)}
            >
              {data}
            </button>
          ))}
        </div>
      </div>
      <div>
       <Home_Success_Child/>
      </div>
    </section>
  );
};

export default Home_Success;
