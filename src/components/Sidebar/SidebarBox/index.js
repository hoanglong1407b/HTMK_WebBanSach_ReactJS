import {Link} from 'react-router-dom'

function SidebarBox({name}) {
   return ( 
      <div className="sidebar__box">
         <h2 className="sidebar__title classify__title">{name}</h2>
         <ul className="sidebar__list">
            <Link to="/selling" className="sidebar__link">Tất cả</Link>
            <li className="sidebar__item">
               <Link to="/selling" className="sidebar__link">valuategory_nam</Link>
            </li>
         </ul>
      </div>
    );
}

export default SidebarBox;