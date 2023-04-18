function Category({title}) {
   return ( 
      <div className="header__category">
         <i className="header-category__icon fa-solid fa-bars"></i>
         <span className="header-category__title">
            {title}
         </span>
         <i className="header-category__icon fa-sharp fa-solid fa-caret-down"></i>
         {/* <!-- phần drop xuống của danh mục (level 1: dọc) --> */}
         <div className="header-category__dropdown">
            <ul className="header-dropdown__list">
               {/* <!-- 1 loại danh mục nằm trong thẻ li --> */}
               <li className="header-dropdown__item">
                  <a href="{{url('category/' . $value->category_id)}}" className="header-dropdown__link">
                     <div className="header-dropdown__link-box">
                        <i className="header-dropdown__link-box__icon fa-solid fa-bars"></i>
                        <span className="header-dropdown__link-box__title">
                           category_name
                        </span>
                     </div>
                     <i className="header-dropdown__link-icon fa-solid fa-caret-right"></i>
                  </a>
               </li>  
            </ul>
         </div>
      </div>
    );
}

export default Category;