//phân tích giao diện để tạo ra những thành phần tương ứng
//những cái thành phần giữ nguyên
//header
//sidebar

import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

function DefaultLayout({children}) {
   return (
      //ví dụ thôi 
      <div>
         <Header/>
         <div className='container'>
            <Sidebar/>
            <div className='content'>{children}</div>
         </div>
      </div>
    );
}

export default DefaultLayout;