function DetailProduct({name, author, lastPrice, discount, originPrice, status, content, img}) {
   return ( 
      <>
      <div className="col-5">
         <div className="detail__imgbox">
            <img className="detail__img" src={img} alt={name}/>
            <input type="hidden" value="{{$productproduct_img}}"/>
         </div>
      </div>

      <div className="col">
            <input type="hidden" value="{{$productproduct_id}}" className="cart_product_name_{{$productproduct_id}}"/>
            <div className="detail__info">
               <h2 className="detail-info__title">{name}</h2>

               <div className="detail-info__box">
                  <span>Tác giả:</span>
                  <input type="hidden" value="{{$productproduct_author}}"/>
                  <p className="detail-info__author">{author}</p>
               </div>
               <h2 className="detail-info__lastprice">{lastPrice}</h2>
               <input type="hidden" value="{{$productproduct_price}}"/>
               <div className="detail-info__box">
                  <span>Tiết kiệm:</span>
                  <p className="detail-info__discount">{discount}</p>
               </div>
               <div className="detail-info__box">
                  <span>Giá thị trường:</span>
                  
                  <p className="detail-info__originprice">{originPrice}</p>
               </div>
               <div className="detail-info__box">
                  <span>Tình trạng:</span>
                  {status ? <p className="detail-info__status">{status}</p> : <p className="detail-info__status">Hết hàng</p>}
               </div>

               <div className="detail-info__quantitybox">
                  <span>Số lượng:</span>
                  <input type="hidden" value="{{$productproduct_quantity}}"/>
                  <div className="detail-info__quantify quantity">
                        <button className="quantify-down quantify__down quantify__btn">-</button>
                        <input name="qty" type="number" min="1" max="5" className="quantify__num cart_product_qty_{{$productproduct_id}}"  value="1" />
                        <button className="quantify-up quantify__up quantify__btn">+</button>
                  </div>
                  {/* <div className="detail-info__quantify quantity">
                        <button className="quantify-down quantify__down quantify__btn">-</button>
                        <input name="qty" type="number" min="1" max="{{$productproduct_quantity}}" className="cart_product_qty_{{$productproduct_id}}"  value="1" />
                        <button className="quantify-up quantify__up quantify__btn">+</button>
                  </div> */}
               </div>
               <input name="productid_hidden" type="hidden"  value="{{$productproduct_id}}" />
               {/* <p className="detail-info__phone">Gọi đặt hàng: <span>079 2345 8732</span> hoặc <span>089 1293 833</span></p> - */}
               <div className="detail-info__btns">
                  <a href="{{URL::to('/cart')}}" className="detail-info__btnlink">
                        <button className="detail-info__btn" type="submit">Thêm vào giỏ hàng</button></a>
                  <a href="{{URL::to('/payment')}}" className="detail-info__btnlink">
                        <button className="detail-info__btn detail-info__btn--green">Thanh toán ngay</button></a>
               </div>
               {!status && <div className="detail-info__btns">
                        <span><h2 className="detail-more__title" style={{color: 'red'}}>SẢN PHẨM ĐÃ HẾT HÀNG</h2></span>
               </div>}

               <div className="detail-info__desc">
                  <span>Mô tả:</span>
                  <p className="detail-info-desc__content">
                        {content}
                  </p>
               </div>

            </div>
   
      </div>
      </>
    );
}

export default DetailProduct;