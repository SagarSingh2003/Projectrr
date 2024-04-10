import Header from "../components/Header";
import CreateNewProjectComponent from "@/components/CreateNewProjectComponent";
import AllProjectsComponent from "@/components/AllProjectsComponent";
import { RedirectToSignIn, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";


export default function Home() {
  return (
    <>

        <section className=" bg-[#FFFFFF] w-screen h-full ">
          <Header />
          <CreateNewProjectComponent />
          <AllProjectsComponent />
        </section>
    </>
  );

  
}
