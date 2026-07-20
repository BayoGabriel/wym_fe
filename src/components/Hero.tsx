import React from "react";
import Image from "next/image";

interface HeroProps {
  title: string;
  description: string;
  buttonText: string;
  buttonAction?: string;
  image: string;
  imageAlt?: string;
  imageVerticalAlign?: "center" | "bottom";
  titleClassName?: string;
  descriptionClassName?: string;
  buttonClassName?: string;
  containerClassName?: string;
  imageClassName?: string;
  optional?: string;
  break?: string;
  toggleModal?: () => void;
}

const Hero = ({
  title,
  description,
  buttonText,
  buttonAction = "#",
  image,
  imageAlt = "hero-image",
  imageVerticalAlign = "center",
  titleClassName = "",
  descriptionClassName = "",
  buttonClassName = "",
  containerClassName = "",
  imageClassName = "",
  optional = "",
  toggleModal,
}: HeroProps) => {
  const defaultTitleClasses = `xl:text-[60px] xl:text-left xl:leading-[64px] lg:text-[56px] lg:leading-[59px] xmd:text-[40px] font-[500] text-left text-[36px] leading-[44px] `;

  const defaultDescriptionClasses = `text-md font-aeonik-light  block justify-center font-normal xl:w-[70%] mb-[20px] md:w-[95%] w-[100%] md:text-[18px] text-[16px] md:leading-[26px] leading-[24px]`;

  const defaultButtonClasses = `font-[500] text-lg w-fit text-black px-8 py-2 xmd:px-12 xmd:py-4 rounded-lg`;

  const defaultImageClasses = `w-[85%] md:w-[60%] mx-auto lg:w-[50%]`;

  const textContent = (
    <div className="w-full xmd:w-[55%] flex flex-col gap-4 xmd:gap-8">
      <h1 className={`font-aeonik ${defaultTitleClasses} ${titleClassName}`}>
        {title}
      </h1>
      <p className={`${defaultDescriptionClasses} ${descriptionClassName}`}>
        {description}
      </p>
      <a
        className={`${defaultButtonClasses} ${buttonClassName}`}
        href={buttonAction}
      >
        {buttonText}
      </a>
      {toggleModal && <button onClick={toggleModal}>{buttonText}</button>}
    </div>
  );

  const imageContent = (
    <div
      className={`${defaultImageClasses} ${optional} ${imageClassName} ${
        imageVerticalAlign === "bottom"
          ? "absolute self-center bottom-0 right-0"
          : "self-center"
      }`}
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-duration="1500"
    >
      <Image src={image} alt={imageAlt} />
    </div>
  );

  return (
    <div
      className={`flex max-lg:min-h-[700px] flex-col lg:flex-row items-center gap-8 lg:gap-12 ${containerClassName}`}
    >
      <div className="w-full xmd:w-[55%] flex flex-col gap-4 xmd:gap-8">
        <h1 className={`${defaultTitleClasses} ${titleClassName}`}>{title}</h1>
        <p className={`${defaultDescriptionClasses} ${descriptionClassName}`}>
          {description}
        </p>
        <a
          className={`${defaultButtonClasses} ${buttonClassName}`}
          href={buttonAction}
        >
          {buttonText}
        </a>
      </div>

      <div
        className={`${defaultImageClasses} ${optional} ${imageClassName} ${
          imageVerticalAlign === "bottom"
            ? "absolute self-center bottom-0 right-0"
            : "self-center"
        }`}
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="1500"
      >
        <Image src={image} alt={imageAlt} />
      </div>
    </div>
  );
};

export default Hero;
