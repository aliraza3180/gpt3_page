import React from "react";

const Cta = () => (
  <div className="flex sm:flex-row flex-col items-center div_gradient justify-between lg:p-12 p-6 py-12 lg:px-24 lg:m-24 sm2:m-12 mt-14 rounded-[10px] gap-8 xl:mx-60 xl:my-36">
    <div className="flex flex-col">
      <p className="text-[#0E0E0E] font-poppins font-normal text-xs sm:text-base">
        Request Early Access to Get Started
      </p>
      <h1 className="text-[#000000] font-poppins font-semibold lg:text-2xl sm2:text-xl  sm:text-lg text-base ">
        Register today & start exploring the endless possiblities.
      </h1>
    </div>
    <div>
      <button className="bg-[#040C18] text-white py-4 px-8 rounded-full font-poppins hover:shadow-2xl hover:translate-y-0.5 transition-transform">
        Get Started
      </button>
    </div>
  </div>
);

export default Cta;
