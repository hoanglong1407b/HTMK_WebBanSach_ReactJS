//phân tích giao diện để tạo ra những thành phần tương ứng
//những cái thành phần giữ nguyên
//header
//sidebar

import Header from '../components/Header'
import Footer from '../components/Footer'

import './DefaultLayout.css'

function DefaultLayout({children}) {
   return (
      //ví dụ thôi 
      <div>
         <Header/>
            <div class="app__container">
               {children}
            </div>
         <Footer/>
      </div>
    );
}

export default DefaultLayout;