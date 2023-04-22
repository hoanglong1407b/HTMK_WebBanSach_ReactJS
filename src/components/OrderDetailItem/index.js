

function OrderDetailItem({name, author, quantity, price, img}) {
   return ( 
      <div className="history__item history__showing ">
         <div className="history-item__product history--flex4">
            <div className="history-item__imgbox">
               <img className="history-item__img" src={img} alt=""/>
            </div>
            <div className="history-item__info">
               <h2 className="history-item__title">{name}</h2>
               <div className="history-item__box">
                  <span>Tác giả:</span>
                  <p className="history-item__author">{author}</p>
               </div>
               <div className="history-item__box">
                  <span>Số lượng:</span>
                  <p className="history-item__type">{quantity}</p>
               </div>
            </div>
         </div>
         
         <p className="history-item__total">{price}</p>
      </div>
    );
}

export default OrderDetailItem;