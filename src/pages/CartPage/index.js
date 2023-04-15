import './CartPage.css'

function CartPage() {
    return ( 
    <>
        <div className="grid">
                <div className="row">
                    <div className="col-9">
                        <div className="container__cart">
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
                                  
                                    <div className="cart__item cart__showing ">


                                       
                                        <div className="cart-item__product cart--flex4">
                                            <div className="cart-item__imgbox">
                                                <img className="cart-item__img" src="{{URL::to('./frontend/img/products/'.$v_contentoptionsimage)}}" alt="" width="60"/>
                                            </div>
    
                                            <div className="cart-item__info">
                                                <h2 className="cart-item__title">contentname</h2>
                                                <div className="cart-item__box">
                                                    <span>Loại:</span>
                                                    <p className="cart-item__type">Sách</p>
                                                </div>
                                            </div>
                                        </div>

                                        
                                            <div className="cart-item__price cart--flex3">
                                                <p className="cart-item__lastprice">vnđ</p>
                                                 <p className="cart-item__lastprice">102,000 đ</p>
                                                <p className="cart-item__originprice">120,000 đ</p>
                                            </div>
                                        <form className="cart-item__quantity cart--flex2 quantity"  action="{{URL::to('/update-cart-quantity')}}" method="POST">
                                             <div className="cart-item__quantity cart--flex2 quantity">
                                                <input type="hidden" value="{{$v_contentrowId}}" name="rowId_cart" className="form-control"/>
                                                 <button className="quantify-down cart-item__down cart-item__btn">-</button>
                                                <input className="cart_quantity_input" type="number" max="5" min="1" name="cart_quantity" value="{{$v_contentqty}}"/>
                                                 <button className="quantify-up cart-item__up cart-item__btn"></button>
                                                <input type="submit" value="Cập nhật" name="update_qty" className="cart-item__update"/>
                                             </div> 
                                        </form>
                                            <p className="cart-item__total cart--flex2">tổng giá tiền</p>
                                            <a href="{{URL::to('/delete-to-cart/'.$v_contentrowId)}}"><i className="cart-item__icon fa-regular fa-trash"></i></a>
                                       
                                    </div>
                                   
                            </div>
                        </div>
                     
                    </div>
                   
                    <div className="col-3">
                        <div className="cart__payment">
                             <div className="cart__promotion cart__box">
                                <h2 className="cart-promotion__title">BookGarden Khuyến mãi</h2>
                                <div className="cart-promotion__selection">
                                    <select name="" id="" className="cart-promotion__select">
                                        <option value="0" className="cart-promotion__option">-- Chọn mã khuyến mãi --</option>
                                        <option value="1" className="cart-promotion__option">KM1</option>
                                        <option value="2" className="cart-promotion__option">KM2</option>
                                        <option value="3" className="cart-promotion__option">KM3</option>
                                    </select>
                                </div>
                                
                            </div>
                            <div className="cart__prices cart__box">
                                <div className="cart-prices__box">
                                    <span>Thue</span>
                                    <p className="cart-prices__before">Giá trước</p>
                                </div>

                                <div className="cart-prices__box">
                                    <span>Tổng tiền</span>
                                    <p className="cart-prices__after">Tổng giá</p>
                                </div>
                            </div>
                            <div className="cart__box">
                               
                            </div>
                            <div className="cart__box">
                                <a href="{{URL::to('/payment')}}"><button className="cart__button">Mua hàng</button></a>
                            </div>
                            
                                    <p className="cart__attribute cart--flex2">Chọn sản phẩm</p>
                        </div>
                    </div>
                </div>
            </div>
    </>
     );
}

export default CartPage;