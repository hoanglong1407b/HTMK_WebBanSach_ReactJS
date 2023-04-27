import images from '../../assets/img/index'


function Slider() {
   return ( 
      <div className="app-container__slider">
         <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
            <div className="carousel-item active">
               <img src={images.slide} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
               <img src={images.slide} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
               <img src={images.slide} className="d-block w-100" alt="..."/>
            </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
            </a>
         </div>
      </div>
    );
}

export default Slider;