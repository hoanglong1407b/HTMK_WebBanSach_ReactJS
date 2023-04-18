function CartButton() {
   return ( 
      <a href="{{URL::to('/cart')}}" className="header-mid__cartlink">
         <div className="header-mid__cart">
            <i className="header-mid__cart-logo fa-regular fa-cart-shopping"></i>
            <span className="header-mid__cart-title">Giỏ hàng</span>
            <span className="header-mid__cart-quantity">Cart::count</span>
         </div>
      </a>
    );
}

export default CartButton;