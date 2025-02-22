"use client";
import React, { useEffect } from "react";
import Header from "./Header";

import { waves } from "./waves";

const LandingPage = () => {
  useEffect(() => {
    waves();
  }, []);

  return (
    <>
      <div className="md:container md:mx-auto landing-page-height somiindex ">
        {/* <div className="waves" /> */}
        <div className="content text-center flex flex-col items-center pt-40  tracking-wide">
          <h1 className="text-[70px] font-semibold text-[#fff] leading-[1.2] ">
            Managing your <br /> content with CMS
          </h1>
          <p className="text-center text-[#fff]  text-[18px] leading-7  w-[55%] mt-5 z-[999]">
            An content management system Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatum et distinctio enim dicta recusandae
            dipisicing elit
          </p>

          <button className="group relative m-1 cursor-pointer overflow-hidden rounded-lg border-1 border-[#23303d] px-5 py-4 font-medium text-sm w-[160px] mt-8 bg-[#23303d]">
            <span className="ease absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-45 bg-[#fff] transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32"></span>
            <span className="ease relative text-[#fff] transition duration-300 group-hover:text-[#23303d]">
              Get Started
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
