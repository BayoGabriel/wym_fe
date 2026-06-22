import FullText from "../../../components/FullText";
import { Home_Title, Unlock } from "../../../assets";
import Right from "../../../assets/svg/Right";
import Home_Unlock_Child from "./Home_Unlock_Child";
import { Link } from "react-router-dom";

const Home_Unlock_Section = () => {
  return (
    <section className="containerclass py-20">
      <FullText
        textContainerStyle="md:w-[60%] text-center pb-12 gap-4"
        topCard={{
          text: "WHY CHOOSE US",
          svg: <Home_Title color={"#4C5C75"} />,
        }}
        heading={{
          text: "Unlock Seamless Global Transactions",
          subHeadingText: true,
        }}
        paragraph={{
          text: "Enjoy smooth, reliable global transactions — send money anytime, anywhere, and trust it’ll get there fast and hassle-free.",
          textStyle: "text-[#424242] text-lg",
        }}
      />

      <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
        <div className="h-full flex md:py-8 gap-8 flex-col md:px-12">
          <FullText
            textContainerStyle="justify-left flex-1 gap-4 justify-around"
            topCard={{
              text: "WHY CHOOSE US",
              topCardStyle: "text-white bg-[#005C75]",
              svg: <Unlock />,
            }}
            heading={{
              text: "Set Account Limit",
              miniText: true,
              miniTextStyle:
                "font-instrumentSans font-medium text-xl md:text-3xl",
            }}
            paragraph={{
              text: "Enjoy smooth, reliable global transactions — send money anytime, anywhere, and trust it’ll get there fast and hassle-free.",
              textStyle: "text-[#3B475A]  text-base md:w-[90%]",
            }}
          />
          <Link
            to={"/join-waitlist"}
            className="flex gap-2 items-center text-[#006E75] font-montserrat  w-fit cursor-pointer"
          >
            Get The App
            <Right />
          </Link>
        </div>
        <Home_Unlock_Child />
      </div>
    </section>
  );
};

export default Home_Unlock_Section;
