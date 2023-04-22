import images from '../../assets/img/index'


function Slider() {
   return ( 
      <div class="app-container__slider">
         <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
            <div class="carousel-item active">
               <img src={images.slide} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
               <img src={images.slide} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
               <img src={images.slide} class="d-block w-100" alt="..."/>
            </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
            </a>
         </div>
      </div>
    );
}

export default Slider;