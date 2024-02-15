import React from 'react'
import dsa from './img/dsa.png';
import html from './img/html.webp';
import css from './img/css.webp';
import bootstrap from './img/bootstrap.png';
import javascript from './img/javascript.png';
import react from './img/reactjs.png';
import node from './img/nodejs.png';
import mysql from './img/mysql.jpg';
import java from './img/java.png';
import c from './img/c.png';
import mongodb from './img/mongodb.jpg';
import api from './img/api.jpg';


function Skills() {
  return (
    <>
        <div className="in-line container-sm">
        <div className="blue space">Skills </div>
        <div className='space'> And </div>
        <div className="blue space"> Experience</div>
      </div>
      <div className="container text-center">
         <div className="row my-3 ">
           <div className=" gap-5 col abc rounded-circle   mx-5 ">
             <div className="images">
               <img src={html} alt="Data Structure and Algorithm" />
             </div>
             <div className="text my-1">HTML</div>
           </div>

           <div className=" gap-5 col abc rounded-circle umn-gap-3 mx-5 ">
             <div className="images">
               <img src={css} alt="Data Structure and Algorithm" />
             </div>
             <div className=" text my-1">CSS</div>
           </div>

           <div className=" gap-5 col abc rounded-circle umn-gap-3 mx-5">
             <div className="images">
               <img src={bootstrap} alt="Data Structure and Algorithm" />
             </div>
             <div className=" text my-1 little-size">Bootstrap</div>
           </div>

           <div className=" gap-5 col abc rounded-circle umn-gap-3 mx-5">
             <div className="images">
               <img src={javascript} alt="Data Structure and Algorithm" />
             </div>
             <div className=" text my-1 little-size">JavaScript</div>
           </div>
         </div>

         <div className="row my-3">
           <div className=" gap-5 col abc rounded-circle umn-gap-3 mx-5">
             <div className="images">
               <img src={react} alt="Data Structure and Algorithm" />
             </div>
             <div className=" text my-1">ReactJS</div>
           </div>

           <div className=" gap-5 col abc rounded-circle umn-gap-3 mx-5">
             <div className="images">
               <img src={node} alt="Data Structure and Algorithm" />
             </div>
             <div className=" text my-1">NodeJS</div>
           </div>

           <div className=" gap-5 col abc rounded-circle umn-gap-3 mx-5">
             <div className="images">
               <img src={mysql} alt="Data Structure and Algorithm" />
             </div>
             <div className=" text my-1">MySQL</div>
           </div>

           <div className=" gap-5 col abc rounded-circle umn-gap-3 mx-5">
             <div className="images">
               <img src={java} alt="Data Structure and Algorithm" />
             </div>
             <div className=" text my-1">Java</div>
           </div>
         </div>

         <div className="row my-3">
           <div className=" gap-5 col abc rounded-circle umn-gap-3 mx-5">
           <div className="images">
               <img src={c} alt="Data Structure and Algorithm" />
             </div>
             <div className=" text my-1 little-size">C Programming</div>
           </div>

           <div className=" gap-5 col abc rounded-circle umn-gap-3 mx-5">
           <div className="images">
               <img src={mongodb} alt="Data Structure and Algorithm" />
             </div>
             <div className=" text my-1 little-size">MongoDB</div>
           </div>

           <div className=" gap-5 col abc rounded-circle umn-gap-3 mx-5">
           <div className="images">
               <img src={api} alt="Data Structure and Algorithm" />
             </div>
             <div className=" text my-1">API</div>
           </div>

           <div className=" gap-5 col abc rounded-circle umn-gap-3 mx-5">
             <div className="images">
               <img src={dsa} alt="Data Structure and Algorithm" />
             </div>
             <div className=" text my-1">DSA</div>
           </div>
         </div>
         
      </div>
    </>
  )
}

export default Skills
