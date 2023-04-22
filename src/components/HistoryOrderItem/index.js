function HistoryOrderItem({id, price, date, status}) {
   return ( 

      <tr className="history__item history__tr">
         <td className="history-item__content history__td"> {id}</td>
         <td className="history-item__content history__td"> {price}</td>
         <td className="history-item__content history__td"> {date}</td>  
         <td className="history-item__content history__td">
            {status === "0" && <span style={{color:'darkcyan'}}>Đang xử lý</span>}
            {status === "1" && <span style={{color:'coral'}}>Chờ xử lý</span>}
            {status === "2" && <span style={{color:'forestgreen'}}>Đã xử lý</span>}
         </td>
         <td className="history-item__content history__td">
            <a href="{{URL::to('/detailPayment')}}/{{$ordorder_id}}" className="history-item__link">
                  <i className="fa-solid fa-eye"></i>
            </a>
         </td>
      </tr>
    );
}

export default HistoryOrderItem;