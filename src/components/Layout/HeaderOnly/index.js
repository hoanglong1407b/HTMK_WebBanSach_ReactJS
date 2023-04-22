//phân tích giao diện để tạo ra những thành phần tương ứng
//những cái thành phần giữ nguyên
//header
//sidebar

import Header from '../components/Header'

function HeaderOnly({children}) {
   return (
      //ví dụ thôi 
      <>
         <Header/>
         <div className='app__container'>{children}</div>
      </>
    );
}

export default HeaderOnly;