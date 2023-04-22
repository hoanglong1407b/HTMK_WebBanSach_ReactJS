function CartItem({name, productPrice, type, quantity, productTotal, cartType = "0"}) {
   return ( 
      <div className="cart__item cart__showing ">
         <div className="cart-item__product cart--flex4">
               <div className="cart-item__imgbox">
                  <img className="cart-item__img" src="{{URL::to('./frontend/img/products/'.$v_contentoptionsimage)}}" alt="" width="60"/>
               </div>
               <div className="cart-item__info">
                  <h2 className="cart-item__title">{name}</h2>
                  <div className="cart-item__box">
                        <span>Tác giả:</span>
                        <p className="cart-item__author">v_contentweight</p>
                  </div>
                  <div className="cart-item__box">
                        <span>Loại:</span>
                        <p className="cart-item__type">{type}</p>
                  </div>
               </div>
         </div>
               <div className="cart-item__price cart--flex3">
                  <p className="cart-item__lastprice">vnđ</p>
                     <p className="cart-item__lastprice">{productPrice}</p>
                  <p className="cart-item__originprice">{productPrice}</p>
               </div>
         <form className="cart-item__quantity cart--flex2 quantity"  action="{{URL::to('/update-cart-quantity')}}" method="POST">
                  <div className="cart-item__quantity cart--flex2 quantity">
                     {cartType === "0" && <button className="quantify-down cart-item__down cart-item__btn">-</button>}
                     {cartType === "0" ? <input className="cart_quantity_input" type="number" max="5" min="1" name="cart_quantity" value={quantity}/> :
                     <input className="cart_quantity_input" type="number" max="5" min="1" name="cart_quantity" value={quantity} disabled/>}
                     {cartType === "0" && <button className="quantify-up cart-item__up cart-item__btn">+</button>}
                     {cartType === "0" && <input type="submit" value="Cập nhật" name="update_qty" className="cart-item__update"/>}
                  </div> 
         </form>
         <p className="cart-item__total cart--flex2">{productTotal}</p>
         <a href="{{URL::to('/delete-to-cart/'.$v_contentrowId)}}"><i className="cart-item__icon fa-regular fa-trash"></i></a>
      </div>
    );
}

export default CartItem;