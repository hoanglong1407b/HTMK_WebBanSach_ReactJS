import './LogPage.css'
import SigninForm from '../../components/Signform/SigninForm';
import SignupForm from '../../components/Signform/SignupForm';
// import './viewForm.js'

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
               <SigninForm/>
               <SignupForm/>
            </div>        
      </div>
      </div>
   </>
   );
}

export default LogPage;