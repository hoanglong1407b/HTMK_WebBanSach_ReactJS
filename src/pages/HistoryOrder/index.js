import './HistoryOrder.css'
import HistoryOrderItem from '../../components/HistoryOrderItem';

function HistoryOrder() {
    let api = [
        {
            id: "1235", 
            price: "100.000đ",
            date: "14/07/2001",
            status: "0"
        },
        {
            id: "1235", 
            price: "200.000đ",
            date: "14/07/2001",
            status: "2"
        },
        {
            id: "1235", 
            price: "300.000đ",
            date: "14/07/2001",
            status: "2"
        },
        {
            id: "1235", 
            price: "200.000đ",
            date: "14/07/2001",
            status: "1"
        },
    ]
    // let [api2, setApi2] = useState(api);
    const items = api.map(function(item){
        return (
            <HistoryOrderItem id={item.id} price={item.price} date={item.date} status={item.status}/>
        );
    })
    return ( 
    <>
    <div className="container__history">
        <div className="history__items history__box">
            <table className="history__table">
                <tr className="history__heading history__tr">
                    <th className="history-heading__title history__td">Mã ĐH</th>
                    <th className="history-heading__title history__td">Thành tiền</th>
                    <th className="history-heading__title history__td">Ngày đặt</th>
                    <th className="history-heading__title history__td">Trạng thái</th>
                    <th className="history-heading__title history__td"></th>
                </tr>

                {items}
                
            </table>
        </div>
        
    </div>
    <nav aria-label="Page navigation example"  style={{float:'right', color:'coral'}}>
        <div tyle=" color:coral">
            {/* {{$orderlinks()}} */}
        </div>
    </nav>
    </>
     );
}

export default HistoryOrder;