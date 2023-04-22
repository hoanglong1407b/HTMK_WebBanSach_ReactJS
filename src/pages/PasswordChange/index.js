import './PasswordChange.css'

function PasswordChange() {
    return ( 
    <>
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
    </>
     );
}

export default PasswordChange;