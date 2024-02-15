import React from 'react'

import portfolio from './img/portfolio.jpg';
import whatsapp from './img/whatsappcall.avif';
import weather from './img/weather.jpg';
import calculator from './img/calculator.jpg';
import ludo from './img/ludo.png';
import currency from './img/currency.avif';
import timedate from './img/timeanddate.png';

function Frontend() {
  return (
    <>
        <div className="container-sm px-4 text-center my-3">
  <div className="row gx-5">
  <div className="card my-3 fix-width mx-auto" >
      <img src={portfolio} className="card-img-top" alt="me"/>
      <div className="card-body">
        <h5 className="card-title">My Portfolio</h5>
        <p className="card-text text-start">This is my Portfolio, made by using React JS.</p>
        <a href="/" className="btn btn-primary">Live Preview</a>
      </div>
    </div>
    <div className="card my-3 fix-width mx-auto" >
      <img src={whatsapp} className="card-img-top" alt="me"/>
      <div className="card-body">
        <h5 className="card-title">Whatsapp Call Clone</h5>
        <p className="card-text text-start">This is a simple whatsapp call clone made by using HTML and CSS and Font Awesome Library.</p>
        <a href="https://rajkumarariaon.000webhostapp.com/whatsapp/index.html" className="btn btn-primary">Live Preview</a>
      </div>
    </div>
    <div className="card my-3 fix-width mx-auto" >
      <img src={weather} className="card-img-top" alt="me"/>
      <div className="card-body">
        <h5 className="card-title">My Weather Application</h5>
        <p className="card-text text-start">This is a frontent web application made by using HTML, CSS, JavaScript and API. This application help us to know  the weather by entering the city name.</p>
        <a href="https://rajkumarariaon.000webhostapp.com/MyFirstApp/index.html" className="btn btn-primary">Live Preview</a>
      </div>
    </div>
    <div className="card my-3 fix-width mx-auto" >
      <img src={calculator} className="card-img-top" alt="me"/>
      <div className="card-body">
        <h5 className="card-title">My Calculator</h5>
        <p className="card-text text-start">This is my Calculator made by using HTML, CSS and JavaScript.</p>
        <a href="https://rajkumarariaon.000webhostapp.com/MyCalculator/index.html" className="btn btn-primary">Live Preview</a>
      </div>
    </div>
    <div className="card my-3 fix-width mx-auto" >
      <img src={ludo} className="card-img-top" alt="me"/>
      <div className="card-body">
        <h5 className="card-title">My Ludo Game</h5>
        <p className="card-text text-start">This is my Game app made by using HTML and CSS. This is only a Ludo page.</p>
        <a href="https://rajkumarariaon.000webhostapp.com/MyLudoGame/index.html" className="btn btn-primary">Live Preview</a>
      </div>
    </div>
    <div className="card my-3 fix-width mx-auto" >
      <img src={currency} className="card-img-top" alt="me"/>
      <div className="card-body">
        <h5 className="card-title">Currency Converter Application</h5>
        <p className="card-text text-start">This is my Currency converter app, made by using HTML,CSS and JavaScript.</p>
        <a href="https://rajkumarariaon.000webhostapp.com/MyCurrencyCalculator/index.html" className="btn btn-primary">Live Preview</a>
      </div>
    </div>
    <div className="card my-3 fix-width mx-auto" >
      <img src={timedate} className="card-img-top" alt="me"/>
      <div className="card-body">
        <h5 className="card-title">Time and Date</h5>
        <p className="card-text text-start">This is my Time and Date, made by using HTML, CSS and JavaScript.</p>
        <a href="https://rajkumarariaon.000webhostapp.com/TimeAndDate/index.html" className="btn btn-primary">Live Preview</a>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Frontend
