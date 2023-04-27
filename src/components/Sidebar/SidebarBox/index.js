import {Link} from 'react-router-dom'

function SidebarBox({name, items}) {
   const abc = items.map(function(item){
      return (
         <li className="sidebar__item">
            <Link to="/selling" className="sidebar__link">{item.cname}</Link>
         </li>
      );
   })
   return ( 
      <div className="sidebar__box">
         <h2 className="sidebar__title classify__title">{name}</h2>
         <ul className="sidebar__list">
            {abc}
         </ul>
      </div>
    );
}

export default SidebarBox;