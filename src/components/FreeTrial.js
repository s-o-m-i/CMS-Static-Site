import React from 'react'

const FreeTrial = () => {
  return (
    <>
    <div className="md:container md:mx-auto my-36">
        <div className="grid grid-cols-12 gap-8  items-center">
        <h1 className="text-[60px] font-semibold text-[#2c3e4f]
        col-span-5
        ">Get a 7-day <br/> <span className="text-pink-400"> free trial</span></h1>
<div className="trail-box 
bg-white rounded-[16px] shadow-[0_0_20px_rgba(0,0,0,0.04)] py-[50px] pr-[45px] pl-[45px]
 relative
border-4 border-[#f8e9ed]
 col-span-7
">
    <p className="text-[#2c3e4f] text-[18px] leading-9">Create an October CMS account and get a free license. Unrestricted and loaded with all our features, it's suitable for any project, whether personal or commercial. Begin your journey with October CMS today.</p>

    <button type="button" className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-3 text-center me-2 mt-8 mb-2 w-[150px]">Get Started</button>
</div>

        </div>


    </div>
    </>
  )
}

export default FreeTrial