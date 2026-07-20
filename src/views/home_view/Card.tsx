import Image, { StaticImageData } from "next/image";

interface CardProps {
  cardImage: string | StaticImageData;
  text: String;
  imageWidth?: String;
  width?: number;
  height?: number;
}

const Card = ({
  cardImage,
  text,
  imageWidth = `w-["100%"]`,
  width,
  height,
}: CardProps) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-once="true"
      className={`px-[30px] pt-[10px] pb-[40px] bg-[#060125] w-[100%] sm:w-[48%] lg:w-[32%] my-[8px] xl:my-5 rounded-[20px] flex flex-col xmd:block`}
    >
      <div className="my-[1rem] xl:my-4 text-center flex-1">
        <Image
          className={`xl:h-[120px] mx-auto ${imageWidth}`}
          src={cardImage}
          alt=""
          width={width }
          height={height}
        />
      </div>
      <p
        className={`mt-8 text-[17px] xl:text-[16px] text-[#D0DAFFFF] font-[100] tracking-wide leading-6`}
      >
        {text ? text : " Pay your electricity, data, airtime, & TV cable"}
      </p>
    </div>
  );
};
export default Card;
