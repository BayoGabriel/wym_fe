import Image from "next/image";
import { AboutImage, AboutImage2, AboutImage3 } from "@/src/assets";

const Core_Values = () => {
  return (
    <div className="w-[95%] max-w-screen-2lg 3xl:max-w-xlg mx-auto mt-10">
      <p className="font-[500] font-aeonik lg:text-[60px] text-blackb text-[30px] xl:w-[100%]  mx-auto  py-[24px] flex lg:leading-[72px] xl:pl-[0px] pl-[24px]">
        Our Core Values
      </p>
      <div className="flex flex-col md:flex-row gap-4 md:h-[500px] lg:h-[700px]">
        <div className="relative bg-gradient-to-tr from-[#0C2648] to-[#09172B] md:h-auto md:w-[33.33%] xl:w-[43%] grid gap-8 md:gap-[5rem] lg:gap-[7rem] overflow-hidden rounded-2xl text-white px-8 pt-8">
          <Image
            src={AboutImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          <div className="absolute inset-0 bg-black/40 z-10" />

          <div className="relative z-20">
            <p className="text-[26px] font-[500] font-aeonik leading-[30px]">
              Innovation First
            </p>
            <p className="lg:my-[1rem] my-[0.6rem] font-[200]">
              We embrace next-gen technology to simplify payments and build the
              future of Payments.
            </p>
          </div>
        </div>

        <div className="md:w-[66.66%] xl:flex-1 xl:flex-col md:flex gap-4 ">
          <div className="bg-[#0a40ed] grid gap-8 md:gap-[5rem] md:h-full overflow-hidden text-white px-8 pt-8 rounded-2xl">
            <div className="xl:w-[60%] ">
              <p className="text-[26px] font-[500] font-aeonik leading-[30px] ">
                Inclusivity
              </p>
              <p className="lg:my-[1rem] my-[0.6rem] font-[200]">
                Financial access should be for everyone. We design solutions
                that serve individuals and businesses at every level.
              </p>
            </div>
            <div className="lg:relative ">
              <Image
                src={AboutImage2}
                alt=""
                className="mx-auto mb-[-5rem] md:mb-0 lg:absolute bottom-[-5px] right-[-100px] lg:bottom-[-13.5rem] object-contain "
              />
            </div>
          </div>
          <div className="bg-[#bfdefa] grid gap-8 md:gap-[5rem] h-[50%] md:h-full overflow-hidden text-[#101828] px-8 pt-8 rounded-2xl">
            <div className="xl:w-[60%]">
              <p className="text-[26px] font-[500] font-aeonik leading-[30px] ">
                Reliability Redefined
              </p>
              <p className="lg:my-[1rem] my-[0.6rem] font-[200]">
                Every transaction should just work. We’re committed to building
                systems that are fast, secure, and dependable..
              </p>
            </div>
            <div className="lg:relative">
              <Image
                src={AboutImage3}
                alt=""
                className="w-[50%] mx-auto mb-[-5rem] md:mb-0 lg:absolute bottom-0 right-0 lg:bottom-[-1.5rem] object-contain "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Core_Values;
