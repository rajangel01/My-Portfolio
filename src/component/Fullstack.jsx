import React from 'react'
import image from './img/library.jpg'

function Fullstack() {
  return (
    <>
<div className="container-sm px-4 text-center my-3 ">
  <div className="row gx-5">
    <div className="card my-3 fix-width mx-auto" >
      <img src={image} className="card-img-top" alt="me"/>
      <div className="card-body">
        <h5 className="card-title">Library Management</h5>
        <p className="card-text text-start">This is a full stack web project made by using React JS, and This project is still in use in my college.</p>
        <a href="/" className="btn btn-primary">Live Preview</a>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Fullstack
