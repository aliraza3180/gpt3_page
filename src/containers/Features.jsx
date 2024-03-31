import React from "react";
import { Feature } from "../components";

const featuresData = [
  {
    title: "Improving end distrusts instantly ",
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
  {
    title: "Become the tended active",
    text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
  },
  {
    title: "Message or am nothing",
    text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
  },
  {
    title: "Really boy law county",
    text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.",
  },
];

const Features = () => (
  <section className="flex flex-col px-11 py-8 xl:px-80" id="features">
    <div className="flex sm:flex-row flex-col gap-20 sm:px-14">
      <div className="flex flex-col gap-5">
        <h1 className="gradient__text font-poppins font-medium lg:text-[2.25rem]  sm2:text-3xl  sm:text-2xl text-lg xs1:max-w-lg lg:leading-[3.3rem] ">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p className="text-[#FF8A71] font-poppins font-light">
          Request Early Access to Get Started
        </p>
      </div>
      <div className="flex flex-col">
        {featuresData.map((item, index) => (
          <Feature
            key={item.title + index}
            text={item.text}
            title={item.title}
            id="primary"
          />
        ))}
      </div>
    </div>
  </section>
);

export default Features;
