import { ReactNode } from "react";

export default function AuthPage({children} : {children : ReactNode}){

    return(
        <section className="flex justify-center items-center w-full h-screen">
            {children}
        </section>
    )
}