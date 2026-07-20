import React, { JSX } from "react";

interface FeatureCardProps {
  containerClass?: string;
  imageWrapperClass?: string;
  imageClass?: string;
  contentClass?: string;
  titleClass?: string;
  descriptionClass?: string;
  imageSrc: () => JSX.Element;
  imageAlt?: string;
  title: string;
  description: string;
  aosAnimation?: string;
  aosDuration?: string;
  aosOnce?: boolean;
}

const Feature_Card: React.FC<FeatureCardProps> = ({
  containerClass = "bg-[#DCFFC7] rounded-2xl px-1 lg:px-4 py-3 lg:py-6 flex items-center lg:justify-between gap-4 w-full md:w-[48%] lg:w-[30%]",
  imageWrapperClass = "w-[70px] lg:w-[30%]",
  imageClass = "w-full",
  contentClass = "text-[#344054]",
  titleClass = "font-[500] text-lg",
  descriptionClass = "text-[12px] md:text-[14px]",
  imageSrc,
  imageAlt = "feature",
  title,
  description,
  aosAnimation = "fade-right",
  aosDuration = "1500",
  aosOnce = true,
}) => {
  return (
    <div
      className={containerClass}
      data-aos={aosAnimation}
      data-aos-duration={aosDuration}
      data-aos-once={aosOnce}
    >
      <div className={imageWrapperClass}>
        {/* <img src={imageSrc} alt={imageAlt} className={imageClass} /> */}
        {imageSrc()}
      </div>
      <div className={contentClass}>
        <h4 className={`font-aeonik ${titleClass}`}>{title}</h4>
        <p className={descriptionClass}>{description}</p>
      </div>
    </div>
  );
};

export default Feature_Card;
