"use client";
import { appName } from "@/data/constants/app_name";
import { WomanYello, Group, AirtimeDesktop } from "../../../assets";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const First_Section = () => {
  const RechargeData = [
    {
      title: "Recharge on the go!",
      subText: `Stay connected without interruptions with ${appName}’s convenient mobile recharge solution, anytime, anywhere.`,
      img: WomanYello,
      bgGradient: "from-[#CDFBEC] to-[#CDFBEC]",
    },
    {
      title: "Access Airtime & Data Everywhere",
      subText: `Whether you use MTN, Glo, Airtel or 9Mobile, ${appName} is the easiest way to buy airtime.`,
      img: AirtimeDesktop,
      bgGradient: "from-[#F3F6FF] to-[#F3F6FF]",
    },
    {
      title: "Top-Up Cash Rewards",
      subText: `Earn rewards effortlessly with ${appName}'s 2% cash back offer every time you recharge your airtime, making staying connected even more rewarding.`,
      img: Group,
      bgGradient: "from-[#C7EAFB] to-[#C7EAFB]",
    },
  ];
  const [active, setActive] = useState(0);
  return (
    <div className="pb-[5rem] containerclass">
      <section className="flex sm:flex-row flex-col justify-center xl:gap-[29px] gap-8 max-w-screen-2lg 3xl:max-w-xlg w-[95%] mx-auto md:mt-8 mt-[10px] xmd:h-[570px]">
        {RechargeData.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => setActive(index)}
            className={`bg-gradient-to-br ${
              item.bgGradient
            } max-md:min-h-[500px] transition-all duration-500 ease-in-out rounded-xl px-4 xmd:px-8 pt-4 xmd:pt-12 flex flex-col justify-between relative
              ${
                index !== active ? "lg:w-[25%]" : "lg:w-[50%]"
              } w-full md:w-[33%] overflow-hidden cursor-pointer`}
          >
            {/* Top content */}
            <div className="flex flex-col gap-6">
              <h5 className="font-[500] text-2xl md:text-[1.6rem] font-aeonik">
                {item.title}
              </h5>
              <p className="text-sm md:leading-[1.4rem] font-[200]">
                {item.subText}
              </p>
            </div>

            <div
              className={`mt-auto flex gap-4 items-center ${
                index === active ? "justify-end" : ""
              }`}
            >
              <div
                className={`flex-1 h-full block w-full md:max-h-[300px] lg:max-h-[350px] ${
                  index === active ? "justify-end" : ""
                }`}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  className={`block transition-transform duration-900 
                    ${
                      index === active
                        ? "scale-150 absolute right-16 bottom-8 w-auto max-w-[200px]"
                        : "scale-95"
                    }`}
                />
              </div>
            </div>

            {index === active && (
              <Link href={"/download"}>
                <button className="lg:block hidden absolute bottom-5 left-4 xmd:left-8 w-fit bg-blue-600 hover:bg-blue-700 text-[#ffffff] px-5 py-2 rounded-full text-sm transition-all duration-300">
                  Buy Airtime
                </button>
              </Link>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default First_Section;
