'use client'
import { authClient } from '@/lib/auth-client'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'

const LoginPage = () => {
  const {register,handleSubmit,formState:{errors}} = useForm()
  const handleLoginFunc = async(data) =>{
  console.log(data);
  
  const { data: res, error } = await authClient.signIn.email({
    email: data.email, // required
    password: data.password, // required
    rememberMe: true,
    callbackURL: "/",
});
    
  }
  return (
    <div className='container mx-auto p-8 min-h-[80v] flex justify-center items-center bg-slate-100'>
      <div className='p-4 rounded-xl text-black bg-white'>
       <form onSubmit={handleSubmit(handleLoginFunc)}>
         <h2 className='font-bold text-3xl text-center'>Login Your Account</h2>
        <fieldset className="fieldset">
          <legend className="fieldset-legend text-black">Email</legend>
          <input type="email" {...register("email" ,{ required: "Email field is required" })} className="input bg-amber-50" placeholder="Type Email.." />
          {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend text-black">Password</legend>
          <input type="password" {...register("password" ,{ required: "Password field is required" })} className="input text-black bg-amber-50" placeholder="Type Password.." />
          {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
        </fieldset>
        <button className="btn w-full bg-black text-white">Login</button>
       </form>
      <p className='mt-4'>Don't have an account? <Link href={"/register"} className='text-blue-500'>Register</Link></p>

      </div>
    </div>
  )
}

export default LoginPage
