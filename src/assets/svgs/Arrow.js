import React from "react";

const Arrow = ({ color = "#000F1F" }) => {
  return (
    <svg
      width="12"
      height="23"
      viewBox="0 0 12 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.2894 12.2152L5.05145 17.4532L3.74219 16.1439L8.32553 11.5606L3.74219 6.97723L5.05145 5.66797L10.2894 10.9059C10.463 11.0796 10.5605 11.315 10.5605 11.5606C10.5605 11.8061 10.463 12.0416 10.2894 12.2152Z"
        fill={color}
      />
    </svg>
  );
};

export default Arrow;
