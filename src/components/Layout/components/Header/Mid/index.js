import Phone from "./Phone";
import CartButton from "./CartButton";
import Search from "./Search";
import {Link} from "react-router-dom"
import images from '../../../../../assets/img/index'

function Mid() {
   return ( 
      <div className="header__mid">
         <div className="grid">
            <Link to="/" className="header-mid__logo-link">
               <img src={images.logo} alt="" className="header-mid__logo"/>
            </Link>
            <div className="header-mid__search-box">
               <Search/>
            </div>
            {/* Div chứa thông tin, nút */}
            <div className="header-mid__functions">
               <Phone phone="079 469 0384" />
               <CartButton/>
            </div>
         </div>
      </div>
    );
}

export default Mid;