
import Image from './img/developer.jpeg';
import image from './img/myImage.png'
import google from './img/google.png'
import dsp from './img/dsp.jpg'
import amazon from './img/amazon.png'
import nitish from './img/nitish.jpg'
import paypal from './img/paypal.png'
import mahtab from './img/mahtab.jpg'
import amit from './img/amit.jpg'
import wipro from './img/wipro.png'
import coments from './img/coments.png'
import Addcoments from './Addcoments'

// import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

function IndividualIntervalsExample() {
  return (
    
    <>

<nav className="navbar bg-success my-3">
  <div className="container-fluid my-2 ">
  <h3 className='text-center'>My Happy Clients...</h3>
  </div>
</nav>

    <div id="carouselExampleCaptions" className="carousel slide ">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>
  </div>
  <div className="container bg-secondary client-area">
  <div className="carousel-inner width-90 mx-auto my-3">
    <div className="carousel-item active">
      <img src={Image} className="d-block width-90 mx-auto" alt="..."/>
      <div className="carousel-caption text-black">
        <img src={image} alt="" className='img-round' />
        <h3 className='text-success'>Raj Angel</h3>
        <h5 className='text-white'>I think coding is an art and myself is also an artist of this art.</h5>
        <div className="in-line">
          <img src={google} alt="" className="small" />
          <div className="company mx-1 my-2">Software engineer at Google</div>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Image} className="d-block width-90 mx-auto" alt="..."/>
      <div className="carousel-caption">
      <img src={dsp} alt="" className='img-round' />
        <h3 className='text-success'>D Star Pandey</h3>
        <h6 className='text-white'>I went to Raj Kumar for creating my commercial website , he is really awesome developer. He created the website very quickly and it was beautiful</h6>
        <div className="in-line bg-secondary">
          <img src={amazon} alt="" className="small" />
          <div className="company mx-1 my-2">Intern at Amazon</div>
        </div>
      </div>
    </div>

    <div className="carousel-item">
      <img src={Image} className="d-block width-90 mx-auto" alt="..."/>
      <div className="carousel-caption">
      <img src={nitish} alt="" className='img-round' />
        <h3 className='text-success'>Nitish Kumar Mourya</h3>
        <h6 className='text-white'>I went to Raj Kumar to learn Java and he taught me such Java that today I am a 4 star coder on HackerRank.</h6>
        <div className="in-line bg-secondary">
          <img src={paypal} alt="" className="small" />
          <div className="company mx-1 my-2">Intern at PayPal</div>
        </div>
      </div>
    </div>

    <div className="carousel-item">
      <img src={Image} className="d-block width-90 mx-auto" alt="..."/>
      <div className="carousel-caption">
      <img src={mahtab} alt="" className='img-round' />
        <h3 className='text-success'>Mahtab Alam</h3>
        <h6 className='text-white'>I had gone to Raj Kumar with a very difficult DSA question. He solved the question very quickly. He is really a genius Guy.</h6>
        <div className="in-line">
          <img src={amazon} alt="" className="small" />
          <div className="company mx-1 my-2">Intern at Amazon</div>
        </div>
      </div>
    </div>

    <div className="carousel-item">
      <img src={Image} className="d-block width-90 mx-auto" alt="..."/>
      <div className="carousel-caption">
      <img src={amit} alt="" className='img-round' />
        <h3 className='text-success'>Amit Kumar</h3>
        <h6 className='text-white'>Rajkumar is a studying boy. I feel that if there is any better guy in my pure class it is this. He is the first one to solve all the questions given by my teachers. And sometimes he solves such a question which even the teacher could not solve.</h6>
        <div className="in-line">
          <img src={wipro} alt="" className="small" />
          <div className="company mx-1 my-2">Wipro</div>
        </div>
      </div>
    </div>

    <div className="carousel-item">
      <img src={Image} className="d-block width-90 mx-auto" alt="..."/>
      <div className="carousel-caption">
      <img src={dsp} alt="" className='img-round' />
        <h3 className='text-success'>D Star Pandey</h3>
        <h6 className='text-white'>I went to Raj Kumar for creating my commercial website , he is really awesome developer. He created the website very quickly and it was beautiful</h6>
        <div className="in-line">
          <img src={amazon} alt="" className="small" />
          <div className="company mx-1 my-2">Intern at Amazon</div>
        </div>
      </div>
    </div>

    <div className="carousel-item">
      <img src={Image} className="d-block width-90 mx-auto" alt="..."/>
      <div className="carousel-caption">
      <img src={dsp} alt="" className='img-round' />
        <h3 className='text-success'>D Star Pandey</h3>
        <h6 className='text-white'>I went to Raj Kumar for creating my commercial website , he is really awesome developer. He created the website very quickly and it was beautiful</h6>
        <div className="in-line">
          <img src={amazon} alt="" className="small" />
          <div className="company mx-1 my-2">Intern at Amazon</div>
        </div>
      </div>
    </div>
    <div className="carousel-item bg-primary width-900">
      {/* <Link to={Addcoments}></Link> */}
    <img src={coments} className="d-block width-90 mx-auto" alt="..." />
    <div className="carousel-caption">
      <Router>
        <Link to="/addcoment"><h6 className='text-white'>Add Your own comments about me.</h6></Link>
        <Switch>
          <Route exact path='/addcoment'>
            <Addcoments/>
          </Route>
        </Switch>
    
    </Router>
    </div>
    
    
    </div>
    
  </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  );
}

export default IndividualIntervalsExample;