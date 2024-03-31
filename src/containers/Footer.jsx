import React from "react";
import logo from "../assets/logo.svg";

const footerData = [
  {
    title: "Links",
    content: [
      { name: "Overons" },
      { name: "Social Media" },
      { name: "Counters" },
      { name: "Contact" },
    ],
  },
  {
    title: "Company",
    content: [
      { name: "Terms & Conditions" },
      { name: "Privacy Policy" },
      { name: "Contact" },
    ],
  },
  {
    title: "Get In Touch",
    content: [
      { name: "Crechterwoord K12 182 DK Alknjkcb" },
      { name: "+92 325-0573249" },
      { name: "alidev.08@gmail.com" },
    ],
  },
];

const Footer = () => (
  <div className="flex flex-col justify-center items-center lg:px-24 px-6 bg-[#031B34] mt-12">
    <div className="w-[100%] mb-12 text-center py-16 ">
      <h1 className="gradient__text  lg:text-[3rem] sm2:text-[2.25rem] sm:text-[1.875rem] text-[1.25rem] font-poppins font-semibold text-center">
        Do you want to step in to the <br className="hidden sm:block" /> future
        before others
      </h1>
    </div>
    <div className="flex justify-center items-center mb-40 border p-4 text-[#FF8A71] hover:bg-[#FF8A71] hover:text-[#000000]">
      <p className=" font-poppins font-light text-xs sm:text-base ">
        Request Early Access
      </p>
    </div>
    <div
      className="flex sm:flex-row 
    flex-col justify-between md:gap-40 sm:gap-32 gap-14"
    >
      <div className="flex flex-col py-7 mx-auto">
        <img src={logo} alt="" className="mb-4 w-[7.375rem] h-8" />
        <p className="max-w-40 text-[#FF8A71] text-xs">
          Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
        </p>
      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap text-white">
        {footerData.map((data) => (
          <div className="flex flex-col gap-4 py-7 px-6 lg:px-10">
            {" "}
            <h4 className="text-base font-poppins font-semibold gradient__text">
              {data.title}
            </h4>{" "}
            <ul>
              {" "}
              {data.content.map((list, index) => (
                <li
                  className={`font-poppins text-sm font-normal ${
                    index !== data.content.length - 1 ? "mb-4" : "mb-0"
                  } mb-4 max-w-32 hover:text-[#FF8A71] text-[#81AFDD]`}
                >
                  {" "}
                  <a href=""> {list.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="w-full h-[1px] bg-gray-600" />
    <div className="text-white opacity-75 font-poppins font-normal py-4 text-center">
      © 2021 GPT-3. All rights reserved.
    </div>
  </div>
);

export default Footer;
