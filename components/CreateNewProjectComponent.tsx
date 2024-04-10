const CreateNewProjectComponent = () => {
    return(
        <section className="h-[40%] bg-[#F1F3F4] flex items-center justify-center">
            <div className=" py-[10px] w-[250px] flex flex-col items-center" >
                    
                <div className="py-[10px] px-[5px] text-[14px]">
                    Star a new project 
                </div>
                <div className="h-[200px] w-[150px]  bg-[#FFFFFF] border border-[#E1DCD6] flex items-center justify-center cursor-pointer hover:border-[#4285F4] hover:box-border hover:cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 32 32" ><path fill="none" stroke="#Ec4899" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 2v28M2 16h28"/></svg>
                </div>    
                <div className="py-[10px] px-[5px] text-[14px] font-bold">
                    Blank Project 
                </div>
            </div>
        
        </section>
    )
};

export default CreateNewProjectComponent;

