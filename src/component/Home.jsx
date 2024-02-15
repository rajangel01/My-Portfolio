import React from 'react';
import image from './img/myImage.png';
import Skills from './Skills';
import Hireme from './Hireme';
import Users from './Users';
import Contact from './Contact'
import Projectheader from './Projectheader';
import IndividualIntervalsExample from './IndividualIntervalsExample'
function Home() {
  return (
    <>
    <div className="container-sm px-4 text-center my-3">
  <div className="row gx-5">
    <div className="col">
     <div className="p-3 my-image">
       <img src={image} alt="Raj Angel" />
     </div>
    </div>
    <div className="col my-3 ">
      <h2>Raj Kumar</h2>
      <div className="p-3">A Full Stack Web  Developer.</div>
      <h4>I think coding is just like as an art and its artists are coders.</h4>
      <p>A student of BCA (Bachelor of Computer Application).</p>
    </div>
  </div>
</div>
      <Hireme/>
      <Projectheader />
      <Skills />
      <Users/>
      
      <IndividualIntervalsExample/>
      <Contact/>
</>
  )
}

export default Home
