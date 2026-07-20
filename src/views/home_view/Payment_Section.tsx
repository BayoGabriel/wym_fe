import Image, { StaticImageData } from "next/image";
import { Fragment } from "react";
import Text_Image from "./Text_Image";

interface PaymentItemProps {
  preText: string;
  title: string;
  text: string;
  link: string;
  linkTo?: string;
  linkStyle: string;
  img: any | StaticImageData;
  colors: {
    text: string;
    gradient1: string;
    gradient2: string;
    link: string;
    preText: string;
    title: string;
  };
  sideImage?: string | StaticImageData;
  layout: "left-image" | "right-image" | "full-width";
}

interface PaymentSectionProps {
  paymentItems: PaymentItemProps[];
  className?: string;
  aosProps?: Record<string, string>;
}

const Payment_Section: React.FC<PaymentSectionProps> = ({
  paymentItems,
  className = "flex flex-col gap-6 overflow-hidden",
  aosProps = {
    "data-aos-duration": "1500",
    "data-aos-once": "true",
    "data-aos-offset": "0",
  },
}) => {
  return (
    <div className={className}>
      {paymentItems.map((item, index) => (
        <Fragment key={index}>
          {item.layout === "left-image" ? (
            <div className="flex flex-col md:flex-row gap-6">
              {item.sideImage && (
                <div
                  className="hidden md:block h-[650px] lg:h-[802px] w-[38%] rounded-xl overflow-clip relative"
                  data-aos="fade-right"
                  {...aosProps}
                >
                  <Image
                    src={item.sideImage}
                    alt={`side-image-${index}`}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div
                className="flex-1 md:w-[52%]"
                data-aos="fade-left"
                {...aosProps}
              >
                <Text_Image
                  preText={item.preText}
                  title={item.title}
                  linkTo={item.linkTo}
                  text={item.text}
                  link={item.link}
                  linkStyle={item.linkStyle}
                  img={item.img as any}
                  colors={item.colors}
                  bottom
                />
              </div>
            </div>
          ) : item.layout === "right-image" ? (
            <div className="flex gap-4">
              {item.sideImage && (
                <div
                  className="relative hidden md:block h-[650px] lg:h-[802px] w-[38%] rounded-xl overflow-clip"
                  data-aos="fade-right"
                  {...aosProps}
                >
                  <Image
                    src={item.sideImage}
                    alt={`side-image-${index}`}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div
                className="flex-1 md:w-[52%]"
                data-aos="fade-left"
                {...aosProps}
              >
                <Text_Image
                  preText={item.preText}
                  title={item.title}
                  text={item.text}
                  linkTo={item.linkTo}
                  link={item.link}
                  linkStyle={item.linkStyle}
                  img={item.img as any}
                  colors={item.colors}
                />
              </div>
            </div>
          ) : (
            <div data-aos="fade-up" {...aosProps}>
              <Text_Image
                preText={item.preText}
                title={item.title}
                text={item.text}
                linkTo={item.linkTo}
                img={item.img as any}
                link={item.link}
                linkStyle={item.linkStyle}
                colors={item.colors}
                row
                center={index == 1}
              />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default Payment_Section;
