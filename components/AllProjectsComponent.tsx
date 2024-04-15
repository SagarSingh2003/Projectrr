"use client"

import { useEffect, useState } from "react";
import { redirect, useRouter } from "next/navigation"

const AllProjectsComponent = ({userId } : {userId : string | undefined }) => {

    const [projectDetails , setProjectDetails] = useState<any>(false);

    const router = useRouter();
    
    const date = new Date();

    const dateString = date.toLocaleString();

    useEffect(() => {

        fetch( `/projects/userdata?userId=${userId}` , {
            "method" : "GET", 
        }).then((res)  => {
           res.json().then((response) => {

                    if(res.status === 200){

                        console.log(response.project , "response .....");
                        setProjectDetails(response.project) ;
                    }
                    else{
                        setProjectDetails([]);
                    }
           });
        })

    } , [])


    return(
        <section className="flex flex-col items-center justify-center  h-[52%] w-full ">

            <div className="w-full pl-[23%] py-[40px] text-[20px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r bg-[#626468]"> Your Projects  </div>

            <div className=" grid grid-cols-5 max-[519px]:grid-cols-1  max-[759px]:grid-cols-2 gap-6 gap-x-3 py-[20px] max-[997px]:grid-cols-3 max-[1244px]:grid-cols-4 ">
                {projectDetails === false ? 
                            <div role="status" className="w-screen flex justify-center items-center">
                                <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div>
                    :
                    (projectDetails.length === 0 ? <div className="flex w-screen items-center justify-center">No Projects Available</div> : 
                    projectDetails.map((project : {id : string ,userId : string , projectname : string , projectData? : string}) => 
                        
                        <section onClick = {() => {
                            console.log('getting on click....')
                            router.push(`/projects/${project.projectname}`)
                        }} key={project.id} >
                            <div 
                            className=" hover:shadow-md  w-[220px] flex flex-col items-center hover:shadow-[#E1DCD6]" >
                                
                                <div className=" h-[250px] w-full bg-[#FFFFFF] border border-[#E1DCD6]  border-b-0  hover:cursor-pointer ">
                                    
                                </div>  

                                <div className=" min-h-[60px] w-[220px] flex flex-row  items-start px-[10px] justify-around  border border-t-0 cursor-pointer">
                                    
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" className="h-[25px]">
                                            <g fill="none">
                                                <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                                                <path fill="#2d9cf4" d="M18 2a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm-6 11H9a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2m3-5H9a1 1 0 0 0-.117 1.993L9 10h6a1 1 0 0 0 .117-1.993z"></path>
                                            </g>
                                        </svg>
                                    </div>
                                    <section className="flex flex-col " onClick = {() => {
                            console.log('getting on click....')
                            router.push(`/projects/${project.projectname}`)
                        }}>
                                        <div className="font-semibold truncate ... text-[14px] text-[#858D80] w-[100px] " title={project.projectname}>
                                            {project.projectname} 
                                        </div>

                                        <div className="text-[10px]">
                                            Opened {dateString}
                                        </div>
                                    </section>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                                            <g fill="none" stroke="#2d9cf4" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
                                                <circle cx={8} cy={2.5} r={0.75}></circle>
                                                <circle cx={8} cy={8} r={0.75}></circle>
                                                <circle cx={8} cy={13.5} r={0.75}></circle>
                                            </g>
                                        </svg>
                                    </div>
                                </div>

                            </div>
                        </section>
                        )
                    )                            
                }
                
            </div>
            
        </section>
    )
};

export default AllProjectsComponent;

