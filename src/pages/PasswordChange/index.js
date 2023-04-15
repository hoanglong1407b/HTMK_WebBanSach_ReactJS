import './PasswordChange.css'

function PasswordChange() {
    return ( 
    <>
        <div className="grid">
            <div className="row">
                <div className="col-3">
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
                </div>
                <div className="col-9">
                    <div className="container__account">
                        <h2 className="account__title">Đổi mật khẩu</h2>
                        <form action="{{ URL::to('/savechangepassword') }}" method="post" className="account__form">
                            <div className="account__info">
                                <input type="hidden" value="{{$customer->customer_id}}" name="customer_id"/>

                                <div className="account-info__group">
                                    <label for="password" className="account-info__label">Mật khẩu mới</label>
                                    <input id="password" name="new_password" type="password" className="account-info__input" value=""/>
                                </div>
                                
                                <div className="account-info__group">
                                    <label for="passwordConfirm" className="account-info__label">Nhập lại mật khẩu mới</label>
                                    <input id="passwordConfirm" name="new_passwordConfirm" type="password" className="account-info__input" value=""/>
                                </div>
                                
                                <div className="account-info__group">
                                    <label for="phone" className="account-info__label"></label>
                                    <button className="account-info__button">Lưu</button>
                                </div>
                                
                            </div>
                            <div className="account__avatar">
                                <div className="account-avatar__avtbox">
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
    </>
     );
}

export default PasswordChange;