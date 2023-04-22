//phân tích giao diện để tạo ra những thành phần tương ứng
//những cái thành phần giữ nguyên
//header
//sidebar

import Header from '../components/Header'
import InfoSidebar from '../components/InfoSidebar';

import './InfoLayout.css'

function InfoLayout({children}) {
   return (
      //ví dụ thôi 
      <>
         <Header/>
         <div className="grid">
            <div className="row">
               <div className="col-3">
                  <InfoSidebar/>
               </div>
               <div className="col-9">
                  {children}
               </div>
            </div>
         </div>
      </>
    );
}

export default InfoLayout;