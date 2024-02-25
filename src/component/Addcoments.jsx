import React from 'react'

function Addcoments() {
  return (
    <>
        <div className="container">
            <form action="post">
            <div className="form mx-0">
                <div className="user-name">
                    <p>Your Name:</p>
                    <input type="text" className='input' />
                </div>
                <div className="upload-image my-1 d-block">
                    <p>Upload Your Image:</p>
                    <input type="file" />
                </div>
                <div className="comenttext my-1">
                    <p>Enter Your Comments:</p>
                    <textarea className='input' name="text" id="text-area" cols="24" rows="4" placeholder='Enter here...'></textarea>
                </div>
                <div className="company">
                    <p>Select your company:</p>
                    <div className="dropdown text-center my-2">
          
  <button className="btn btn-secondary "  data-bs-toggle="dropdown" aria-expanded="false">
    Select here
  </button>
  <ul className="dropdown-menu">
    <li>Google</li>
    <li>
      <hr className='dropdown-divider' />
    </li>
    <li>PayPal</li>
    <li>
      <hr className='dropdown-divider' />
    </li>
    <li>TCS</li>
    <li>
      <hr className='dropdown-divider' />
    </li>
    <li>Wipro</li>
    <li>
      <hr className='dropdown-divider' />
    </li>
    <li>IBM</li>
    <li>
      <hr className='dropdown-divider' />
    </li>
    <li>Curently a student</li>
    <li>
      <hr className='dropdown-divider' />
    </li>
    <li>Other Company</li>
  </ul>
</div>
                </div>
            </div>
            <input type="submit" className='colour' />
            </form>
        </div>
    </>
  )
}

export default Addcoments
