import React from "react";
import "../index.css";

const Feature = ({ title, text, id }) => (
  <div
    className={`w-[100%] flex ${
      id === "primary" ? "sm:flex-row" : "sm:flex-col"
    } items-start justify-between xs1:m-4 my-4 mx-0 gap-y-10 flex-col`}
    id={id}
  >
    <div className="flex-1 xs1:max-w-28 mr-8">
      <div className="w-9 h-1 div_gradient box_sh mb-3" />
      <h1 className="font-poppins font-medium text-sm  xs1:text-lg xs1:leading-6 leading-5 text-white">
        {title}
      </h1>
    </div>
    <div className="flex-[2] max-w-96 flex">
      <p className="font-poppins font-normal xs1:text-sm xs1:leading-6 text-xs leading-5 text-[#81afdd]">
        {text}
      </p>
    </div>
  </div>
);

export default Feature;
