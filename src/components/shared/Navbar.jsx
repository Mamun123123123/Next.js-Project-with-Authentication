'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import userAvater from '@/assets/user.png'
import Navlink from './Navlink'
import { authClient } from '@/lib/auth-client'
const Navbar = () => {
  const { data: session ,isPending } = authClient.useSession()
  const user = session?.user;
  return (
    <div className='flex p-2 justify-between container mx-auto'>
      <div>

      </div>
      <ul className='flex gap-4'>
        <li><Navlink href={'/'}>Home</Navlink></li>
        <li><Navlink href={'/about-us'}>About</Navlink></li>
        <li><Navlink href={'/career'}>Career</Navlink></li>
      </ul>
      {isPending ? <span className="loading loading-spinner loading-lg"></span> :  user ? ( <div className='flex gap-1 items-center'>
        <h2>{user.name}</h2>
        <Image src={user.image || userAvater} alt="user" width={40} height={10}/>
        <button className='btn btn-primary text-black' onClick={async()=>await authClient.signOut()}>Logout</button>
      </div>) : (
        <button className='btn btn-primary text-black'><Link href={"/login"}>Login</Link></button>

       )}
     
    </div>
  )
}

export default Navbar
