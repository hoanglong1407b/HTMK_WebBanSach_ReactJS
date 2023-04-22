import './DetailProduct.css'
import DetailProductInfo from "../../components/DetailProductInfo";
import images from '../../assets/img/index'


function DetailProduct() {
    return ( 
    <>
        <div className="grid">
            <div className="detail__container">
                <form action="{{URL::to('/save-cart')}}" method="POST">
                    <input type="hidden" value="{{asset($productproduct_name)}}"/>
                    <div className="row">
                        <DetailProductInfo 
                            name="tên sản phẩm nè" author="Tên tác giả nè" img={images.product} 
                            lastPrice="1.000.000đ" discount="15%" originPrice="20.000.000" 
                            status="còn hàng" content="Đây là content của sản phẩm nhé hahahahahhhâ"
                        />
                    </div>
                </form>
            </div>

            <div className="detail__more">
                <div className="row">
                    <div className="col">
                        <h2 className="detail-more__title">THÔNG TIN CHI TIẾT</h2>
                        <ul className="detail-more__list">
                            <li className="detail-more__item">
                                <span>Danh mục</span> <p className="detail-more__info">Tên thể loại sách đang xem chi tiết nè</p>
                            </li>
                            <li className="detail-more__item">
                                <span>Nhà xuất bản</span> <p className="detail-more__info">Nhà xuất bản của sách nè</p>
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