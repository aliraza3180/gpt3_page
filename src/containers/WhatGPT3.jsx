import React from "react";
import Feature from "../components/Feature";

const WhatGPT3 = () => {
  return (
    <div
      id="wgpt3"
      className="bg_wgpt_gradient md:my-12 md:mx-24 sm:mx-12 sm:my-6 my-3 xs:mx-6 flex flex-col p-9 xl:mx-60 xl:my-36"
    >
      <div className="flex">
        <Feature
          title="What is GPT-3"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
          id="primary"
        />
      </div>
      <div className="flex sm:flex-row flex-col justify-between items-center mt-16 mx-8 gap-8">
        <h1 className="gradient__text font-poppins font-medium lg:text-4xl  sm2:text-3xl  sm:text-2xl text-lg xs1:max-w-lg lg:leading-[3rem]">
          The possibilities are beyond your imagination
        </h1>
        <p className="text-[#FF8A71] font-poppins font-normal lg:text-base text-sm ">
          Explore The Library
        </p>
      </div>
      <div className="flex sm:flex-row flex-col mt-8">
        <Feature
          title="Chatbots"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
        />
        <Feature
          title="Knowledgebase"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
        <Feature
          title="Education"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
