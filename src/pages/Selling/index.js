function Selling() {
   return (
      <div className="grid">
         <div className="row">
            <div className="col-3">
               <div className="container__sidebar">
                     <div className="sidebar__box">
                        <h2 className="sidebar__title classify__title">Loại sách</h2>
                        <ul className="sidebar__list">
                           <a href="{{url('categorySelling/')}}" className="sidebar__link">Tất cả</a>
                                 <li className="sidebar__item">
                                    <a href="{{url('category/' . $value->category_id)}}" className="sidebar__link">valuategory_nam</a>
                                 </li>
                        </ul>
                     </div>

                     <div className="sidebar__box">
                        <h2 className="sidebar__title classify__title">Nhà xuất bản</h2>
                        <ul className="sidebar__list">
                           <a href="{{url('categorySelling/')}}" className="sidebar__link">Tất cả</a>
                                 <li className="sidebar__item">
                                    <a href="{{url('brand/' . $value->brand_id)}}" className="sidebar__link">valubrand_name</a>
                                 </li>
                        </ul>
                     </div>
         
               </div>
            </div>

            <div className="col-9">
               <div className="classify">
                  <h2 className="classify__title">cateName</h2>
                  <div className="classify__products">
                     <div className="row">
                        {/* <div className="col-4">
                           <p className="classify-product__title">đang cập nhật</p>
                        </div> */}
                        <div className="col-4">
                           <a href="{{url('pDetail/' . $value->product_id)}}" className="classify__linkproduct">
                              <div className="classify__product">
                                 <div className="classify-product__box"> 
                                    <img src="{{asset('/frontend/img/products')}}/{{$value->product_img}}" alt="" className="classify-product__img"/>
                                    <div className="classify-product__discount">-15%</div>
                                 </div>
                                 <div className="classify-product__info"> 
                                    <p className="classify-product__title">valueproduct_name</p>
                                    <p className="classify-product__author">valueprodut_author</p>
                                    <div className="classify-product__pricebox">
                                          <span className="classify-pricebox__lastprice">valueproduct_priceđ</span>
                                          <span className="classify-pricebox__originprice">100.000đ</span>
                                          <span className="classify-pricebox__discount">-15%</span>
                                    </div>
                                 </div>
                              </div>
                           </a>
                        </div>

                        <div className="col-4">
                           <a href="{{url('pDetail/' . $value->product_id)}}" className="classify__linkproduct">
                              <div className="classify__product">
                                 <div className="classify-product__box"> 
                                    <img src="{{asset('/frontend/img/products')}}/{{$value->product_img}}" alt="" className="classify-product__img"/>
                                    <div className="classify-product__discount">-15%</div>
                                 </div>
                                 <div className="classify-product__info"> 
                                    <p className="classify-product__title">valueproduct_name</p>
                                    <p className="classify-product__author">valueprodut_author</p>
                                    <div className="classify-product__pricebox">
                                          <span className="classify-pricebox__lastprice">valueproduct_priceđ</span>
                                          <span className="classify-pricebox__originprice">100.000đ</span>
                                          <span className="classify-pricebox__discount">-15%</span>
                                    </div>
                                 </div>
                              </div>
                           </a>
                        </div>
                        
                     </div>
                  </div>
                  {/* <div className="paging__container">
                     <p className="paging__box">1</p>
                     <p className="paging__box">1</p>
                  </div> */}
               </div>
            </div>

         </div>
   </div>
   );
}

export default Selling;