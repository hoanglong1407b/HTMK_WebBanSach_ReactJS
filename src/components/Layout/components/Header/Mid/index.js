import Phone from "./Phone";
import CartButton from "./CartButton";
import Search from "./Search";

function Mid() {
   return ( 
      <div className="header__mid">
         <div className="grid">
            <a href="{{URL::to('/')}}" className="header-mid__logo-link">
               <img src="{{asset('frontend/img/logo2.png')}}" alt="" className="header-mid__logo"/>
            </a>
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