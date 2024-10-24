"use client"
import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react';


const DropDown = () => {
    const [isOpen,setIsOpen] = useState(false)
  return (
    <>
    <div className="relative">
    <div className="flex items-center gap-2 " onClick={()=>setIsOpen(!isOpen)}>
        <h5 className="">Contact</h5>
        {/* <IoIosArrowDown /> */}
</div>

{isOpen && (
<div className="dropdown-menu ">
    <div className="auth-field">
<a href="">Register</a>
    </div>
    <div className="auth-field">
<a href="">Sign in</a>
    </div>
</div>

)}
</div>
    </>
  )
}

export default DropDown