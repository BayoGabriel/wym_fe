import SimpleFlex from "../../../components/SimpleFlex";
import { HomeSeamless } from "../../../assets";

const Home_Seamless_Section = () => {
  return (
    <section className="bg-[#F4F3EF] ">
      <SimpleFlex
        flexStyle="flex-col-reverse lmd:flex-row-reverse"
        allTextStyles={{
          textContainerStyle: "grid gap-6",
          extra: (
            <div className="flex items-center gap-2">
              <p className="font-montserrat tracking-[0.2rem] text-base">
                INTEGRATION
              </p>
              <div className="w-[10rem] h-1 bg-gradient-to-tr from-[#FFA034] via-[0D0D0D] to-[#0D0D0D00]"></div>
            </div>
          ),
          heading: {
            text: "Seamlessly Build your banking experience with  ",
            spanHeader: "Bravoo",
            spanStyle: "text-[#C16A00]",
            subHeadingText: true,
            subHeadingStyle: "text-black",
          },
          paragraph: {
            text: "Bravoo empowers you to customize and enhance your banking journey. With intuitive tools, flexible options, and real-time support, we make managing your finances effortless and efficient.",
            textStyle: "text-[#424242] text-lg",
          },
        }}
        imgStyles={{
          img: HomeSeamless,
          imgContainerStyle: "w-full sm:w-[70%] lmd:w-[40%]",
        }}
        btnProps={{
          btnStyle: "bg-[#ADF802] text-[#4C5C75]",
          color: "#4C5C75",
        }}
      />
    </section>
  );
};

export default Home_Seamless_Section;
