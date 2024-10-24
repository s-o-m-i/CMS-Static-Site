
import React from 'react'


const Header = () => {
  return (
    <>
   
    <div className=" flex items-center justify-between p-4 md:p-6
     lg:py-4 rounded-lg 
     relative z-[999]
     text-[white]
     ">
        <div className="logo text-4xl font-medium">CMS</div>
        <nav className="flex items-center space-x-6">

        <a href="" className="text-[16px]">Pricing</a>
        <a href="" className="text-[16px]">Partners</a>
        <a href="" className="text-[16px]">Company</a>

        </nav>
        <div className="text-[white] bg-[#181C14] p-4 md:p-6
     lg:py-4 rounded-lg">
        <h5 className="">Contact Us</h5>
        
</div>
    </div>
 
    </>
  )
}

export default Header