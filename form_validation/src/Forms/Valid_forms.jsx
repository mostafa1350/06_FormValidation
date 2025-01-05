import React from 'react'
import GrayFox from '../assets/images/Gray_Fox.jpg';
const Valid_forms = () => {
  return (
    
    <div className='h-[100vh] w-full bg-blue-200/5  bg-auto bg-no-repeat  bg-center 
     overflow-hidden' style={{backgroundImage:`url(${GrayFox})`}}>
        <div className='flex justify-center items-center w-full h-full bg-blue-400/50'>
            <form action="" className='relative flex flex-col justify-center items-center
             max-w-[500px] w-full px-8 py-16 bg-red-300/20 border-blue-300/20 border-[3px]
             border-l-blue-300/20 border-b-blue-400/20 border-l-[1px] border-b-[1px]
             rounded-lg backdrop-blur-sm '>
                
            

            </form>

        </div>
    </div>
  )
}

export default Valid_forms