import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import userAvater from '@/assets/user.png'
import Navlink from './Navlink'
const Navbar = () => {
  return (
    <div className='flex p-2 justify-between container mx-auto'>
      <div>

      </div>
      <ul className='flex gap-4'>
        <li><Navlink href={'/'}>Home</Navlink></li>
        <li><Navlink href={'/about-us'}>About</Navlink></li>
        <li><Navlink href={'/career'}>Career</Navlink></li>
      </ul>
      <div className='flex gap-1'>
        <Image src={userAvater} alt="user" width={40} height={10}/>
        <button className='btn btn-primary text-black'><Link href={"/login"}>Login</Link></button>
      </div>
    </div>
  )
}

export default Navbar
