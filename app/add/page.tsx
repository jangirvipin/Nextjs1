"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function AddPage() {
    const router = useRouter();

    const [topic, setTopic] = useState("");
    const [description, setDescription] = useState("");

    const handle = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api", {
                title: topic,
                description: description,
            });
            console.log(response.data);
            
           if(response.status===201){
            router.push("/");
           }
        } 
        catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex justify-center py-10 h-screen px-2">
            <div className="w-full">
                <h1 className="text-3xl font-bold mb-5">Add New Topic</h1>
                <form onSubmit={handle}>
                    <div className="mb-5">
                        <label htmlFor="title" className="block mb-2">Title</label>
                        <input
                            onChange={(e) => setTopic(e.target.value)}
                            type="text"
                            id="title"
                            className="w-full p-2 border border-gray-300"
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="description" className="block mb-2">Description</label>
                        <textarea
                            onChange={(e) => setDescription(e.target.value)}
                            id="description"
                            className="w-full p-2 border border-gray-300"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-3"
                    >
                        Add Topic
                    </button>
                </form>
            </div>
        </div>
    );
}
