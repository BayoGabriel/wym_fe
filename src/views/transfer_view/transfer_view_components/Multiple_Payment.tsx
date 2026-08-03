import Lock_Icon from "@/src/assets/svgs/Lock_Icon";
import { MultiplePayment } from "@/src/assets";
import appName from "@/src/constants/data/App_Name";
import Image from "next/image";

const Multiple_Payment = () => {
  const multiplePaymentData = [
    {
      title: "Maximize efficiency",
      details: `Streamline large-scale payments with ${appName} Bulk Transfer, reducing administrative workload.`,
    },
    {
      title: "Customizable",
      details:
        "Tailor versatile bulk transfers to your specific needs, including payroll processing, supplier payments, and more.",
    },
    {
      title: "Scalability",
      details:
        "Accommodate growing business needs with scalable bulk transfer solutions, supporting your company's expansion.",
    },
  ];
  return (
    <section className=" py-12 xmd:py-20 bg-[#f9fafe] mt-[-40px]">
      <div className="flex flex-col gap-10 lg:flex-row justify-between max-w-screen-2lg 3xl:max-w-xlg w-[95%] mx-auto">
        <div className="w-full lg:w-[75%] flex flex-col gap-10 pr-4 md:pr-8 lg:pr-12">
          <p className="xmd:text-6xl font-[500] font-aeonik text-[30px] ">
            Simplify multiple payments with {appName} Bulk Transfer
          </p>
          <div className="flex-1 flex justify-between flex-col gap-4">
            {multiplePaymentData.map((item, index) => (
              <div className="flex flex-col gap-2" key={index}>
                <div className="flex gap-4 items-center">
                  <Lock_Icon />
                  <h5 className="font-[500] text-xl">{item.title}</h5>
                </div>
                <p>{item.details}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="h-auto hidden lg:block">
          <Image
            src={MultiplePayment}
            alt="referral"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Multiple_Payment;
