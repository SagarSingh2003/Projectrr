'use client'

import Header from "../components/Header";
import CreateNewProjectComponent from "@/components/CreateNewProjectComponent";
import AllProjectsComponent from "@/components/AllProjectsComponent";
import {useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
 

export default function Home() {


  
  const {user} = useUser();

  console.log('userrrrrr..........' , user);
  const userId = user?.emailAddresses[0].emailAddress;
 
  if (!user) redirect('/sign-up')
  
  console.log("USER LLL"  , user?.emailAddresses[0].emailAddress);

  

  return (
    <>
        <section className=" bg-[#FFFFFF] w-screen h-full ">
        <button className="p-[10px] ml-[10px] mt-[10px] " onClick={() => {
                // @ts-expect-error 
                window.location = "https://github.com/apps/codearena-v0-0-1/installations/new"
            }}>Authorize</button>
          <Header />
          <CreateNewProjectComponent userId={userId} />
          <AllProjectsComponent userId={userId} />
        </section>
    </>
  );

  
}
