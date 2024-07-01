'use client'

import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
  
import { useRef, useState } from "react";
import router from "next/router"

const api = "https://projectrr.vercel.app/"

export default function CreateNewProjectComponent ({userId } : {userId : any}) {
    
    const [showAlert , setShowAlert] = useState<{show : boolean , msg? : string}>({show : false});
    const [showCreateProjectBar , setShowCreateProjectBar] = useState(false);
    const [creationComplete , setCreationComplete ] = useState<{show : boolean , msg? : string}>({show : false});
    const [creationStarted , setCreationStarted] = useState(false);
    const nameOfProjectRef = useRef();

    if( creationComplete && creationComplete.show){
        // @ts-expect-error 
        router.push(`/projects/${nameOfProjectRef.current?.value}`)
    };

    //@ts-expect-error
    console.log(nameOfProjectRef.current?.value , "name of project");

    if (creationComplete && creationComplete.msg){
        setShowAlert({show : true , msg : "some network error occured please refresh"});
        setTimeout(() => setShowAlert({show : false}) , 4000);
    }

    if(showCreateProjectBar){

        return(
            <>
            <section className=" h-[450px] bg-[#F1F3F4] flex items-center justify-center">
                        <Card className="w-[500px]">
                        <CardHeader className="w-full flex items-center justify-center">
                            <CardTitle>Create project</CardTitle>
                            <CardDescription>Create a project , collaborate and turn your dreams into reality !</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form>
                            <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-col space-y-2.5">
                                    <Label  htmlFor="name">Name</Label>
                                    {/* @ts-expect-error */}
                                    <Input  ref={nameOfProjectRef} id="name" placeholder="Name of your project" />
                                    </div>
                                    {showAlert.show ?     
                                    <Alert variant="destructive">
                                        <ExclamationTriangleIcon className="h-4 w-4" />
                                        <AlertTitle>Error</AlertTitle>
                                        <AlertDescription>
                                            {showAlert.msg}
                                        </AlertDescription>
                                    </Alert> : null
                                    }
                            </div>
                            </form>
                        </CardContent>
                        <CardFooter className="flex flex-col justify-between gap-2 w-full ">
                            {creationStarted === true && creationComplete && !creationComplete.msg ? 
                             

                            <div role="status">
                                <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div>
                            : 
                            
                            <Button className="bg-[#3794FF] hover:bg-[#4285F4] w-full" onClick={() => {
                                // @ts-expect-error 
                                if(nameOfProjectRef.current.value && (nameOfProjectRef.current.value).trim() !== ""){
                                    
                                    // @ts-expect-error 
                                    createNewProject(nameOfProjectRef.current.value , userId , setCreationComplete , setCreationStarted );
                                    setCreationStarted(true);
                                }else{
                                    setShowAlert({show : true , msg : "please enter a project name"})
                                    setTimeout(() => {setShowAlert({show: false})} , 3000)
                                }
                            }}>Create</Button>}
                            <Button onClick={() => {setShowCreateProjectBar(false)}} variant="outline" className="w-full bg-[#D32529] hover:bg-[#991B1B] hover:text-white text-white">Cancel</Button>
                        </CardFooter>
                    </Card>          
            </section>
        
            </>
        )
    }
    return(
        <section className="h-[40%] bg-[#F1F3F4] flex items-center justify-center">
            <div onClick={() => {
                    setShowCreateProjectBar(true);
                }} className=" py-[10px] w-[250px] flex flex-col items-center" >
                    
                <div className="py-[10px] px-[5px] text-[14px]">
                    Start a new project 
                </div>
                <div className="h-[200px] w-[150px]  bg-[#FFFFFF] border border-[#E1DCD6] flex items-center justify-center cursor-pointer hover:border-[#4285F4] hover:box-border hover:cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 32 32" ><path fill="none" stroke="#Ec4899" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 2v28M2 16h28"/></svg>
                </div>    
                <div 
                 className="py-[10px] px-[5px] text-[14px] font-bold">
                    Blank Project 
                </div>
            </div>
        
        </section>
    )
};


function createNewProject(projectName : string , userId : any , setCreationComplete : any  , setCreationStarted : any){
    console.log('creating project started ......');
     
    fetch(api + "/projects/userdata" , {
        "method" : "POST",
        headers: {
            'Content-Type' : "application/json"
        },
        body :JSON.stringify({
            userId : userId, 
            projectname : projectName ,
        })
    }
    ).then((res) => {
        console.log(res);
       if (res.status === 200) {
            setCreationComplete({show : true });
            setCreationStarted(false);
       }else{
            setCreationStarted({show : true , msg : "some error occured please try again"});
            setCreationComplete(null);
       }


    })
}


