import React from 'react'
import GrayFox from '../assets/images/Gray_Fox.jpg';
const Valid_forms = () => {
  return (
    
    <div className='h-[100vh] w-full bg-blue-200/30  bg-auto bg-no-repeat  bg-center 
     overflow-hidden ' style={{backgroundImage:`url(${GrayFox})`}}>
        <div className='flex justify-center items-center w-full h-full bg-blue-400/20'>
            <form action="" className='relative flex flex-col justify-center items-center
             max-w-[350px] max-h-[280px] w-full px-8 py-16 bg-white/20 border-blue-700/20 border-[3px]
             border-l-blue-700/20 border-b-blue-700/20 border-l-[1px] border-b-[1px]
             rounded-lg backdrop-blur-sm '>
                <input type="text" required={true} minLength={6} className="relative my-2 px-2 py-3 bg-yellow-400/20 rounded-md text-green-300 placeholder-white " placeholder='Write Your Full Name' />
                <input type="email" required={true} className="relative my-2 px-2 py-3 bg-yellow-400/20 rounded-md text-green-300 placeholder-white" placeholder='Write Your email' />
                <input type="password" required={true} className="relative my-2 px-2 py-3 bg-yellow-400/20 rounded-md text-slate-700 placeholder-white" placeholder='Write Your password' />
                <button type="submit" className="relative my-3 bg-gradient-to-tr from-slate-200 via-red-200 to-green-200 py-2 px-[70px] tracking-wider rounded-md">Register</button>
            </form>
        </div>
    </div>
  )
}

export default Valid_forms