import Explore_Button from "../../../components/Explore_Button";
import Card_Label_Component from "../../../components/Card_Label_Component";
import type { CardProps } from "../../../types/Containers";
import Get_Started_Button from "../../../components/Get_Started_Button";
import FullText from "../../../components/FullText";

const Cards_Component = ({ bgColor, cardTitle, cardDescription, hasButton, LabelTitle, LabelStyles, cardImageStyle, cardImage, headingStyle, descriptionStyle, getStarted }: CardProps) => {
  return (
    <div
      className={`rounded-2xl px-6 pt-6 w-full h-auto flex flex-col transition-all duration-600 card-bounce min-w-[300px] ${bgColor}`}
    >
      <div className="flex flex-col">
        <div className="flex">
          <Card_Label_Component
            LabelText={LabelTitle}
            LabelStyle={LabelStyles!}
          />
        </div>
        <FullText
          textContainerStyle="justify-left"
          heading={{
            text: cardTitle!,
            cardText: true,
            cardTextStyle: headingStyle,
          }}
          paragraph={{
            text: cardDescription!,
            textStyle: descriptionStyle!,
          }}
        />

        <div>
          {hasButton && (
            <Explore_Button
              text="Start Exploring"
              btnStyle="flex items-center gap-2 bg-black text-white px-1.5 py-1 pr-3 rounded-full m-3 mb-0 ml-0"
              color="bg-white text-black rounded-[20px] py-2 px-2"
            />
          )}
        </div>
      </div>

      <div
        className={`mt-auto flex flex-col items-start justify-start ${cardImageStyle}`}
      >
        {getStarted && (
          <Get_Started_Button
            text="Get Started"
            type="hello"
            btnStyle="font-[500] text-[#000F1F] gap-1 text-[15px] hover:gap-2 font-instrumentSans"
          />
        )}
        {cardImage}
      </div>
    </div>
  );
};

export default Cards_Component;
