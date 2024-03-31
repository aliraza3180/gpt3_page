import React from "react";

const Article = ({ imageUrl, date, title }) => (
  <div className="bg-[#042C54] flex flex-col w-[100%] h-[100%] [@media_screen_and(max-width:990px)]:w-[48%] [@media_screen_and(max-width:700px)]:w-full ">
    <div className="bg-[#040C18] w-[100%] h-[100%] [@media_screen_and(max-width:990px)]:h-[250px]">
      <img src={imageUrl} alt="blog image" className="w-[100%] h-[100%]" />
    </div>
    <div className="flex flex-col justify-between h-[100%] px-6 py-4">
      <div className="flex flex-col gap-4">
        <p className="text-white text-xs font-medium font-poppins">{date}</p>
        <h3 className="font-poppins font-semibold text-sm  xs1:text-lg xs1:leading-6 leading-5 text-white cursor-pointer mb-20">
          {title}
        </h3>
      </div>
      <p className="text-white text-xs font-medium font-poppins py-4 cursor-pointer">
        Read Full Article
      </p>
    </div>
  </div>
);

export default Article;
