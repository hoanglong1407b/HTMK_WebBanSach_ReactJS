import './LogPage.css'
// import './viewForm.js' CHẠY BỊ LỖI

function LogPage() {
   return ( 
   <>
      <div className="app-container__sign">
      <div className="form__container">
            <div className="form__header">
               <h3 id="header_signup" className="sign__heading">Đăng nhập</h3>
               <h3 id="header_signin" className="sign__heading">Đăng ký</h3> 
               <div className="form-header__underline"></div>   
            </div>  

            {/* <div className="alert alert-success">
            </div> */}

            <div className="form__group">
               <form id="form_signin" action="{{URL::to('/login-customer')}}" method="POST" className="form__sign" enctype="multipart/form-data">
                  <div className="sign__group">
                     
                        <label for="username" className="sign-group__label">Tên tài khoản</label>
                        <input id="username" name="email" type="text" className="sign-group__input" placeholder="VD: hoanglong1234"/>
                        {/* {!! $errors->first('email', '<small className="text-danger">:message</small>') !!} */}
                        <span className="sign-group__message"></span>
                  </div>
   
                                    
                  <div className="sign__group">
                        <label for="password" className="sign-group__label">Mật khẩu</label>
                        <input id="password" name="password" type="password" className="sign-group__input" placeholder="VD: Long1234"/>
                        {/* {!! $errors->first('password', '<small className="text-danger">:message</small>') !!} */}
                        <span className="sign-group__message"></span>
                  </div>
                  
                  <div className="sign__box">
                        <input id="remember_password" name="remember_password" className="sign-group__checkbox" type="checkbox"/>
                        <span className="sign-group__message sign-box__message">Ghi nhớ mật khẩu</span>
                  </div>
   
                  <button className="sign__button">Đăng nhập</button>
   
               </form>

               <form id="form_signup" action="{{ route('checkregis') }}" method="POST" className="form__sign" enctype="multipart/form-data">          
                  <div className="sign__group" style={{display: 'none'}}>
                        <label for="fullname2" className="sign-group__label"></label>
                        <input id="fullname2" name="customer_avatar" type="hidden" className="sign-group__input" value="{{asset('/backend/assets/img/avatars/1.jpg')}}"/>
                        <span className="sign-group__message"></span>
                  </div>
                  <div className="sign__group">
                        <label for="fullname" className="sign-group__label">Tên đầy đủ</label>
                        <input id="fullname" name="customer_name" type="text" className="sign-group__input" placeholder="VD: Hoàng Long"/>
                        {/* {!! $errors->first('customer_name', '<small className="text-danger">:message</small>') !!} */}
                        <span className="sign-group__message"></span>
                  </div>
   
                  <div className="sign__group">
                        <label for="username" className="sign-group__label">Tên tài khoản</label>
                        <input id="username" name="customer_username" type="text" className="sign-group__input" placeholder="VD: hoanglong1234"/>
                        {/* {!! $errors->first('customer_username', '<small className="text-danger">:message</small>') !!} */}
                        <span className="sign-group__message"></span>
                  </div>
   
                  <div className="sign__group">
                        <label for="email" className="sign-group__label">Email</label>
                        <input id="email" name="email" type="email" className="sign-group__input" placeholder="VD: hoanglong@gmail.com"/>
                        {/* {!! $errors->first('email', '<small className="text-danger">:message</small>') !!} */}
                        <span className="sign-group__message"></span>
                  </div>
   
                  <div className="sign__group">
                        <label for="phone" className="sign-group__label">Số điện thoại</label>
                        <input id="phone" name="customer_phone" type="number" className="sign-group__input" placeholder="VD: 09081234567"/>
                        {/* {!! $errors->first('customer_phone', '<small className="text-danger">:message</small>') !!} */}
                        <span className="sign-group__message"></span>
                  </div>
                  
                  <div className="sign__group">
                        <label for="password" className="sign-group__label">Mật khẩu</label>
                        <input id="password" name="password" type="password" className="sign-group__input" placeholder="VD: Long1234"/>
                        {/* {!! $errors->first('password', '<small className="text-danger">:message</small>') !!} */}
                        <span className="sign-group__message"></span>
                  </div>
   
                  <div className="sign__group">
                        <label for="password_confirm" className="sign-group__label">Nhập lại mật khẩu</label>
                        <input id="password_confirm" name="confirm_password" type="password" className="sign-group__input" placeholder="Nhập lại mật khẩu"/>
                        {/* {!! $errors->first('confirm_password', '<small className="text-danger">:message</small>') !!} */}
                        <span className="sign-group__message"></span>
                  </div>
   
                  <button className="sign__button">Đăng ký</button>
   
               </form>
            </div>        
      </div>
      </div>
   </>
   );
}

export default LogPage;