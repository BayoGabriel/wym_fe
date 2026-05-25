interface First_Section_Heading_Props {
  title: string;
  description: string;
  containerClass: string;
  buttonText1?: string;
  btn1Style?: string;
  btn2Style?: string;
  btn1Action?: () => void;
  btn2Action?: () => void;
  buttonText2?: string;
  textStyle?: string;
  headingStyle?: string;
}

const First_Section_Heading = ({
  title,
  description,
  containerClass,
  buttonText1,
  buttonText2,
  btn1Style,
  btn2Style,
  btn1Action,
  btn2Action,
  headingStyle,
  textStyle,
}: First_Section_Heading_Props) => {
  const hasButtons = buttonText1 || buttonText2;

  return (
    <div className={containerClass ? containerClass : ""}>
      <h1
        className={`xmd:w-[90%] mx-auto text-center pb-[14px] ${
          headingStyle
            ? headingStyle
            : " font-aeonik  xmd:text-[38px] text-[30px] leading-[38px] xmd:leading-[48px] font-[500]"
        }`}
      >
        {title}
      </h1>
      <div className="flex justify-center text-center lg:pb-[20px]">
        <p
          className={`md:text-[18px] xmd:w-[70%] mx-auto text-[16px] px-auto flex lg:w-[768px] w-[80%] text-[#667085] xl:w-[906px] text-center xl:pb-0 pb-[29px] leading-[1.45rem] px-[20px] ${textStyle}`}
        >
          {description}
        </p>
      </div>
      {hasButtons && (
        <div className="flex items-center justify-center gap-4 pb-6 lg:pb-[40px]">
          {buttonText1 && (
            <button
              onClick={btn1Action}
              className={`${btn1Style} border px-4 py-2 text-[16px] max-md:text-[12px] rounded-[4px]`}
            >
              {buttonText1}
            </button>
          )}
          {buttonText2 && (
            <button
              onClick={btn2Action}
              className={`${btn2Style} border px-4 py-2 text-[16px] max-md:text-[12px] rounded-[4px]`}
            >
              {buttonText2}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default First_Section_Heading;
