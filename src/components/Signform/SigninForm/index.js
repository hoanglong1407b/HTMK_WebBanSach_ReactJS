function SigninForm() {
   return ( 
      <>
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
      </>
    );
}

export default SigninForm;