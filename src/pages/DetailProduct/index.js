import './DetailProduct.css'

function DetailProduct() {
    return ( 
    <>
        <div className="grid">
            <div className="detail__container">
                <form action="{{URL::to('/save-cart')}}" method="POST">
                    <input type="hidden" value="{{asset($productproduct_name)}}"/>
                    <div className="row">
                        <div className="col-5">
                            <div className="detail__imgbox">
                                <img className="detail__img" src="{{asset('/frontend/img/products')}}/{{$productproduct_img}}" alt=""/>
                                <input type="hidden" value="{{$productproduct_img}}"/>
                            </div>
                        </div>

                        <div className="col">
                            <input type="hidden" value="{{$productproduct_id}}" className="cart_product_name_{{$productproduct_id}}"/>
                            <div className="detail__info">
                                <h2 className="detail-info__title">producproduct_nam</h2>
                            
                
                                <div className="detail-info__box">
                                    <span>Tác giả:</span>
                                    <input type="hidden" value="{{$productproduct_author}}"/>
                                    <p className="detail-info__author">productproduct_author</p>
                                </div>
                                <h2 className="detail-info__lastprice">productproduct_priceđ</h2>
                                <input type="hidden" value="{{$productproduct_price}}"/>
                                <div className="detail-info__box">
                                    <span>Tiết kiệm:</span>
                                    <p className="detail-info__discount">18.000 đ (15%)</p>
                                </div>
                                <div className="detail-info__box">
                                    <span>Giá thị trường:</span>
                                    
                                    <p className="detail-info__originprice">120,000 đ</p>
                                </div>
                                <div className="detail-info__box">
                                    <span>Tình trạng:</span>
                                    @if( $productstatus == 1 )
                                    <p className="detail-info__status">Còn hàng</p>
                                    
                                    @else
                                    <p className="detail-info__status">Hết hàng</p>
                                    @endif
                                </div>

                                <div className="detail-info__quantitybox">
                                    <span>Số lượng:</span>
                                    <input type="hidden" value="{{$productproduct_quantity}}"/>
                                    <div className="detail-info__quantify quantity">
                                        <button className="quantify-down quantify__down quantify__btn">-</button>
                                        <input name="qty" type="number" min="1" max="5" className="quantify__num cart_product_qty_{{$productproduct_id}}"  value="1" />
                                        <button className="quantify-up quantify__up quantify__btn">+</button>
                                    </div>
                                    <div className="detail-info__quantify quantity">
                                        <button className="quantify-down quantify__down quantify__btn">-</button>
                                        <input name="qty" type="number" min="1" max="{{$productproduct_quantity}}" className="cart_product_qty_{{$productproduct_id}}"  value="1" />
                                        <button className="quantify-up quantify__up quantify__btn">+</button>
                                    </div>
                                </div>
                                <input name="productid_hidden" type="hidden"  value="{{$productproduct_id}}" />
                                <p className="detail-info__phone">Gọi đặt hàng: <span>079 2345 8732</span> hoặc <span>089 1293 833</span></p> -
                                <div className="detail-info__btns">
                                    <a href="{{URL::to('/cart')}}" className="detail-info__btnlink">
                                        <button className="detail-info__btn" type="submit">Thêm vào giỏ hàng</button></a>
                                    <a href="{{URL::to('/payment')}}" className="detail-info__btnlink">
                                        <button className="detail-info__btn detail-info__btn--green">Thanh toán ngay</button></a>
                                </div>
                                <div className="detail-info__btns">
                                        <span><h2 className="detail-more__title" style={{color: 'red'}}>SẢN PHẨM ĐÃ HẾT HÀNG</h2></span>
                                </div>

                                <div className="detail-info__desc">
                                    <span>Mô tả:</span>
                                    <p className="detail-info-desc__content">
                                        productproduct_content
                                    </p>
                                </div>

                            </div>
                    
                        </div>
                    </div>
                </form>
            </div>

            <div className="detail__more">
                <div className="row">
                    <div className="col">
                        <h2 className="detail-more__title">THÔNG TIN CHI TIẾT</h2>
                        <ul className="detail-more__list">
                            <li className="detail-more__item">
                                <span>Danh mục</span> <p className="detail-more__info">$productcategorycategory_name</p>
                            </li>
                            <li className="detail-more__item">
                                <span>Nhà xuất bản</span> <p className="detail-more__info">$productbrandbrand_name</p>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
     );
}

export default DetailProduct;