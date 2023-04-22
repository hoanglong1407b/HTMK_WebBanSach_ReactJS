import './Payment.css'
import {Link} from 'react-router-dom'


function Payment() {
    return ( 
    <>
       <div className="app-container__pay">            
        
        <form id="form_payment" action="{{ URL::to('/save-checkout-customer') }}" method="POST" className="form__pay">
            <h3 className="pay__heading">Thông tin giao hàng</h3>

            <div className="pay__group">
                <label for="fullname" className="pay-group__label">Họ tên</label>
                <input id="fullname" name="shipping_name" type="text" className="pay-group__input" placeholder="VD: hoanglong1234"/>
                <span className="pay-group__message">
                     {/* {!! $errors->first('shipping_name', '<small className="text-danger">:message</small>') !!} */}
                </span>
            </div>

                            
            <div className="pay__group">
                <label for="email" className="pay-group__label">Email nhận hàng</label>
                <input id="email" name="shipping_email" type="text" className="pay-group__input" placeholder="VD: hoanglong@gmail.com"/>
                <span className="pay-group__message">
                    {/* {!! $errors->first('shipping_email', '<small className="text-danger">:message</small>') !!} */}
                </span>
            </div>

            <div className="pay__group">
                <label for="address" className="pay-group__label">Địa chỉ</label>
                <input id="address" name="shipping_address" type="text" className="pay-group__input" placeholder="VD: 1 đường số 1 phường 1 quận 1 tp hcm"/>
                <span className="pay-group__message">
                    {/* {!! $errors->first('shipping_address', '<small className="text-danger">:message</small>') !!} */}
                </span>
            </div>

            <div className="pay__group">
                <label for="phone" className="pay-group__label">Số điện thoại</label>
                <input id="phone" name="shipping_phone" type="number" className="pay-group__input" placeholder="VD: 09012345678"/>
                <span className="pay-group__message">
                    {/* {!! $errors->first('shipping_phone', '<small className="text-danger">:message</small>') !!} */}
                </span>
            </div>

             <Link to="/payMethod" className="pay__buttonlink">
                <button type="submit" className="pay__button">Giao đến địa chỉ này</button>
             </Link> 

        </form>
    </div>
    </>
     );
}

export default Payment;