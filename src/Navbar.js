import React from 'react'

function Navbar() {

  const openResume = () =>{
 const id1 = document.getElementById("form_id");
 id1.className='inline'; 
  }

  const closeResume =() => {
    const id1 = document.getElementById("form_id");
    id1.className='hidden'; 
  }

  return (
    <div>
      <div id="resume_id" className='hidden'>
        
          <button className='bg-white' onClick={closeResume}>Close</button>

      
      </div>


       <navbar className="navbar bg-black flex  w-[100%]">
        <div id="logo"></div>
        <ul className="h-14 items-center flex">
          <li className="item rounded-lg">
            <a className='a onHover'  href="#home">Home</a>
          </li>
          <li className="item">
            <a className='a onHover' href="#projects-heading">Projects</a>
          </li>
          <li className="item">
            <a className='a onHover' href="#skills">Skills</a>
          </li>
          <li className="item">
            <a className='a onHover' href="#about">About Me</a>
          </li>
         
          <li className="item">
            <a className='a onHover ' onClick={openResume}>Resume</a>
          </li>
        </ul>
        <button id="contact" className=' absolute bg-white text-black right-[70px] m-[14px] p-[3px] rounded-[7px] hover:bg-black hover:text-white'>Contact</button>
      </navbar>
    </div>
  )
}

export default Navbar
