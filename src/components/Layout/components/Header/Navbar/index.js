function Navbar() {
   return ( 
      <>
         <nav className="navbar">
            <div className="grid"> 
               <ul className="navbar__list">
                  <li className="navbar__item navbar_logo"><a href="#" className="navbar__link">BookGarden</a></li>
               </ul>
               <ul className="navbar__list">
                  <li className="navbar__item"><a href="{{URL::to('/signInSignUp')}}" className="navbar__link">Đăng nhập</a></li>
                  <li className="navbar__item"><a href="{{URL::to('/signInSignUp')}}" className="navbar__link">Đăng ký</a></li>
               </ul>
               <ul className="navbar__list">
                  <li className="navbar__item"><a href="{{URL::to('/logout-customer')}}" className="navbar__link">Đăng xuất</a></li>
                  <li className="navbar__item"><a href="{{URL::to('/accountInfo')}}/{{ auth('customer')->user()->customer_id }}" className="navbar__link">Châu Hoàng Long</a></li>
                  <li className="navbar__item"><a href="{{URL::to('/historyOrder')}}/{{ auth('customer')->user()->customer_id }}" className="navbar__link">Kiểm tra đơn hàng</a></li>
               </ul>
            </div>
            </nav>
      </>
    );
}

export default Navbar;