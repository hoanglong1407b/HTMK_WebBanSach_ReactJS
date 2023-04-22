import {Link} from 'react-router-dom'

function CartButton() {
   return ( 
      <Link to="/cartPage" className="header-mid__cartlink">
         <div className="header-mid__cart">
            <i className="header-mid__cart-logo fa-regular fa-cart-shopping"></i>
            <span className="header-mid__cart-title">Giỏ hàng</span>
            <span className="header-mid__cart-quantity">(1)</span>
         </div>
      </Link>
    );
}

export default CartButton;