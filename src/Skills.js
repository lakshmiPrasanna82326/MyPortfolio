import React from 'react'
import html from './images/html.jpg'
import css from './images/css.jpg'
import js from './images/js.png'
import reactjs from './images/reactjs.jpg'
import tailwind from './images/tailwind.jpeg'




const Skills = () => {
  return (
    <>
       <hr id="skills" className='w-[70px] mx-auto bg-purple-800 h-2 border-spacing-0 rounded-md mt-[400px]'/>
       <h1 className='text-white text-[40px] mb-4 text-center'>Skills Used</h1>
       <div className='flex mx-32 space-x-20'>
        <div>
       <img  className="h-52 " src={html} alt="html logo"/>
       <h1 className='text-white text-[30px] mx-14  relative'>Html</h1>
       </div>
       <div>
       <img  className="h-48" src={css} alt="css logo"/>
       <h1 className='text-white text-[30px] relative mx-14 my-4'>CSS</h1>
       </div>
       <div>
       <img  className="h-48 " src={tailwind} alt="tailwind css logo"/>
       <h1 className='text-white text-[30px] relative mx-6 my-4'>Tailwind CSS</h1>
       </div>
       <div>
       <img  className="h-48" src={js} alt="Javascript logo"/>
       <h1 className='text-white text-[30px] relative mx-6 my-4'>JavaScript</h1>
       </div>

       <div>
       <img  className="h-48 bg-black" src={reactjs} alt="Recat Js logo"/>
       <h1 className='text-white text-[30px] relative mx-6 my-4'>React JS</h1>
       </div>
       </div>
       
  </>
  )
}

export default Skills
