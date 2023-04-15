import './HistoryOrder.css'

function HistoryOrder() {
    return ( 
    <>
        <div className="grid">
            <div className="row">
                <div className="col-3">
                    <div className="profile__sidebar">
                        
                        <ul className="profile-sidebar__list">
                            <li className="profile-sidebar__item">
                                <i className="profile-sidebar__icon fa-solid fa-user"></i>
                                <a href="{{URL::to('/accountInfo')}}/{{ auth('customer')user()customer_id }}" className="profile-sidebar__link">
                                    Thông tin tài khoản
                                </a>
                            </li>
                            <li className="profile-sidebar__item">
                                <i className="profile-sidebar__icon fa-sharp fa-solid fa-rectangle-vertical-history"></i>
                                <a href="{{URL::to('/historyOrder')}}/{{ auth('customer')user()customer_id }}" className="profile-sidebar__link">
                                    Lịch sử mua hàng
                                </a>
                            </li>
                        </ul>
        
                    </div>
                </div>
                <div className="col-9">
                    <div className="container__history">
                        
                        <div className="history__items history__box">
                            {/* <!-- <div className="history__showing"> - */}
                                <table className="history__table">
                                    <tr className="history__heading history__tr">
                                        
                                        <th className="history-heading__title history__td">Mã ĐH</th>
                                        <th className="history-heading__title history__td">Thành tiền</th>
                                        
                                        <th className="history-heading__title history__td">Ngày đặt</th>
                                        <th className="history-heading__title history__td">Trạng thái</th>
                                        <th className="history-heading__title history__td"></th>
                                    </tr>
                                    <tr className="history__item history__tr">
                                        <td className="history-item__content history__td"> $ordorder_id</td>
                                        <td className="history-item__content history__td"> $ordorder_total</td>
                                        
                                        <td className="history-item__content history__td"> $ordcreated_at</td>  
                                        <td className="history-item__content history__td">
                                            <span style={{color:'darkcyan'}}>Đơn hàng mới</span>
                                                
                                                <span style={{color:'coral'}}>Chờ xử lý</span>
                                                
                                                <span style={{color:'forestgreen'}}>Đã xử lý</span>
                                        </td>
                                        <td className="history-item__content history__td">
                                            <a href="{{URL::to('/detailPayment')}}/{{$ordorder_id}}" className="history-item__link">
                                                <i className="fa-solid fa-eye"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr className="history__item history__tr">
                                        <td className="history-item__content history__td">1</td>
                                        <td className="history-item__content history__td">madohang1</td>
                                        <td className="history-item__content history__td">129.000đ</td>
                                        <td className="history-item__content history__td">12/12/2012</td>
                                        <td className="history-item__content history__td">
                                            <a href="{{URL::to('/detailPayment')}}" className="history-item__link">
                                                <i className="fa-solid fa-eye"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    </table>
                                
                                
                                
                        </div>
                        
                    </div>
                    <nav aria-label="Page navigation example"  style={{float:'right', color:'coral'}}>
                        <div tyle=" color:coral">
                            {/* {{$orderlinks()}} */}
                        </div>
                    </nav>
                </div>
                
            </div>
        </div>
    </>
     );
}

export default HistoryOrder;