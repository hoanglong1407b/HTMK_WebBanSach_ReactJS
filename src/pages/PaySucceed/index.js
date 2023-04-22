import './PaySucceed.css'
import {Link} from 'react-router-dom'

function PaySucceed() {
    return ( 
    <>
        <div class="container__success">
            <h2 class="success__title">Thanh toán thành công</h2>
            <i class="success__icon fa-solid fa-circle-check"></i>
            <Link to="/" class="success__link"><button class="success__button">Trở về trang chủ</button></Link>
        </div>
    </>
     );
}

export default PaySucceed;