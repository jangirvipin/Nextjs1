import EditForm from "@/components/EditForm";
import prisma from "@/libs/prisma"


async function getTopicData(id:number){
    
    const topic = await prisma.post.findUnique({
        where: {
            id: id
        }
    });
    
    return topic;
}


export default async function Edit({params}:any){
    const {id} = params;
      
        const topicDATA = id ?await  getTopicData(Number(id)) : null;

    return(
        <>
       <EditForm topicDATA={topicDATA}/>
        </>
    )
}