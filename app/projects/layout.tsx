
import { ReactNode } from "react";

export default function Home({children} : {children : ReactNode}){

    return(
        <div className="flex flex-row w-full h-screen items-center justify-center">
            {children}
        </div>
    )
}