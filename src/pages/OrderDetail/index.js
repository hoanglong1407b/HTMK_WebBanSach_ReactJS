import './OrderDetail.css'

function OrderDetail() {
    return ( 
    <>
        <div className="grid">
            <div className="row">
                <div className="col-3">
                    <div className="profile__sidebar">
                        
                        <ul className="profile-sidebar__list">
                            <li className="profile-sidebar__item">
                                <i className="profile-sidebar__icon fa-solid fa-user"></i>
                                <a href="URL::to('/accountInfo')/ auth('customer')user()customer_id " className="profile-sidebar__link">
                                    Thông tin tài khoản
                                </a>
                            </li>
                            <li className="profile-sidebar__item">
                                <i className="profile-sidebar__icon fa-sharp fa-solid fa-rectangle-vertical-history"></i>
                                <a href="URL::to('/historyOrder')" className="profile-sidebar__link">
                                    Lịch sử mua hàng
                                </a>
                            </li>
                        </ul>
        
                    </div>
                </div>
                
                <div className="col-9">
                    <table className="history__table">
                        <tr className="history__heading history__tr">
                            
                            <th className="history-heading__title history__td">Tên người đặt</th>
                            <th className="history-heading__title history__td">Email nhận hàng</th>
                            <th className="history-heading__title history__td">Địa chỉ</th>
                            <th className="history-heading__title history__td">	SĐT</th>
                            
                        </tr>
                        <tr className="history__item history__tr">
                    
                            <td className="history-item__content history__td">shippingshipping_name</td>
                            <td className="history-item__content history__td">shippingshipping_email</td>
                            <td className="history-item__content history__td">shippingshipping_address</td>
                            <td className="history-item__content history__td">shippingshipping_phone</td>
                            
                        </tr>
                            {/* <tr className="history__item history__tr">
                            <td className="history-item__content history__td">1</td>
                            <td className="history-item__content history__td">madohang1</td>
                            <td className="history-item__content history__td">129.000đ</td>
                            <td className="history-item__content history__td">12/12/2012</td>
                            <td className="history-item__content history__td">
                                <a href="URL::to('/detailPayment')" className="history-item__link">
                                    <i className="fa-solid fa-eye"></i>
                                </a>
                            </td>
                        </tr> */}
                        </table>


                    <div className="container__history">
                        
                        <div className="history__items history__box">
                                <div className="history__order">
                                    <div className="history__item history__showing ">
                                        
                                        <div className="history-item__product history--flex4">
                                            <div className="history-item__imgbox">
                                                <img className="history-item__img" src="asset('/frontend/img/products/')/$detailsproductproduct_img" alt=""/>
                                            </div>
    
                                            <div className="history-item__info">
                                                <h2 className="history-item__title">$detailsproduct_name</h2>
                                                <div className="history-item__box">
                                                    <span>Tác giả:</span>
                                                    <p className="history-item__author">$detailsproductproduct_author</p>
                                                </div>
                                                <div className="history-item__box">
                                                    <span>Số lượng:</span>
                                                    <p className="history-item__type">$detailsproduct_sales_quantity</p>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        
                                        <p className="history-item__total">tieenf đ</p>
                                        
                                    </div>
                                    <div className="history-order__totalbox">
                                        <div className="history-order__total">
                                            <span>Tổng số tiền:</span>
                                            <p className="history-total__total">ororder_total  đ</p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </>
     );
}

export default OrderDetail;