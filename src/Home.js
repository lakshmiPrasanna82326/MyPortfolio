import React from 'react'
import profile from "./images/profile.png";


function Home() {






  return (
    <div>
      <section className="home-class flex h-[100vh] " id="home">
        <div className="flex-column relative mt-[320px] m-[10px] w-[100%] " id="home-details">
          <h1
            className=" text-[50px] italic inline"
            id="home-headingid"
            style={{ color: "blueviolet" }}
          >
        
            I'm Lakshmi Prasanna,
          </h1>
          <h1 className=" text-[45px] text-white" id="home-headingid2">
          
            Frontend developer
          </h1>
          <p className=" text-left text-white" id="home-paraid">
            Passionate and ambitious about creating websites which can be
            reliable,efficient and user-friendly.
          </p>
          <p className="text-left text-white">
            {" "}
            want to turn your thoughts into a beautifull website,I can help.
          </p>
          <p className="text-left text-white">Get the satisfaction of turning thoughts into a reality.</p>

          <a href="Lakshmi Prasanna (1).pdf" download="LakshmiPrasanna">
            <button className="mybutton" id="cv">Download CV</button>
            </a>
           {/* <a
              className="" 
              id="CV"
              href="Lakshmi Prasanna (1).pdf"
              download="Lakshmi Prasanna"
            >
              Download
  </a>*/}
            <button className="m-10 bg-black white text-white px-3 py-0.5 rounded-md w-24 border-2 border-white hover:bg-white hover:text-black" >Contact</button>
          
        </div>
        <div id="profile-id">
          <img id="profile"   src={profile} alt="Lakshmi Prasanna" />
        </div>
      </section>
    </div>
  )
}

export default Home
