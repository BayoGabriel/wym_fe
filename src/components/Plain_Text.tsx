import React from "react";

interface textProps {
  hasTitle?: boolean;
  list?: string[];
  paragraphs?: string[];
  title: string;
  hasList?: boolean;
}
const Plain_Text = ({
  hasTitle = true,
  list = [""],
  paragraphs = ["paragraph text one", "paragraph text two"],
  title = "Plain text title",
  hasList = false,
}) => {
  return (
    <div className="my-[3rem]">
      {hasTitle && (
        <h4 className="text-[#101828] text-[30px] font-[500] leading-[38px] mb-[1rem] ">
          {title}
        </h4>
      )}
      {paragraphs.map((item, key) => (
        <>
          <p
            key={key}
            className="text-[#344054] font-[400] text-[14px] lg:text-[16px] leading-[28px] my-[1rem] "
          >
            {item}
          </p>
        </>
      ))}
      {hasList && (
        <ul className="list-decimal px-[30px]">
          {list.map((list, key) => (
            <li
              className="text-[#344054] font-[400] text-[16px] leading-[28px]"
              key={key}
            >
              {list}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Plain_Text;
