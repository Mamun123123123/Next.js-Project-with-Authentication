'use client'
import { authClient } from '@/lib/auth-client'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'

const RegisterPage = () => {
  const {register,handleSubmit,formState:{errors}} = useForm()
  const handleRegisterFunc = async(data) =>{
  console.log(data);
   const { name, email, password, photo } = data;
   const { data: res, error } = await authClient.signUp.email({
    name: name, // required
    email: email, // required
    password: password, // required
    image: photo,
    callbackURL: "/",
});
console.log(res,error);
if(error){
  alert(error.message)
}
if(res){
  alert("Sign up Successfully")
}

    
  }
  return (
    <div className='container mx-auto p-8 min-h-[80v] flex justify-center items-center bg-slate-100'>
      <div className='p-4 rounded-xl text-black bg-white'>
       <form onSubmit={handleSubmit(handleRegisterFunc)}>
         <h2 className='font-bold text-3xl text-center'>Register Your Account</h2>
        
        <fieldset className="fieldset">
          <legend className="fieldset-legend text-black">Name</legend>
          <input type="text" {...register("name" ,{ required: "Name field is required" })} className="input bg-amber-50" placeholder="Enter Your Name" />
          {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend text-black">Photo URL</legend>
          <input type="text" {...register("photo" ,{ required: "Photo URL field is required" })} className="input bg-amber-50" placeholder="Type Email.." />
          {errors.photo && <p className='text-red-600'>{errors.photo.message}</p>}
        </fieldset>

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
        <button className="btn w-full bg-black text-white">Register</button>
       </form>
      <p className='mt-4'>have an account? <Link href={"/login"} className='text-blue-500'>Login</Link></p>

      </div>
    </div>
  )
}

export default RegisterPage
