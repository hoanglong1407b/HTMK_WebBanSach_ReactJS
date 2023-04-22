import './PayMethod.css'
import CartItem from '../../components/CartItem';
import {Link} from 'react-router-dom'

function PayMethod() {
    return ( 
    <>
        <div className="grid">
                <div className="row">
                    <div className="col-9">
                        <div className="container__cart">
                            <div className="cart__items cart__box payment-check__container">
                                <h3 className="pay__heading payment-check__heading">Thông tin giao hàng</h3>
                
                                <div className="pay__group payment-check__group">
                                    <label for="fullname" className="pay-group__label">Họ tên</label>
                                    <p className="pay-group__input "> $shipping_name </p>
                                </div>
                
                                                
                                <div className="pay__group payment-check__group">
                                    <label for="email" className="pay-group__label">Email nhận hàng</label>
                                    <p className="pay-group__input"> $shipping_email</p>
                                </div>
                
                                <div className="pay__group payment-check__group">
                                    <label for="address" className="pay-group__label">Địa chỉ</label>
                                    <p  className="pay-group__input">$addr</p>
                                </div>
                
                                <div className="pay__group payment-check__group">
                                    <label for="phone" className="pay-group__label">Số điện thoại</label>
                                    <p  className="pay-group__input" >$phone</p>
                                </div>
                           
                            </div> 
                            <div className="cart__attributes cart__box">
                                <div className="cart__showing">
                                    <p className="cart__attribute cart--flex4">Sản phẩm</p>
                                    <p className="cart__attribute cart--flex3">Đơn giá</p>
                                    <p className="cart__attribute cart--flex2">Số lượng</p>
                                    <p className="cart__attribute cart--flex2">Thành tiền</p>
                                    <i className="cart__attribute fa-regular fa-trash"></i>
                                </div>

                            </div>
                            <div className="cart__items cart__box">
                                <CartItem name="Tên sản phẩm" productPrice="1 tỷ đô" type="thể loại sách" quantity="1" productTotal="3 tỷ đô" cartType="1"/>
                                <CartItem name="Tên sản phẩm" productPrice="1 tỷ đô" type="thể loại sách" quantity="1" productTotal="3 tỷ đô" cartType="1"/>
                                <CartItem name="Tên sản phẩm" productPrice="1 tỷ đô" type="thể loại sách" quantity="1" productTotal="3 tỷ đô" cartType="1"/>
                            </div>
                            
                        </div>
                    </div>
                    
                    <div className="col-3">
                        <div className="cart__prices cart__box">
                            <div className="cart__prices cart__box">
                                <div className="cart-prices__box">
                                    <span>Thuế</span>
                                    <p className="cart-prices__before">100.000đ</p>
                                </div>

                                <div className="cart-prices__box">
                                    <span>Tổng tiền</span>
                                    <p className="cart-prices__after">10.000.000đ</p>
                                </div>
                            </div>
                        </div>

                        <form method="POST" action="URL::to('/order_save')">
                            <div className="cart__payment">
                                <div className="cart__promotion cart__box cart__payment-method">
                                    <h2 className="cart-promotion__title payment-method__title">Phương thức thanh toán</h2>
                                    <div className="cart-promotion__box">
                                        <div className="promotion__group">
                                            <input type="radio" id="vat" name="payment_method" value="1" checked/>
                                            <label for="vat">Thanh toán khi nhận hàng</label>
                                        </div>
                                        <div className="promotion__group">
                                            <input type="radio" id="card" name="payment_method" value="2"/>
                                            <label for="card">Thanh toán bằng thẻ</label>
                                        </div>
                                        <div className="promotion__group">
                                            <input type="radio" id="digi" name="payment_method" value="3"/>
                                            <label for="digi">Thanh toán bằng ví điện tử</label>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                                <div className="cart__box">
                                    <Link to="/paySucceed"><button className="cart__button method__button">Mua hàng</button></Link>
                                </div>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
    </>
     );
}

export default PayMethod;