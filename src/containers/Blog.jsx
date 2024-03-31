import React from "react";
import { Article } from "../components";
import { blog01, blog02, blog03, blog04, blog05 } from "../assets/index";
const Blog = () => (
  <div
    className="flex flex-col sm2:px-16 sm2:py-[2rem] py-2rem px-8 gap-6 md:gap-0 mt-20"
    id="blog"
  >
    <div className="flex">
      <h1 className="gradient__text  lg:text-[3rem] sm2:text-[2.25rem] sm:text-[1.875rem] text-[1.25rem] font-poppins font-semibold ">
        A lot is happening,
        <br /> We are blogging about it.
      </h1>
    </div>
    <div className="flex sm2:flex-row flex-col-reverse gap-8 mt-12">
      <div className="flex-[0.75]">
        <Article
          imageUrl={blog01}
          date="Sep 26, 2021"
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
      </div>
      <div className="sm:grid sm:grid-cols-2 flex flex-col gap-8 flex-[1]">
        <Article
          imageUrl={blog02}
          date="Sep 26, 2021"
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
        <Article
          imageUrl={blog03}
          date="Sep 26, 2021"
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
        <Article
          imageUrl={blog04}
          date="Sep 26, 2021"
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
        <Article
          imageUrl={blog05}
          date="Sep 26, 2021"
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
      </div>
    </div>
  </div>
);

export default Blog;
