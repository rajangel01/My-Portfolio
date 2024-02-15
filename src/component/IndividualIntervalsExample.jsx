// import Carousel from 'react-bootstrap/Carousel';
import Image from './img/developer.jpeg';
import image from './img/myImage.png'

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
  </div>
  <div className="carousel-inner ">
    <div className="carousel-item active">
      <img src={Image} className="d-block width-90 mx-auto" alt="..."/>
      <div className="carousel-caption text-black">
        <img src={image} alt="" className='img-round' />
        <h3 className='text-success'>Raj Angel</h3>
        <h5 className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, id commodi. Ipsum dolor accusantium facilis maiores.</h5>
        <div className="in-line">
          <img src={image} alt="" className="small" />
          <div className="company mx-3">Google</div>
        </div>
      </div>
    </div>
    <div className="carousel-item ">
      <img src={Image} className="d-block width-90 mx-auto" alt="..."/>
      <div className="carousel-caption text-black">
        <h3>Second slide label</h3>
        <h6>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam corporis voluptas et illum dolores dolore rerum?</h6>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Image} className="d-block width-90 mx-auto" alt="..."/>
      <div className="carousel-caption text-black">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
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