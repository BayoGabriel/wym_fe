import { Home_Title } from "../../../assets";
import FullText from "../../../components/FullText";
import Home_Transaction_Card_Child from "./Home_Transaction_Card_Child";

const Transaction_Card_Section = () => {
  return (
    <section>
      <FullText
        textContainerStyle="md:w-[60%] xl:w-[50%] text-center pb-12 gap-4"
        topCard={{
          text: "WHY CHOOSE US",
          svg: <Home_Title color={"#4C5C75"} />,
        }}
        heading={{
          text: "Explore Detailed Transaction Details",
          subHeadingText: true,
        }}
        paragraph={{
          text: "Easily view all the info you need about your past transactions, from dates to amounts and more.",
          textStyle: "text-[#424242] text-lg w-[80%] md:w-[60%] mx-auto",
        }}
      />

      <div className="containerclass">
        <Home_Transaction_Card_Child/>
      </div>
    </section>
  );
};

export default Transaction_Card_Section;
