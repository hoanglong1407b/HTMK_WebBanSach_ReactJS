import {Link} from 'react-router-dom'
import images from '../../assets/img/index'


function ProductItem({name, author, price, col}) {
   return ( 
      <div className={col}>
         <Link to="/detailProduct" className="classify__linkproduct">
            <div className="classify__product">
               <div className="classify-product__box"> 
                  <img src={images.product} alt="" className="classify-product__img"/>
               </div>
               <div className="classify-product__info">
                  <p className="classify-product__title">{name}</p>
                  <p className="classify-product__author">{author}</p>
                  <div className="classify-product__pricebox">
                     <span className="classify-pricebox__lastprice">{price}</span>
                  </div>
               </div>
            </div>
         </Link>
      </div>
    );
}

export default ProductItem;