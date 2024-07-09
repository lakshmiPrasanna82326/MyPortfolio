import React from 'react';
import linkedin from './images/linkedin.png'
import github from './images/github.webp'

const Footer = () =>{
    return(
        <>
        <div className='bg-gray-600 h-52 text-white '>
        <div className='mt-20 ml-[600px] absolute '>
        <p className=''>lakshmiprasanna82326@gmail.com</p>
        <p className='text-center'>7828725369</p>
        <div className='flex space-x-5 items-center mx-24'>
       <a href="https://www.linkedin.com/in/lakshmi-prasanna-988370245/" target="_blank"> <img  className="h-[20px] inline" src={linkedin} alt="linkedin"/></a>
       <a href="https://github.com/" target="_blank" ><img   className="h-[20px]" src={github} alt="github"/></a>
        </div>
        </div>
        </div>
        </>
    )
}

export default Footer

