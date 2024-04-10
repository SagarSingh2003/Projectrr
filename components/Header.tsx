'use client'

import AccountInfo from "./Header/AccountInfo";
import logo from '../public/assets/logo.png';
import Image from "next/image";
import { useRef } from "react";

const Header = () => {

    const sectionRef = useRef(null);

    
    return(
        <section className="mt-[10px] w-screen h-[60px] justify-between  flex flex-row items-center pt-[10px] px-[15px] pb-[20px]">
            <h1 className="h-[20px] font-extrabold flex ">
                <span className="pr-[10px] text-[#4285F4]">Projectrr</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="25px"  viewBox="0 0 21 21"><g fill="none" fillRule="evenodd" stroke="#4182f4" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 14.5V4.485h-14V14.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1m-9 1l-2 3.5m6-3.5l2 3m-13-14h18"></path><path d="M10.499 2.498a2.005 2.005 0 0 1 1.995 1.853l.006.149l-4-.002c-.001-1.105.894-2 1.999-2"></path></g></svg>           
            </h1>  
            <section className="w-full flex items-center justify-center max-[602px]:justify-end  max-[602px]:pr-[10px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" className="max-[602px]:bg-[#FFFFFF] max-[602px]:h-[25px] max-[602px]:p-[0px] p-[10px] box-content bg-[#F1F3F4] rounded "><g fill="none" stroke="#000000"><circle cx="11" cy="11" r="6"/><path strokeLinecap="round" d="m20 20l-3-3"/></g></svg>
                <input type="text" ref={sectionRef}   aria-placeholder="Search By Name" placeholder="search by name"  className=" max-[602px]:hidden max-[1076px]:w-[50%] border-transparent w-[700px] px-[10px] h-[50px] text-black  flex items-center  rounded border-[#F1F3F4] bg-[#F1F3F4] ring-[0px] ring-inset-[0px] focus:ring-inset-none" />
                
            </section>
            <AccountInfo />
        </section>
    )
}

export default Header;