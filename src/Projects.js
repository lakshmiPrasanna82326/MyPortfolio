import React from 'react'
import bookshell from "./images/bookshell.png";

const Projects = () => {
  return (
    <>
       <hr className='w-[70px] mx-auto bg-purple-800 h-2 border-spacing-0 rounded-lg mt-[100px]'/>
      <h1 id="projects-heading" className='bg-black text-white m-0 pt-0 text-center h-20 text-[40px]'>My Projects</h1>
      <section className="projects-container h-[100vh] flex-column mb-80   " id="myprojects">
        <div className="projects h-[320px] w-[1200px] ml-[150px] mt-4 text-left p-6 flex items-stretch space-x-52" id="project1">
          <div className=''>
          <h1>Book shell</h1>
          <p>This is about Selling and buying books online and users can login to use the service . </p>
          <p>LOrem lorem huvh ma jagfciakv jgfiah bjf oiuy igtbo9 kd</p>
          <p>Github:</p>
          <a href="#">Github/lakshmiprasanna/repository</a>
          <p>Website</p>
          <a href="#">bookshell.com</a>
          </div>
          <div className=''>
          <img  className="h-[260px] w-[400px] "  src={bookshell} alt="bookshell.com"/></div>
        </div>
        <div className="projects  myprojects" id="project2">
          <div>
          <h1>Pool My Ride</h1>
          <p>
            Now you can share your ride or a request a ride in this website and
            get paid for it
          </p>
          <p>Github</p>
          <a href="#">Github/lakshmiprasanna/repository</a>
          <p>Website</p>
          <a href="#">poolmyride.com</a>
          </div>
          <div><img  className="h-[260px] w-[400px] "  src={bookshell} alt="bookshell.com"/></div>
        </div>
        <div className="projects myprojects" id="project3">
          <div>
          <h1>Student</h1>
          <p>
            All your exam details study materials library dues all regarding
            your colege
          </p>
          <p>Github:</p>
          <a href="#">Github/lakshmiprasanna/repository</a>
          <p>Website</p>
          <a href="#">student.com</a>
        </div>
        <div><img  className="h-[260px] w-[400px] "  src={bookshell} alt="bookshell.com"/></div>
        </div>
       
      </section>
      </>
  )
}

export default Projects
