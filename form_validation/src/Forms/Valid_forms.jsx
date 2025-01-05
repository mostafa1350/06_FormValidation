import React from 'react'
import GrayFox from '../assets/images/Gray_Fox.jpg';
const Valid_forms = () => {
  return (
    <div className='min-h-screen w-full bg-blue-200 bg-auto bg-no-repeat  bg-center
     overflow-hidden' style={{backgroundImage:`url(${GrayFox})`}}>
        <div className='flex justify-center items-center w-full h-full'>
            <form action="" className='relative flex flex-col justify-center items-center
             max-w-[500px] w-full px-8 py-16 bg-red-300/20 border-white/20 border-2 backdrop-blur-sm '>
            Form

            </form>

        </div>
    </div>
  )
}

export default Valid_forms