import Link from "next/link";
import Remove from "./Remove";
import { HiPencilAlt } from "react-icons/hi";

type TopicProps = {
    title: string;
    description: string;
    id: number;
};

export default function Topic({ title, description,id }: TopicProps){
    return(
        <>
        <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5">
            <div>
                <h2 className="font-bold text-2xl">{title}</h2>
                <div>{description}</div>
            </div>

            <div className="flex gap-3">
                <Remove id={id} />
                <Link href={`edit/${id}`}>
                    
                        <HiPencilAlt size={24} />
                    
                </Link>
            </div>
        </div>
        </>
    )
}