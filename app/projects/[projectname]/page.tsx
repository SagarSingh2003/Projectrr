'use client'

import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  
import { redirect, useParams } from "next/navigation";
import router from "next/router";
import { useEffect, useRef } from "react";

export default function Page(){

    const params = useParams<{ projectname : string}>()
    const canvasRef =  useRef();
    

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');
        
        context.fillStyle = 'white';
    }, []);
    
    return(
        <section className="flex flex-col h-screen w-screen ">

            <section className="fixed top-[30px] left-[20px] w-[200px]">
                <Menubar>
                <MenubarMenu>
                        <MenubarTrigger>{params.projectname}</MenubarTrigger>
                    <MenubarContent>
                    <MenubarItem>
                        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>New Window</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Share</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Print</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                        <MenubarTrigger >Go Back</MenubarTrigger>
                    
                </MenubarMenu>
                </Menubar>

            </section>

            <section className=" h-full w-full ">
                <canvas ref={canvasRef} id="canvas"  className=" h-[100%] w-[100%]  border shadow-lg shadow-[#E1DCD6] "></canvas>
            </section>   
    
        </section>
    )
}