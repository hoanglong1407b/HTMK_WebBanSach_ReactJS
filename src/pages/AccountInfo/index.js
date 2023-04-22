import './AccountInfo.css'

function AccountInfo() {
    return ( 
    <>
        <div className="container__account">
            <h2 className="account__title">Hồ sơ của tôi</h2>

            <form action="{{URL::to('/savechange')}}" className="account__form">
                <div className="account__info">
                    <input type="hidden" value="{{$customer->customer_id}}" name="customer_id"/>
                    <div className="account-info__group">
                        <label for="username" className="account-info__label">Tên đăng nhập</label>
                        <input id="username" name="customer_username" type="text" className="account-info__input" value="{{$customer->customer_username}}"/>
                    </div>
                    <div className="account-info__group">
                        <label for="fullname" className="account-info__label">Tên</label>
                        <input id="fullname" name="customer_name" type="text" className="account-info__input" value="{{$customer->customer_name}}"/>
                    </div>
                    <div className="account-info__group">
                        <label for="email" className="account-info__label">Email</label>
                        <input id="email" name="email" type="email" className="account-info__input" value="{{$customer->email}}"/>
                    </div>
                    <div className="account-info__group">
                        <label for="phone" className="account-info__label">Số điện thoại</label>
                        <input id="phone" name="customer_phone" type="text" className="account-info__input" value="{{$customer->customer_phone}}"/>
                    </div>

                    <div className="account-info__group">
                        <label for="phone" className="account-info__label"><a href="{{URL::to('/accountPasswordChange')}}/{{ auth('customer')->user()->customer_id }}" className="account-info__link">Đổi mật khẩu</a></label>
                        
                    </div>
                    <div className="account-info__group">
                        <label for="phone" className="account-info__label"></label>
                        <button className="account-info__button">Lưu</button>
                    </div>
                    
                    
                </div>
                <div className="account__avatar">
                    <div className="account-avatar__avtbox">
                        
                        <img className="avatar" 
                            style={{verticalAlign: 'middle',width: '160px',height: '160px', borderRadius: '50%'}} 
                            src="{{asset('/frontend/img/account/')}}/{{$customer->customer_avatar}}" 
                            alt="{{$customer->customer_avatar}}" />
                        
                        <input type="file" name="avatar" value="" aria-label="File browser example" className="account-avatar__input" />   

                    </div>
                </div>
            </form>
        </div>
    </>
     );
}

export default AccountInfo;