import './CartPage.css'
import CartItem from '../../components/CartItem';
import {Link} from 'react-router-dom'
import { useState } from 'react';

function CartPage() {
    let api = [
        {
            pname: "Sách ABC",
            price: 100000,
            type: "Tiểu thuyết",
            quantity: 1,
        },
        {
            pname: "Sách ABC",
            price: 200000,
            type: "Tiểu thuyết",
            quantity: 2,
        },
        {
            pname: "Sách ABC",
            price: 120000,
            type: "Tiểu thuyết",
            quantity: 3,
        },
    ]
    // let [api2, setApi2] = useState(api);
    let total = 0;
    const items = api.map(function(item){
        let productTotal = item.price * item.quantity;
        total += productTotal;
        return (
            <CartItem name={item.pname} productPrice={item.price} type={item.type} quantity={item.quantity} productTotal={productTotal}/>
        );
    })
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
                                {items}
                            </div>
                        </div>
                     
                    </div>
                   
                    <div className="col-3">
                        <div className="cart__payment">
                            {/* <div className="cart__promotion cart__box">
                                <h2 className="cart-promotion__title">BookGarden Khuyến mãi</h2>
                                <div className="cart-promotion__selection">
                                    <select name="" id="" className="cart-promotion__select">
                                        <option value="0" className="cart-promotion__option">-- Chọn mã khuyến mãi --</option>
                                        <option value="1" className="cart-promotion__option">KM1</option>
                                        <option value="2" className="cart-promotion__option">KM2</option>
                                        <option value="3" className="cart-promotion__option">KM3</option>
                                    </select>
                                </div>
                                
                            </div> */}
                            <div className="cart__prices cart__box">
                                <div className="cart-prices__box">
                                    <span>Thuế</span>
                                    <p className="cart-prices__before">Giá trước</p>
                                </div>

                                <div className="cart-prices__box">
                                    <span>Tổng tiền</span>
                                    <p className="cart-prices__after">{total}</p>
                                </div>
                            </div>
                            
                            <div className="cart__box">
                                <Link to="/payment"><button className="cart__button">Mua hàng</button></Link>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
    </>
     );
}

export default CartPage;