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
        //@ts-expect-error
        const context = canvas?.getContext('2d');
        console.log("params......" , params.projectname);
        console.log(`params ...... ${String(params.projectname)}`)
        context.fillStyle = 'white';
    }, []);
    
    return(
        <section className="flex flex-col h-screen w-screen ">

           
            <section className="fixed top-[30px] left-[20px] min-w-[150px] flex items-center justify-center">
                <Menubar>
                <MenubarMenu>
                        <MenubarTrigger className="hover:bg-[#F1F5F9]">{ `${params.projectname.replace('%20' , " ")}` }</MenubarTrigger>
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
                </Menubar>

            </section>

            <section className=" h-full w-full ">
                {/* @ts-expect-error */}
                <canvas ref={canvasRef} id="canvas"  className=" h-[100%] w-[100%]  border shadow-lg shadow-[#E1DCD6] "></canvas>
            </section>   
    
        </section>
    )
}