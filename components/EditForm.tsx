"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

   

export default function EditForm({topicDATA}:any){
        const router = useRouter();

        const [newTitle, setNewTitle] = useState(topicDATA?.title);
        const [newDescription, setNewDescription] = useState(topicDATA?.description);

        const handleUpdate = async (e:any) => {
            e.preventDefault();
            try{
                const res =await axios.put(`http://localhost:3000/api/${topicDATA.id}`,{
                    title: newTitle,
                    description: newDescription
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if(res.status===200){
                    router.push("/");
                    router.refresh();
                   }
               
            }
            catch(err){
                console.error(err);
            }
            

        }

    return (
        <div className="flex justify-center py-10 h-screen px-2">
        <div className="w-full">
            <h1 className="text-3xl font-bold mb-5">Edit Topic</h1>
            <form onSubmit={handleUpdate}>
                <div className="mb-5">
                    <label htmlFor="title" className="block mb-2">Topic</label>
                    <input 
                    onChange={(e)=>setNewTitle(e.target.value)}
                    value={newTitle}
                    type="text"
                     id="title"
                      className="w-full p-2 border border-gray-300" />
                </div>
                <div className="mb-5">
                    <label
                     htmlFor="description" 
                    className="block mb-2">Description</label>

                    <textarea 
                    onChange={(e)=>setNewDescription(e.target.value)}
                    id="description"
                    value={newDescription}
                    className="w-full p-2 border border-gray-300"></textarea>
                </div>
                <button
                type="submit"
                 className="w-full bg-blue-500 text-white p-3">Update Topic</button>
            </form>
        </div>
        </div>
    )
}