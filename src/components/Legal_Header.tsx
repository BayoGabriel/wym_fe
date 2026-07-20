import React from "react";
import appName from "../constants/data/App_Name";

interface headerProps {
  subHeader?: string;
  header?: string;
  subText?: string;
}

const Legal_Header = ({
  subHeader = " Current as of 02 July 2025",
  header = "Privacy Policy",
  subText = `Your privacy is important to us at ${appName}. We respect your privacy regarding any information we may collect from you across our website.`,
}: headerProps) => {
  return (
    <div className="text-center my-[5rem]">
      <h6 className="text-secondary font-[600] text-[16px] my-0">
        {subHeader}
      </h6>
      <h4 className="lg:text-[48px] text-[36px] font-[500] font-aeonik mt-[0rem] mb-[1rem] text-[#101828]">
        {header}
      </h4>
      <p className="text-[#667085] text-[14px] lg:text-[18px] xl:w-[768px] mx-auto">
        {subText}
      </p>
    </div>
  );
};

export default Legal_Header;
