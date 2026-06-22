import Home_Card from "./Home_Card";
import { Home_Card_Data } from "../../../data/Home_Card_Data";
import { Unlock } from "../../../assets";

const Home_Unlock_Child = () => {
  return (
    <>
      {Home_Card_Data.map((data, index) => (
        <Home_Card
          homeCardStyle={data.homeCardStyle}
          key={index}
          hasText={data.hasText}
          imgStyles={{
            img: data.img,
            imgContainerStyle: `${data.imgStyle || "w-[65%]"} ${
              !data.hasText && "pb-12"
            }`,
          }}
          allTextStyles={{
            textContainerStyle: data.textContainerStyle!,
            topCard: {
              text: data.cardBtnText!,
              topCardStyle: data.topCardStyle!,
              svg: <Unlock />,
            },
            heading: {
              text: data.title!,
              miniText: true,
              miniTextStyle:
                "font-instrumentSans font-medium text-xl md:text-3xl",
            },
            paragraph: {
              text: data.subTitle!,
              textStyle: "text-[#3B475A]  text-base w-[80%] mx-auto",
            },
          }}
        />
      ))}
    </>
  );
};

export default Home_Unlock_Child;
