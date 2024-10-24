import DropDown from '@/ui/DropDown'
import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  return (
    <>
   
    <div className=" flex items-center justify-between p-4 md:p-6
     lg:py-4 text-[white] bg-[#181C14] rounded-lg mt-5
     
     ">
        <div className="logo text-4xl font-medium">CMS</div>
        <nav className="flex items-center space-x-6">

        <a href="" className="text-[16px]">Pricing</a>
        <a href="" className="text-[16px]">Partners</a>
        <a href="" className="text-[16px]">Company</a>

        </nav>
        <DropDown/>
    </div>
 
    </>
  )
}

export default Header