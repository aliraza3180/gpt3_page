import React from "react";

const Button = ({ title, type, href }) => {
  let className = "";
  if (type === "primary") {
    className =
      "rounded-[6px] border-[1px] border-[#dd2600] px-4 py-2 text-center hover:bg-[#ff4820] hover:border-transparent uppercase ";
  } else if (type === "secondary") {
    className =
      "bg-[#dd2600] rounded-[6px] border-0 outline-none px-4 py-2 text-center uppercase opacity-100 hover:bg-[#ff4820]";
  } else if (type === "tertiary") {
    className =
      "rounded-[6px] border-[1px] border-[#dd2600] px-6 py-2 text-center hover:bg-[#ff4820] hover:border-transparent uppercase ";
  } else if (type === "yes") {
    className =
      "bg-[#dd2600] rounded-[6px] border-0 outline-none px-6 py-2 text-center uppercase opacity-100 hover:bg-[#ff4820]";
  } else {
    className =
      "bg-[#FF4820] border-0 outline-none xs:px-4 xs:py-5 py-3 px-4 text-center uppercase opacity-100 hover:bg-[#dd2600] text-white xs:rounded-[4px] rounded-full";
  }

  return (
    <button className={className}>
      <a href={href}>{title}</a>
    </button>
  );
};
export default Button;
