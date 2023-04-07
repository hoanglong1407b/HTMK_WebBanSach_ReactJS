//phân tích giao diện để tạo ra những thành phần tương ứng
//những cái thành phần giữ nguyên
//header
//sidebar

import Header from '../components/Header'

function HeaderOnly({children}) {
   return (
      //ví dụ thôi 
      <div>
         <Header/>
         <div className='container'>
            <div className='content'>{children}</div>
         </div>
      </div>
    );
}

export default HeaderOnly;