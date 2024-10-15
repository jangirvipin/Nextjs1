import Link from "next/link";

export default function Navbar() {
    return (
         <nav className="flex justify-between items-center bg-slate-800 px-10 py-5 ">
             <Link className="text-white text-xl"
              href="/">
              PROJECT
              </Link>

             <Link className="bg-white py-2 px-2 rounded-md"
              href="/add"
             >ADD-TOPIC
             </Link>
         </nav>
       
    );
}