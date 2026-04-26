import React from 'react'
import Marquee from 'react-fast-marquee'

const news = [
  { id: 1, title: "New Technology Trends in 2026     " },
  { id: 2, title: "Global Economy Updates Today      " },
  { id: 3, title: "AI Revolution Changing the World    " },
  { id: 4, title: "Sports Highlights of the Week      " },
  { id: 5, title: "Climate Change and Future Impact     " }
];

console.log(news);

const BreakingNews = () => {
  return (
    <div className='flex justify-between gap-4 items-center mx-auto container px-2 bg-gray-200 py-4'>
        <button className='btn bg-pink-500'>Latest News</button>
      <Marquee className='text-black' pauseOnHover={true}>
        {news.map(item=>{
            return <span key={item.id}> {item.title} </span>
        })}
      </Marquee>
    </div>
  )
}

export default BreakingNews
