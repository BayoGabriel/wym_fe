import ImgContainer from "../../../components/ImgContainer";
import FullText from "../../../components/FullText";
import type { HomeCardProps } from "../../../types/TextProps";

const Home_Card = ({ homeCardStyle, allTextStyles, imgStyles, hasText }: HomeCardProps) => {
  return (
    <div
      className={`bg-[#F4F4F4] border border-[#E1E5E7] rounded-xl px-6 flex gap-6 items-center ${
        homeCardStyle ? homeCardStyle : "flex-col"
      }`}
    >
      <ImgContainer {...imgStyles} />
      {hasText && <FullText {...allTextStyles} />}
    </div>
  );
};

export default Home_Card;
