import React, { useState } from "react";
import "../index.css";
import logo from "../assets/logo.svg";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Button from "./Button";

const Navlinks = [
  { link: "#home", text: "Home" },
  { link: "#wgpt3", text: "What is GPT?" },
  { link: "#possibility", text: "Open AI" },
  { link: "#features", text: "Case Studies" },
  { link: "#blog", text: "Library" },
];

const Navbar = () => {
  const [menuShow, setMenuShow] = useState(false);

  return (
    <header className="flex flex-row justify-between items-center px-8 ss:px-12 sm:px-16 py-8 navbar">
      <div className="flex flex-auto justify-start items-center">
        <div className="mr-8 object-fill">
          <img src={logo} alt="logo" className="w-24 h-auto object-contain" />
        </div>
        <nav className="sm1:flex sm1:flex-row flex-1 sm1:justify-start hidden items-center gap-4 sm:gap-5">
          {Navlinks.map((nav) => (
            <p
              key={nav.text}
              className="text-white font-poppins lg:text-[16px] text-[14px] leading-6 capitalize my-0 cursor-pointer opacity-85"
            >
              <a href={nav.link} className="hover:text-[#FF8A71]">
                {nav.text}
              </a>
            </p>
          ))}
        </nav>
      </div>
      <div className="text-white font-poppins lg:text-[16px] text-[14px] leading-6 my-0 cursor-pointer ss:flex justify-end gap-6 items-center hidden ss:mr-28 sm1:mr-0">
        <Button type="primary" title="Sign in" />
        <Button type="secondary" title="sign up" />
      </div>
      <div className="z-20 flex sm1:hidden">
        {menuShow ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setMenuShow(false)}
            className="cursor-pointer absolute right-0 top-10 mr-6 z-30"
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setMenuShow(true)}
            className="cursor-pointer right-0 top-10 z-40"
          />
        )}
        <nav id="mobile-menu">
          {menuShow && (
            <React.Fragment className="absolute top-10 bg-red-600">
              <ul
                className={`absolute top-0 left-0 flex flex-col items-center gap-12 w-screen h-screen bg-gray-900/75 backdrop-filter backdrop-blur-md pt-32`}
              >
                {" "}
                {Navlinks.map((nav) => (
                  <li className="text-white font-poppins lg:text-[16px] text-[14px] leading-10 capitalize cursor-pointer opacity-85">
                    <a href={nav.link} onClick={() => setMenuShow(false)}>
                      {nav.text}
                    </a>
                  </li>
                ))}
                <div className="text-white font-poppins text-[14px] leading-6 my-0 cursor-pointer ss:hidden justify-end gap-3 items-center flex flex-col text-nowrap">
                  <Button type="tertiary" title="Sign In" />

                  <Button type="yes" title="Sign up"></Button>
                </div>
              </ul>
            </React.Fragment>
          )}
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
