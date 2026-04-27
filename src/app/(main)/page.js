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
      All categories
      <ul className="flex flex-col gap-3 p-2"> {
        categories.news_category.map((news) => {
          return <li key={news.category_id} className="bg-slate-100 p-2 text-black rounded-2xl">{news.category_name}</li>
        })
      }</ul>
     
      </div>
    <div className="col-span-6 bg-yellow-950">All News</div>
    <div className="col-span-3 bg-blue-950">Social icons</div>
   </div>
  );
}
