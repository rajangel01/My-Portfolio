import React from 'react'
import './style.css'
import call from './img/call.jpg'
import email from './img/email.jpg'
import whatsapp from './img/whatsapp.png'
import linkedin from './img/linkedin.jpg'
import github from './img/github.png'
import hackerrank from './img/hackerrank.png'

export default function Contact() {
  return (
    <>
      <div className="container bg-secondary text-center my-3 ">
        <div className="h3">Contact Me</div>
        <div className="icons-contact d-flex">
            <div className="call my-2">
              <div className="contactimage">
                <img src={call} alt="call me" />
              </div>
              
            </div>
            <div className="email1 my-2">
              <div className="contactimage">
                <img src={email} alt="" />
              </div>
              
            </div>
            <div className="whatsapp my-2">
            <div className="contactimage">
              <img src={whatsapp} alt="" />
            </div>
             
            </div>
            <div className="linkedin my-2">
            <div className="contactimage">
              <img src={linkedin} alt="" />
            </div>
             
            </div>
            <div className="github my-2">
            <div className="contactimage">
              <img src={github} alt="" />
            </div>
              
            </div>
            <div className="hackerrank my-2">
            <div className="contactimage">
              <img src={hackerrank} alt="" />
            </div>
              
            </div>
        </div>
        <hr />
        <div className="container">
          <div className="name text-center">Raj Kumar</div>
          <div className="address">Ward no. 7, Koir Tola, Ariaon,</div>
          <div className="address2">Villege + Post : Ariaon</div>
          <div className="address2">District : Buxar</div>
          <div className="address2">BIHAR, 802119</div>
          <div className="address2"></div>
        </div>
      </div>
    </>
  )
}
