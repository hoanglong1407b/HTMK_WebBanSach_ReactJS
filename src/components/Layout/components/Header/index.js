import style from './Header.css';

function Header() {
   return ( 
      <header className="header">
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
                        <li className="navbar__item"><a href="{{URL::to('/accountInfo')}}/{{ auth('customer')->user()->customer_id }}" className="navbar__link">customer_name</a></li>
                        <li className="navbar__item"><a href="{{URL::to('/historyOrder')}}/{{ auth('customer')->user()->customer_id }}" className="navbar__link">Kiểm tra đơn hàng</a></li>
                       
                    </ul>
                      
                   
                </div>
            </nav>

            <div className="header__mid">
                <div className="grid">
                    <a href="{{URL::to('/')}}" className="header-mid__logo-link">
                        <img src="{{asset('frontend/img/logo2.png')}}" alt="" className="header-mid__logo"/>
                    </a>
                    <div className="header-mid__search-box">
                        
                        <form className="header-mid__search-box" action="search" method="GET">
                            <select className="header-mid__select header-mid__search-box__input" name="search-option" id="searchSelect">
                                <option value="0" className="header-mid__option">Tất cả</option>
                               
                                    <option value="{{$value->category_id}}" className="header-mid__option">category_name</option>
                                 
                            </select>
                            <div className="header-mid__search-group">
                                    <input type="search" name="tukhoa" className="header-mid__search header-mid__search-box__input" placeholder="Bạn cần tìm gì?"/>
                                    <button className="header-mid__button header-mid__search-box__input"><i className="fa-solid fa-magnifying-glass"></i></button>
                            </div>
                        </form>

                    </div>

                    {/* Div chứa thông tin, nút */}
                    <div className="header-mid__functions">
                        <div className="header-mid__info">
                            <i className="fa-regular fa-headset"></i>
                            <div className="header-mid-info__title">
                                <h2>012 345 698</h2>
                                <span>Hot line</span>
                            </div>
                        </div>

                        <a href="{{URL::to('/cart')}}" className="header-mid__cartlink">
                            <div className="header-mid__cart">
                                <i className="header-mid__cart-logo fa-regular fa-cart-shopping"></i>
                                <span className="header-mid__cart-title">Giỏ hàng</span>
                                <span className="header-mid__cart-quantity">Cart::count</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {/* <!-- Phần dưới header --> */}
            <div className="header__bottom">
                <div className="grid">
                    {/* <!-- Xài bootstrap chắc biết =)) --> */}
                    <div className="row">
                        <div className="header-bottom__container col-5">
                            {/* <!-- danh mục header --> */}
                            <div className="header__category">
                                <i className="header-category__icon fa-solid fa-bars"></i>
                                <span className="header-category__title">
                                    Danh mục sản phẩm
                                </span>
                                <i className="header-category__icon fa-sharp fa-solid fa-caret-down"></i>
                                {/* <!-- phần drop xuống của danh mục (level 1: dọc) --> */}
                                <div className="header-category__dropdown">
                                    <ul className="header-dropdown__list">
                                        {/* <!-- 1 loại danh mục nằm trong thẻ li --> */}
                                            <li className="header-dropdown__item">
                                                <a href="{{url('category/' . $value->category_id)}}" className="header-dropdown__link">
                                                    <div className="header-dropdown__link-box">
                                                        <i className="header-dropdown__link-box__icon fa-solid fa-bars"></i>
                                                        <span className="header-dropdown__link-box__title">
                                                            category_name
                                                        </span>
                                                    </div>
                                                    <i className="header-dropdown__link-icon fa-solid fa-caret-right"></i>
                                                </a>
                                               
                                            </li>  
                                    </ul>
                                    
                                </div>
                            </div>

                            <div className="header__category">
                                <i className="header-category__icon fa-solid fa-bars"></i>
                                <span className="header-category__title">
                                    Nhà xuất bản
                                </span>
                                <i className="header-category__icon fa-sharp fa-solid fa-caret-down"></i>
                                {/* <!-- phần drop xuống của danh mục (level 1: dọc) --> */}
                                <div className="header-category__dropdown">
                                    <ul className="header-dropdown__list">
                                        {/* <!-- 1 loại danh mục nằm trong thẻ li --> */}
                                            <li className="header-dropdown__item">
                                                <a href="{{url('brand/' . $value->brand_id)}}" className="header-dropdown__link">
                                                    <div className="header-dropdown__link-box">
                                                        <i className="header-dropdown__link-box__icon fa-solid fa-bars"></i>
                                                        <span className="header-dropdown__link-box__title">
                                                            brand_name
                                                        </span>
                                                    </div>
                                                    <i className="header-dropdown__link-icon fa-solid fa-caret-right"></i>
                                                </a>
                                               
                                            </li>   
                                        
                                    </ul>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            {/* <!-- cần thì mới xài, nó nằm kế bên cái danh mục sản phẩm --> */}
                            <div className="empty">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    );
}

export default Header;