import ProductItem from "../../components/ProductItem";
import Slider from "../../components/Slider";

function Home() {
   return (
      <>
      <div class="grid">
         <div class="row">
            <div class="col">
               <Slider/>
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
                           <ProductItem name="Sách hay sách đỉnh sách xịn quá trời xịn" author="Long nè" price="1000000000đ" col="col-3"/>
                           <ProductItem name="Sách hay sách đỉnh sách xịn quá trời xịn" author="Long nè" price="1000000000đ" col="col-3"/>
                           <ProductItem name="Sách hay sách đỉnh sách xịn quá trời xịn" author="Long nè" price="1000000000đ" col="col-3"/>
                           <ProductItem name="Sách hay sách đỉnh sách xịn quá trời xịn" author="Long nè" price="1000000000đ" col="col-3"/>
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
                                 <ProductItem name="Sách hay sách đỉnh sách xịn quá trời xịn" author="Long nè" price="1000000000đ" col="col-3"/>
                                 <ProductItem name="Sách hay sách đỉnh sách xịn quá trời xịn" author="Long nè" price="1000000000đ" col="col-3"/>
                                 <ProductItem name="Sách hay sách đỉnh sách xịn quá trời xịn" author="Long nè" price="1000000000đ" col="col-3"/>
                                 <ProductItem name="Sách hay sách đỉnh sách xịn quá trời xịn" author="Long nè" price="1000000000đ" col="col-3"/>
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
                           <ProductItem name="Sách hay sách đỉnh sách xịn quá trời xịn" author="Long nè" price="1000000000đ" col="col-3"/>
                           <ProductItem name="Sách hay sách đỉnh sách xịn quá trời xịn" author="Long nè" price="1000000000đ" col="col-3"/>
                           <ProductItem name="Sách hay sách đỉnh sách xịn quá trời xịn" author="Long nè" price="1000000000đ" col="col-3"/>
                           <ProductItem name="Sách hay sách đỉnh sách xịn quá trời xịn" author="Long nè" price="1000000000đ" col="col-3"/>
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