import Cards_Component from "./Cards_Component";
import Card_Section_Data from "../../../constants/home/Card_Section_Data";

const Card_Section = () => {
  return (
    <div className="containerclass flex max-xmd:overflow-scroll xmd:grid grid-cols-3 max-xmd:grid-cols-2 max-sm:grid-cols-1 gap-6 py-10">
      {Card_Section_Data.map((card, index) => (
        <Cards_Component
          key={index}
          bgColor={card.bgColor}
          cardTitle={card.cardTitle}
          cardDescription={card.cardDescription}
          hasButton={card.hasButton}
          getStarted={card.getStarted}
          LabelTitle={card.cardLabelText}
          LabelStyles={card.cardLabelStyle}
          cardImage={<img src={card.cardImage} alt="ytdf" />}
          descriptionStyle={card.descriptionStyle}
          headingStyle={card.headingStyle}
          cardImageStyle={card.cardImageStyle}
        />
      ))}
    </div>
  );
};

export default Card_Section;
