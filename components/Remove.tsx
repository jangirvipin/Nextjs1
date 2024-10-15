"use client";

import { HiOutlineTrash } from "react-icons/hi"
import axios from "axios"
import { useRouter } from "next/navigation";
 
export default function Remove({id}:any){
    const router = useRouter();
    const remove =async()=>{
        const res = await axios.delete(`http://localhost:3000/api/${id}`);
        if(res.status === 200){
            router.push("/");
            router.refresh();
        }
       
    }

    return(
        <div>
            <button onClick={remove}>
            <HiOutlineTrash
        className="text-red-500"
         size={24} />
            </button>
      
        </div>
    )
}