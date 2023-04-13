import style from './Footer.css';

function Footer() {
   return ( 
        <footer className="app__footer">
            <div className="grid">
                <div className="row">
                    <div className="footer__intro">
                        <h2 className="footer-intro__title">NHÀ SÁCH TRỰC TUYẾN BOOKGARDEN.COM</h2>
                        <p className="footer-intro__content">Mua sách online tại nhà sách trực tuyến Bookgarden.vn để được cập nhật nhanh nhất các tựa sách đủ thể loại với mức giảm 15 – 35% cùng nhiều ưu đãi, quà tặng kèm. Qua nhiều năm, không chỉ là địa chỉ tin cậy để bạn mua sách trực tuyến, Bookbuy còn có quà tặng, văn phòng phẩm, vật dụng gia đình,…với chất lượng đảm bảo, chủng loại đa dạng, chế độ bảo hành đầy đủ và giá cả hợp lý từ hàng trăm thương hiệu uy tín trong và ngoài nước. Đặc biệt, bạn có thể chọn những mẫu sổ tay handmade hay nhiều món quà tặng sinh nhật độc đáo chỉ có tại Bookgarden.vn.</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col">

                        <div className="footer__container">  
                            <div className="row">   
                                <div className="col-3">
                                    <div className="footer__box">
                                        <h2 className="footer-box__title">VỀ CHÚNG TÔI</h2>
                                        <ul className="footer-box__list">
                                            <li className="footer-box__item">
                                                <a href="" className="footer-box__link">Giới thiệu</a>
                                            </li>
                                            <li className="footer-box__item">
                                                <a href="" className="footer-box__link">Tin tức</a>
                                            </li>
                                            <li className="footer-box__item">
                                                <a href="" className="footer-box__link">Liên hệ</a>
                                            </li>
                                            <li className="footer-box__item">
                                                <a href="" className="footer-box__link">Đăng ký</a>
                                            </li>
                                            <li className="footer-box__item">
                                                <a href="" className="footer-box__link">Quên mật khẩu</a>
                                            </li>
                                            <li className="footer-box__item">
                                                <a href="" className="footer-box__link">Tài khoản</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-3">
                                    <div className="footer__box">
                                        <h2 className="footer-box__title">HỖ TRỢ KHÁCH HÀNG</h2>
                                        <ul className="footer-box__list">
                                            <li className="footer-box__item">
                                                <a href="" className="footer-box__link">Hotline: 0933 109 009</a>
                                            </li>
                                            <li className="footer-box__item">
                                                <a href="" className="footer-box__link">Hướng dẫn khắc phục lỗi khi sử dụng website</a>
                                            </li>
                                            <li className="footer-box__item">
                                                <a href="" className="footer-box__link">Hướng dẫn mua sách</a>
                                            </li>
                                            <li className="footer-box__item">
                                                <a href="" className="footer-box__link">Hướng dẫn thanh toán</a>
                                            </li>
                                            <li className="footer-box__item">
                                                <a href="" className="footer-box__link">Kỹ thuật & Bảo hành: 0909 8394 923</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-3">
                                    <a href="{{URL::to('/')}}" className="footer__logo-link">
                                        <img src="{{asset('frontend/img/logo2.png')}}" alt="" className="footer__logo"/>
                                    </a>
                                </div>

                                <div className="col-3">
                                    
                                </div>
                                
                            </div> 
                            
                            
                        </div>
                    </div>
                </div>
                
            </div>
        </footer>
    );
}

export default Footer;