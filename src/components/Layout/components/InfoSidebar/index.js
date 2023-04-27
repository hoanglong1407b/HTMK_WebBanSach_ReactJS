import {Link} from 'react-router-dom'

// import './InfoSidebar.css';


function InfoSidebar() {
   return ( 
        <div className="profile__sidebar">
            <ul className="profile-sidebar__list">
                <li className="profile-sidebar__item">
                    <i className="profile-sidebar__icon fa-solid fa-user"></i>
                    <Link to="/accountInfo" className="profile-sidebar__link">
                        Thông tin tài khoản
                    </Link>
                </li>
                <li className="profile-sidebar__item">
                    <i className="profile-sidebar__icon fa-sharp fa-solid fa-rectangle-vertical-history"></i>
                    <Link to="/historyOrder" className="profile-sidebar__link">
                        Lịch sử mua hàng
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default InfoSidebar;