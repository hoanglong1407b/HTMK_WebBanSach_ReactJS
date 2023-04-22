import './OrderDetail.css'
import OrderDetailItem from '../../components/OrderDetailItem';
import images from '../../assets/img/index'

function OrderDetail() {
    return ( 
    <>
        <table className="history__table">
            <tr className="history__heading history__tr">
                <th className="history-heading__title history__td">Tên người đặt</th>
                <th className="history-heading__title history__td">Email nhận hàng</th>
                <th className="history-heading__title history__td">Địa chỉ</th>
                <th className="history-heading__title history__td">	SĐT</th>
            </tr>
            <tr className="history__item history__tr">
                <td className="history-item__content history__td">Tên người mua</td>
                <td className="history-item__content history__td">Email@ngườiMua</td>
                <td className="history-item__content history__td">địa 123 chỉ người mua</td>
                <td className="history-item__content history__td">0908sốđiệnthoại người mua</td>
            </tr>
        </table>
        <div className="container__history">
            <div className="history__items history__box">
                <div className="history__order">
                    <OrderDetailItem name="Tên sách nè" author="Long viết đó" quantity="2" price="2 tỷ đồng" img={images.product}/>
                    <div className="history-order__totalbox">
                        <div className="history-order__total">
                            <span>Tổng số tiền:</span>
                            <p className="history-total__total">ororder_total  đ</p>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    </>
     );
}

export default OrderDetail;