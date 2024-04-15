'use client'

import { useParams } from "next/navigation";

export default function Page(){

    const params = useParams<{ projectname : string}>()
    
    return(
        <>
            {params.projectname}
        </>
    )
}