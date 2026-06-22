import Explore_Button from "../../../components/Explore_Button";
import Card_Section from "./Card_Section";
import FullText from "../../../components/FullText";

const Home_Second_Section = () => {
  return (
    <div className=" containerclass pb-12 pt-20">
      <div className="mx-auto lg:w-[75%]">
        <FullText
          textContainerStyle="md:w-[100%] text-center pb-12 gap-4 "
          heading={{
            text: "Send Money home securely with low fees and competitive exchange rates",
            subHeadingText: true,
          }}
        />

        <Explore_Button
          text="Start Exploring Now"
          btnStyle="flex items-center gap-2 bg-black text-white px-1.5 py-1 pr-3 rounded-full mx-auto"
          color="text-black"
        />
      </div>

      <Card_Section />
    </div>
  );
};

export default Home_Second_Section;
