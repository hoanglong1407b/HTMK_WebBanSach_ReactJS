import './InfoSidebar.css';


function InfoSidebar() {
   return ( 
        <div className="profile__sidebar">
            <ul className="profile-sidebar__list">
                <li className="profile-sidebar__item">
                    <i className="profile-sidebar__icon fa-solid fa-user"></i>
                    <a href="{{URL::to('/accountInfo')}}/{{ auth('customer')->user()->customer_id }}" className="profile-sidebar__link">
                        Thông tin tài khoản
                    </a>
                </li>
                <li className="profile-sidebar__item">
                    <i className="profile-sidebar__icon fa-sharp fa-solid fa-rectangle-vertical-history"></i>
                    <a href="{{URL::to('/historyOrder')}}/{{ auth('customer')->user()->customer_id }}" className="profile-sidebar__link">
                        Lịch sử mua hàng
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default InfoSidebar;