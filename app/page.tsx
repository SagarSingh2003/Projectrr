'use client'

import Header from "../components/Header";
import CreateNewProjectComponent from "@/components/CreateNewProjectComponent";
import AllProjectsComponent from "@/components/AllProjectsComponent";
import {useUser } from "@clerk/nextjs";
import router from "next/router";
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
          <Header />
          <CreateNewProjectComponent userId={userId} />
          <AllProjectsComponent userId={userId} />
        </section>
    </>
  );

  
}
