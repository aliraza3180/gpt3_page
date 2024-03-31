import React from "react";
import Button from "../components/Button";
import people from "../assets/people.png";
import ai from "../assets/ai.png";
const Header = () => {
  return (
    <div
      id="home"
      className=" flex md:flex-row flex-col items-center sm:px-16 sm:py-[5rem] px-10 py-5rem gap-6 md:gap-0 mt-10 sm:mt-0"
    >
      <div className="ss:ml-20 md:ml-0 lg:ml-10">
        <h1 className="gradient__text  lg:text-[3rem] sm2:text-[2.25rem] sm:text-[1.875rem] text-[1.25rem] font-poppins font-semibold">
          Let's Build Something <br className="hidden md:block" /> amazing with
          GPT-3 <br className="hidden md:block" /> OpenAI
        </h1>
        <p className="text-[#81AFDD] md:text-[1.125rem] font-poppins font-normal mt-5 sm:text-[0.955rem] text-[0.665rem]">
          Yet bed any for travelling assistance indulgence unpleasing.{" "}
          <br className="hidden md:block" />
          Not thoughts all exercise blessing. Indulgence way{" "}
          <br className="hidden md:block" /> everything joy alteration
          boisterous the attachment. Party <br className="hidden md:block" /> we
          years to order allow asked of.
        </p>
        <div className="mt-5 flex flex-col xs:block items-center gap-4">
          <input
            type="email"
            placeholder="Your Email Address"
            className=" text-center bg-[#052D56] text-white sm:px-7 sm:py-5 px-4 py-3 xs:px-0 xs:py-5 mt-5 sm2:px-11 md:px-[80px] rounded-[4px]  hover:outline-[#FF4820] outline-none"
          />
          <Button title="Get Started" />
        </div>
        <div className="mt-7 flex flex-col xs:flex-row items-center gap-2">
          <img src={people} alt="people" />
          <p className="text-white md:text-[17px] font-poppins font-medium sm:text-[15px] text-[10px]">
            1,600 people requested access a visit in last 24 hours
          </p>
        </div>
      </div>

      <div className="-mr-9">
        <img
          src={ai}
          alt="ai"
          className="w-[100%] h-[100%] xs:max-w-[34.375rem]"
        />
      </div>
    </div>
  );
};

export default Header;
