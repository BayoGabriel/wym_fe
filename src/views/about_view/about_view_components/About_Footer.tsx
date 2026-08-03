import Download_Footer from "@/src/components/Download_Footer";
import appName from "@/src/constants/data/App_Name";

const About_Footer = () => {
  return (
    <>
      <div className={`bg-[#010525]  py-[30px] px-[20px] pt-[40px]`}>
        <div className="xl:w-[1134px] mx-auto text-primary text-center">
          <h1 className="font-[600] font-aeonik my-[1rem] xl:mt-[3rem] text-[25px] xl:text-[58px]">
            We&apos;re at the beginning of our journey
          </h1>
          <p className=" xl:text-[20px] text-[14px] xl:w-[906px] mx-auto py-10 font-[100]">
            {`As we move forward on this journey, knowing the incredible opportunities that lie ahead, it's powerful to reflect on how far ${appName} has already come. Each milestone is a testament to our progress and a source of motivation for the bold goals and challenges that await us.`}
          </p>
          <div className="flex flex-wrap justify-evenly mt-[3rem]">
            <div className="">
              <h4 className="text-lemonColor xl:text-[60px] text-[25px] font-[600] ">
                4.5
              </h4>
              <p className="xl:text-[18px] text-[14px] font-[500] leading-[28px] ">
                Star ratings on App store
              </p>
            </div>
            <div className="">
              <h4 className="text-lemonColor text-[25px] xl:text-[60px] font-[600] ">
                20,000+
              </h4>
              <p className="xl:text-[18px] text-[14px] font-[500] leading-[28px] ">
                Verified Users
              </p>
            </div>
            <div className="mt-[1.5rem] md:mt-[0] lg:mt-[0]">
              <h4 className="text-lemonColor xl:text-[60px] text-[25px] font-[600] ">
                1.5B
              </h4>
              <p className="xl:text-[18px] text-[14px] font-[500] leading-[28px] ">
                Naira Transactions
              </p>
            </div>
          </div>
        </div>
      </div>
      <Download_Footer bgColor="bg-[#010525]" textColor="text-white" />
    </>
  );
};

export default About_Footer;
