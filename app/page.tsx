import Topic from "@/components/TopicList";
import prisma from "@/libs/prisma";

async function getTopics() {
  const topics = await prisma.post.findMany();
  console.log(topics);
  
  return topics;
}

export default async function Home() {
  const data= await getTopics();
  return (
    <div>
      {data.map((topic) => (
        <Topic title={topic.title} description={topic.description} id={topic.id} ></Topic>
      ))
      }
     </div>
  );
}
