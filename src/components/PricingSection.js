import React from "react";
import { FaCheck } from "react-icons/fa6";
const PricingSection = () => {
  return (
    <div className="md:container md:mx-auto ">
      <div className="grid grid-cols-3 gap-4">
        <div
          className={`bg-white shadow-xl rounded-lg py-5 px-5 w-[200px] lg:w-[350px] h-[450px] relative `}
        >
          <div className="flex items-center gap-4 mt-0">
            <div className={`w-[10px] h-[10px] blur-[5px] bg-[#e80a8d]`}></div>
            <p className={`text-lg font-semibold text-[#e80a8d]`}>Basic Plan</p>
          </div>

          <div className="flex items-end gap-2 my-8 relative">
            <p className={`text-[42px] font-semibold text-[#344767]  gap-2`}>
              $100
              <span className={`text-[14px]  text-[#2d2d2d] font-medium`}>
               / monthly
              </span>
            </p>
          </div>

          <div className="flex items-center gap-4 mt-1">
            <div className="text-[#e80a8d] text-sm">
              <FaCheck />
            </div>
            <p className="text-sm font-medium">10 Reports</p>
         
          </div>
          <div className="flex items-center gap-4 mt-1">
            <div className="text-[#e80a8d] text-sm">
              <FaCheck />
            </div>
            <p className="text-sm font-medium">Unlimited Downloads</p>
         
          </div>
          <div className="flex items-center gap-4 mt-1">
            <div className="text-[#e80a8d] text-sm">
              <FaCheck />
            </div>
            <p className="text-sm font-medium">20 Emails Per Month</p>
         
          </div>
          <div className="flex items-center gap-4 mt-1">
            <div className="text-[#e80a8d] text-sm">
              <FaCheck />
            </div>
            <p className="text-sm font-medium">Unlimited Downloads</p>
         
          </div>


          <button
  class="absolute left-5 right-5 bottom-5 py-2 px-3 border border-pink-500 rounded-md text-white  
         bg-gradient-to-r from-purple-700 to-pink-500 
         hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-700 
         hover:text-white transition duration-300 ease-in-out">
  Get Plan
</button>

        </div>
     
      </div>
    </div>
  );
};

export default PricingSection;
