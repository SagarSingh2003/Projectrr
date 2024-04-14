import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request : Request) {

    const req =  await request.json();
    console.log(req);
    
    const userId = req.userId;
    const projectName = req.projectname ;
    console.log('userId' , userId);
    console.log('projectname' , projectName)
    const date = new Date();

    const localDate = date.toLocaleString();

   try{

        const user = await prisma.project.create({
            data: {
                userId : userId,
                projectname : projectName,
                lastOpened :  String(localDate)   
            },
        })
    
   }catch(err){
        console.log(err);


        return new Response( JSON.stringify({
            "success" : false , 
            "msg" : "please try again later"
        }) , {status: 412})
   }
   
    return new Response( JSON.stringify({
        "success" : true , 
        "msg" : "project created successfully"
    }) , {status: 200})
}


export async function GET(request : Request){

    console.log('got get request');
    const { searchParams } = new URL(request.url)

    const userId : string =  searchParams.get('userId') ;
    console.log(userId);

    try{

        const project = await prisma.project.findMany({
            where: {
                   userId : userId
            },
        })
        
        console.log(project , "projects....");
        return new Response( JSON.stringify({
            "success" : true , 
            "project" : project
        }) , {status: 200})
    
   }catch(err){
        console.log(err);


        return new Response( JSON.stringify({
            "success" : false , 
            "msg" : "please try again later"
        }) , {status: 412})
   }
   
    
}