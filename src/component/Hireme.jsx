import React from 'react'
import './style.css'
import Resume from "./resume.pdf"

function Hireme() {
  return (
    <>
    <nav className="navbar bg-success ">
  <div className="container-fluid my-2 ">
  <h3 className='text-center'>Hire Me</h3>
  </div>
  </nav>
    <div className="container text-center">
    <div className="vstack gap-3">
  {/* <div className="p-2 round my-3">Hire Me</div> */}

    <div className="container my-2 border border-secondary width-100">
      <form action="mailto:rajangel820764@gmail.com" method='get' encType='text/plain'>
        <div className="name my-2">
          <div className="text">Name </div>
          <div className="input mx-2">
            <input type="text"  className='input'/>
          </div>
        </div>
        <div className="email my-2">
          <div className="text">Email</div>
          <div className="input mx-2">
            <input type="text" className='input'/>
          </div>
        </div>
        <div className="comment text-start ">
          <div className="text">Mention here about your company...</div>
          <textarea className='input' name="text" id="text-area" cols="33" rows="10" placeholder='Enter here...'></textarea>
        </div>
        <input type="submit" value="Hire" className="my-3 colour"/>
        </form>
    </div>
    <a className="border dropdown-item d-flex justify-content-center" href={Resume} target="_blank"
  rel="noreferrer">Download My CV</a>
  
</div>
    </div>
    </>
  )
}

export default Hireme
