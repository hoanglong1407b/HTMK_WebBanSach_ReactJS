function ProductItem({name, author, price, col}) {
   return ( 
      <div class={col}>
         <a href="{{url('pDetail/' . $valueproduct_id)}}" class="classify__linkproduct">
            <div class="classify__product">
               <div class="classify-product__box"> 
                  <img src="{{asset('/frontend/img/products')}}/{{$valueproduct_img}}" alt="" class="classify-product__img"/>
               </div>
               <div class="classify-product__info">
                  <p class="classify-product__title">{name}</p>
                  <p class="classify-product__author">{author}</p>
                  <div class="classify-product__pricebox">
                     <span class="classify-pricebox__lastprice">{price}</span>
                  </div>
               </div>
            </div>
         </a>
      </div>
    );
}

export default ProductItem;