import Image from "next/image";

interface Double_Image_Props {
  img1: any;
  img2: any;
  headingText: string;
}
const Double_Image = ({ img1, img2, headingText }: Double_Image_Props) => {
  return (
    <div className="flex flex-col gap-4 w-[95%] max-w-screen-2lg 3xl:max-w-xlg mx-auto py-12 xmd:pt-[3rem] xl:pt-[4rem] xmd:pb-[5rem]">
      <h4 className="text-[45px] max-md:text-[46px] max-md:font-[600] w-[65%] font-aeonik font-[800] leading-none m-4">
        {headingText}
      </h4>
      <div className="w-full flex gap-4 max-md:flex-col md:flex-grow">
        <div className="w-full md:w-[60%]">
          <Image src={img1} className="w-full" alt="img1" />
        </div>
        <div className="w-full md:w-[40%] bg-[#F4F3F5] px-2 pt-10 rounded-[42px] max-md:rounded-[10px] md:px-5 md:pt-20 flex flex-end">
          <Image src={img2} className="w-full" alt="img1" />
        </div>
      </div>
    </div>
  );
};

export default Double_Image;
