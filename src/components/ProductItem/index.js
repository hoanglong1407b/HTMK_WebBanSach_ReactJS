import {Link} from 'react-router-dom'
import images from '../../assets/img/index'


function ProductItem({name, author, price, col}) {
   return ( 
      <div class={col}>
         <Link to="/detailProduct" class="classify__linkproduct">
            <div class="classify__product">
               <div class="classify-product__box"> 
                  <img src={images.product} alt="" class="classify-product__img"/>
               </div>
               <div class="classify-product__info">
                  <p class="classify-product__title">{name}</p>
                  <p class="classify-product__author">{author}</p>
                  <div class="classify-product__pricebox">
                     <span class="classify-pricebox__lastprice">{price}</span>
                  </div>
               </div>
            </div>
         </Link>
      </div>
    );
}

export default ProductItem;