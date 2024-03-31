import React from "react";
import { Brand, Cta, Navbar } from "./components";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from "./containers";
import "./index.css";

const App = () => (
  <div className="box-border p-0 m-0 scroll-smooth bg-[var(--color-bg)] w-full">
    <div
      className="gradient__bg 2xl:max-w-[1440px] mx-auto w-full"
      //       className="bg-gradient-to-r from-[#002853] to-[#040C18];
      // "
    >
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility />
    <Cta />
    <Blog />
    <Footer />
  </div>
);

export default App;
