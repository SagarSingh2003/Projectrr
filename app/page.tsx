import Header from "../components/Header";
import CreateNewProjectComponent from "@/components/CreateNewProjectComponent";
import AllProjectsComponent from "@/components/AllProjectsComponent";
import { RedirectToSignIn, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { currentUser } from '@clerk/nextjs';
import { redirect } from "next/navigation";
 

export default async function Home() {

  const user = await currentUser();
  const userId = user?.emailAddresses[0].emailAddress;
 
  if (!user) redirect('/sign-up')
  
  console.log("USER LLL"  , user.emailAddresses[0].emailAddress);

  

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
