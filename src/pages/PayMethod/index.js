import './PayMethod.css'

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
                                {/* <!-- <div className="cart__showing"> - */}
                                  
                                    <div className="cart__item cart__showing ">

                                        <div className="cart-item__product cart--flex4">
                                            <div className="cart-item__imgbox">
                                                <img className="cart-item__img" src="URL::to('./frontend/img/products/'.$v_contentoptionsimage)" alt="" width="60"/>
                                            </div>
    
                                            <div className="cart-item__info">
                                                <h2 className="cart-item__title">$v_contentname</h2>
                                                {/* -- <div className="cart-item__box">
                                                    <span>Tác giả:</span>
                                                    <p className="cart-item__author">v_contentweight</p>
                                                </div> --
                                                -- <div className="cart-item__box">
                                                    <span>Loại:</span>
                                                    <p className="cart-item__type">Sách</p>
                                                </div> -- */}
                                            </div>
                                        </div>

                                     
                                            <div className="cart-item__price cart--flex3">
                                                <p className="cart-item__lastprice">tien vnđ'</p>
                                                {/* -- <p className="cart-item__lastprice">102,000 đ</p>
                                                <p className="cart-item__originprice">120,000 đ</p> -- */}
                                            </div>
                                   
                                            <div className="cart-item__quantity cart--flex2 quantity">
                                                <input type="hidden" value="$v_contentrowId" name="rowId_cart" className="form-control"/>
                                            
                                                {/* -- <button className="quantify-down cart-item__down cart-item__btn">-</button> -- */}
                                                <input className="cart_quantity_input" type="number" max="5" min="1" name="cart_quantity" value="$v_contentqty"  disabled/>
                                                {/* -- <button className="quantify-up cart-item__up cart-item__btn">cập nhật</button> -- */}
                                              
                                            </div> 
                                      
                                            <p className="cart-item__total cart--flex2">sub total</p>
                                            <a href="URL::to('/delete-to-cart/'.$v_contentrowId)"><i className="cart-item__icon fa-regular fa-trash"></i></a>
                                       
                                       

                                    </div>
                                   
                                {/* </div> */}
                            </div>
                            
                        </div>
                    </div>
                    
                    <div className="col-3">
                        <div className="cart__prices cart__box">
                            <div className="cart__prices cart__box">
                                <div className="cart-prices__box">
                                    <span>Thue</span>
                                    <p className="cart-prices__before">tien vnd</p>
                                </div>

                                <div className="cart-prices__box">
                                    <span>Tổng tiền</span>
                                    <p className="cart-prices__after">tien vnd</p>
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
                                    <a href="URL::to('/payment')"><button className="cart__button method__button">Mua hàng</button></a>
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