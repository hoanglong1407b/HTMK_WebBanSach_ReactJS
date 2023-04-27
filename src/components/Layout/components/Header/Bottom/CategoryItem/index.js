import {Link} from 'react-router-dom'


function CategoryItem({name}) {
   return ( 
      <li className="header-dropdown__item">
         <Link to="/selling" className="header-dropdown__link">
            <div className="header-dropdown__link-box">
               <i className="header-dropdown__link-box__icon fa-solid fa-bars"></i>
               <span className="header-dropdown__link-box__title">
                  {name}
               </span>
            </div>
            <i className="header-dropdown__link-icon fa-solid fa-caret-right"></i>
         </Link>
      </li>  
    );
}

export default CategoryItem;