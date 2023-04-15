function Home() {
   return (
      <>
      <div class="grid">
         <div class="row">
               <div class="col">
                  <div class="app-container__slider">
                     <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                           <div class="carousel-inner">
                           <div class="carousel-item active">
                              <img src="{{('./frontend/img/slider/slide4.jpg')}}" class="d-block w-100" alt="..."/>
                           </div>
                           <div class="carousel-item">
                              <img src="{{('./frontend/img/slider/slide1.jpg')}}" class="d-block w-100" alt="..."/>
                           </div>
                           <div class="carousel-item">
                              <img src="{{('./frontend/img/slider/slide2.jpg')}}" class="d-block w-100" alt="..."/>
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
               </div>
         </div>
      </div>
      <div class="grid">
         <div class="row">
               <div class="col">
                  <div class="classify">
                     <h2 class="classify__title">
                           <p>Sách nổi bật</p>
                     </h2>
                     <div class="classify__products">
                           <div class="row">
                              <div class="col-3">
                                 <a href="{{url('pDetail/' . $valueproduct_id)}}" class="classify__linkproduct">
                                       <div class="classify__product">
                                          <div class="classify-product__box">
                                             <img src="{{asset('/frontend/img/products')}}/{{$valueproduct_img}}" alt="" class="classify-product__img"/>
                                          </div>
                                          <div class="classify-product__info"> 
                                             <p class="classify-product__title">$valueproduct_name</p>
                                             <p class="classify-product__author">valueproduct_author</p>
                                             <div class="classify-product__pricebox">
                                                   <span class="classify-pricebox__lastprice">$valueproduct_priceđ</span>
                                             </div>
                                          </div>
                                       </div>
                                 </a>
                              </div>
                           </div>
                           
                     </div>
                  </div>
               </div>
         </div>
      </div>
      <div class="grid__full-width app-class__container">
         <div class="grid"> 
               <div class="row">
                  <div class="col">
                     <div class="classify">
                           <h2 class="classify__title">
                              <p>Tất cả</p>
                              <a href="{{url('/categorySelling')}}" class="">Xem thêm </a>
                           </h2>
                           <div class="classify__products">
                              <div class="row">
                                
                                       <div class="col-3">
                                          <a href="{{url('pDetail/' . $valueproduct_id)}}" class="classify__linkproduct">
                                             <div class="classify__product">
                                                   <div class="classify-product__box"> 
                                                      <img src="{{asset('/frontend/img/products')}}/{{$valueproduct_img}}" alt="" class="classify-product__img"/>
                                                   </div>
                                                   <div class="classify-product__info">
                                                      <p class="classify-product__title">valueproduct_name</p>
                                                      <p class="classify-product__author">valueproduct_author</p>
                                                      <div class="classify-product__pricebox">
                                                         <span class="classify-pricebox__lastprice">valueproduct_price</span>
                                                      </div>
                                                   </div>
                                             </div>
                                          </a>
                                       </div>
                              </div>
                              
                           </div>
                     </div>
                  </div>
               </div>
         </div>
      </div>

      <div class="grid">
         <div class="row">
               <div class="col">
                  <div class="classify">
                     <h2 class="classify__title">
                           <p>Tiểu thuyết</p>
                     </h2>
                     <div class="classify__products">
                           <div class="row">
                              <div class="col-3">
                                 <a href="{{url('pDetail/' . $valueproduct_id)}}" class="classify__linkproduct">
                                       <div class="classify__product">
                                          <div class="classify-product__box"> 
                                             <img src="{{asset('/frontend/img/products')}}/{{$valueproduct_img}}" alt="" class="classify-product__img"/>
                                          </div>
                                          <div class="classify-product__info">
                                             <p class="classify-product__title">valueproduct_name</p>
                                             <p class="classify-product__author">$valueproduct_author</p>
                                             <div class="classify-product__pricebox">
                                                   <span class="classify-pricebox__lastprice">valueproduct_pricđ</span>
                                             </div>
                                          </div>
                                       </div>
                                 </a>
                              </div>
                           </div>
                           
                     </div>
                  </div>
               </div>
         </div>
      </div>
      </>

   )
}

export default Home;