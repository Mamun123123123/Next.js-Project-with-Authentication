import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import RightSidebar from "@/components/homepage/RightSidebar";
import Image from "next/image";

async function getCategories() {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories")
  const data = await res.json()
  return data.data  
}


export default async function Home() {
  const categories = await getCategories()
  return (
   <div className="grid items-center text-center  grid-cols-12 gap-4">
    <div className="col-span-3 m-2">
       <LeftSidebar categories={categories} activeId={null}/>
     
      </div>
    <div className="col-span-6 bg-yellow-950">All News</div>
    <div className="col-span-3 bg-blue-950"><RightSidebar /></div>
   </div>
  );
}
