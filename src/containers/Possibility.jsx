import React from "react";
import possibility from "../assets/possibility.png";

const Possibility = () => (
  <div
    className="flex sm:flex-row flex-col items-center md:gap-[8rem] gap-10 px-11 md:px-[6.75rem] xl:px-80"
    id="possibility"
  >
    <div className="max-w-[26.625rem] h-[100%]">
      <img src={possibility} alt="possibility" className="w-full h-full" />
    </div>

    <div className="flex flex-col md:max-w-[34rem] sm:mt-10 sm2:mt-24 lg:mt-32 md:gap-5 gap-4">
      <p className="text-[#71E5FF] font-poppins font-light text-xs sm:text-base">
        Request Early Access to Get Started
      </p>
      <h1 className="gradient__text font-poppins font-medium lg:text-[2.25rem]  sm2:text-3xl  sm:text-2xl text-lg lg:leading-[3.3rem]">
        The possibilities are beyond your imagination
      </h1>
      <h3 className="font-poppins font-normal xs1:text-base xs1:leading-6 text-xs leading-5 text-[#81afdd]">
        Yet bed any for travelling assistance indulgence unpleasing. Not
        thoughts all exercise blessing. Indulgence way everything joy alteration
        boisterous the attachment. Party we years to order allow asked of.
      </h3>
      <p className="text-[#FF8A71] font-poppins font-light text-xs sm:text-base">
        Request Early Access to Get Started
      </p>
    </div>
  </div>
);

export default Possibility;
