import {Link} from 'react-router-dom'

function Navbar() {
   return ( 
      <>
         <nav className="navbar">
            <div className="grid"> 
               <ul className="navbar__list">
                  <li className="navbar__item navbar_logo"><Link to="/" className="navbar__link">BookGarden</Link></li>
               </ul>
               <ul className="navbar__list">
                  <li className="navbar__item"><Link to="/log" className="navbar__link">Đăng nhập</Link></li>
                  <li className="navbar__item"><Link to="/log" className="navbar__link">Đăng ký</Link></li>
               </ul>
               <ul className="navbar__list">
                  <li className="navbar__item"><Link to="{{URL::to('/logout-customer')}}" className="navbar__link">Đăng xuất</Link></li>
                  <li className="navbar__item"><Link to="/accountInfo" className="navbar__link">Châu Hoàng Long</Link></li>
                  <li className="navbar__item"><Link to="/historyOrder" className="navbar__link">Kiểm tra đơn hàng</Link></li>
               </ul>
            </div>
            </nav>
      </>
    );
}

export default Navbar;