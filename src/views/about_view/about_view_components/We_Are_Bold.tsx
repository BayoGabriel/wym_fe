import appName from "@/src/constants/data/App_Name";

const We_Are_Bold = () => {
  return (
    <div className="w-full bg-[#F9FAFB]">
      <div className="flex flex-col w-[95%] max-w-screen-2lg 3xl:max-w-xlg mx-auto items-center justify-center  xl:px-0 px-[25px] lg:py-[62px] py-[1px]">
        <div className="font-[500] font-aeonik lg:text-[60px] text-center text-blackb  text-[24px] leading-[30px] xl:w-[860px] xl:py-[24px] pb-[24px] xl:pb-[64px] flex lg:leading-[64px]">
          <span>
            We are <span className="text-secondary">{appName}</span>: Shaping the
            Future of Payments
          </span>
        </div>

        <div className="flex w-[100%] flex-wrap justify-center xl:items-center text-blackb mb-10">
          <div className="xl:w-[50%] xl:h-[381px] lg:w-[45%] w-full bg-[#EBF5F8]  xl:pl-[70px] xl:pr-[10px] p-[40px]">
            <h1 className="pb-[8px] xl:text-[40px] text-[24px] font-aeonik font-[500]">
              Vision
            </h1>
            <p className="lg:text-[18px] text-[14px] text-[#344054] xl:w-[90%] font-[300]">
              To make payment easy, efficient, and accessible to all. {appName}
              is building a bold new way to pay, save, and manage money where
              every transaction is fast, reliable, and effortless. Our goal is
              to create a financial world that includes everyone, everywhere.
            </p>
          </div>
          <div className="bg-[#EEFFDE] xl:w-[50%] xl:h-[381px] lg:w-[45%] w-full xl:pl-[70px] xl:pr-[10px] p-[40px]">
            <h1 className="pb-[8px] xl:text-[40px] text-[24px] font-aeonik font-[500]">
              Mission
            </h1>
            <p className="lg:text-[18px] text-[14px] text-[#344054] xl:w-[90%] font-[300]">
              To redefine and simplify financial interactions for everyone.
              {" "}
              {appName} aims to empower individuals through cutting-edge,
              user-friendly solutions, making transactions seamless, efficient,
              and accessible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default We_Are_Bold;
