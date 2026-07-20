import { Convert03, Payment01, Scan02 } from "../assets";
import appName from "../constants/data/App_Name";
import Make_Payment_Icon from "../assets/svgs/Make_Payment_Icon";
import Make_Payment_Icon_Two from "../assets/svgs/Make_Payment_Icon_Two";
import Make_Payment_Icon_Three from "../assets/svgs/Make_Payment_Icon_Three";
import Link from "next/link";
import Image from "next/image";

interface Make_Payment_Props {
  styles: {
    btn: string;
    bg: string;
    cardbg?: string;
    iconColor?: string;
  };
}

const Make_Payment = ({ styles }: Make_Payment_Props) => {
  const makePaymentData = [
    {
      number: "01",
      img: Payment01,
      icon: <Make_Payment_Icon color={styles.iconColor} />,
    },
    {
      number: "01",
      icon: <Make_Payment_Icon_Two color={styles.iconColor} />,
      img: Scan02,
    },
    {
      number: "01",
      icon: <Make_Payment_Icon_Three color={styles.iconColor} />,
      img: Convert03,
    },
  ];
  return (
    <section className={`hidden md:block ${styles.bg} mt-[1.8rem] `}>
      <div className="w-[95%] containerclass max-w-screen-2lg 3xl:max-w-xlg mx-auto py-12 xmd:py-[4rem]">
        <div className="pb-12 ">
          <p className="text-[#0357EE]">SCAN & PAY</p>
          <div className="flex flex-col gap-4 md:flex-row justify-between md:items-center mt-4">
            <h4 className="md:w-[60%] xl:text-left xl:leading-[58px] lg:text-[50px] lg:leading-[50px] xmd:text-[35px] font-[500] text-left text-[30px] leading-[36px] capitalize font-aeonik">
              Make Payments, Transfers, and more in 3 simple steps
            </h4>
            <Link
              href={"/download"}
              className={`${styles.btn} py-3 px-6 rounded-lg font-semibold w-fit`}
            >
              Try {appName}
            </Link>
          </div>
        </div>

        <div
          className={`${styles.cardbg} rounded-lg py-6 grid grid-cols-3 gap-8 xmd:gap-0 flex-wrap md:flex-row justify-between relative`}
        >
          {makePaymentData.map((item, index) => (
            // <div className='flex flex-col px-6 relative w-full md:w-[50%] xmd:w-[33.33%] justify-between gap-4'>
            <div className="flex flex-col px-6 relative  justify-between gap-4" key={index}>
              <div>
                <p className="text-[#D9D9D9] font-[500] text-5xl xmd:text-7xl tracking-tighter">
                  0{index + 1}
                </p>
                {/* <img src={styles.cardbg ? item.icon : item.icon2} alt="" className='mt-[-1.6rem] w-14 pl-2'/> */}
                <div className="mt-[-1.6rem] w-14 pl-2">{item.icon}</div>
              </div>
              <div className="w-[90%] mx-auto h-[80%] my-auto flex-1 flex ">
                <Image src={item.img} alt="card" className="object-contain" />
              </div>
              {index < makePaymentData.length - 1 && (
                <div className="w-[2px] h-[50%] absolute top-[50%] bottom-[-50%] translate-y-[-50%] right-0 bg-gradient-to-b from-[#F5F5F5] via-[#CBCBCB] to-[#F5F5F5]"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Make_Payment;
