import React from "react";
import { google, slack, atlassian, dropbox, shopify } from "../assets/index";
const Brand = () => {
  return (
    <div className="section__padding">
      <div className="flex flex-wrap justify-center gap-16 items-start">
        <img
          src={google}
          alt="google"
          className="max-w-[150px] min-w-[120px] "
        />
        <img src={slack} alt="slack" className="max-w-[150px] min-w-[120px] " />
        <img
          src={atlassian}
          alt="atlassian"
          className="max-w-[150px] min-w-[120px] "
        />
        <img
          src={dropbox}
          alt="dropbox"
          className="max-w-[150px] min-w-[120px] "
        />
        <img
          src={shopify}
          alt="shopify"
          className="max-w-[150px] min-w-[120px] "
        />
      </div>
    </div>
  );
};
export default Brand;
