function SidebarBox({name}) {
   return ( 
      <div className="sidebar__box">
         <h2 className="sidebar__title classify__title">{name}</h2>
         <ul className="sidebar__list">
            <a href="{{url('categorySelling/')}}" className="sidebar__link">Tất cả</a>
            <li className="sidebar__item">
               <a href="{{url('category/' . $value->category_id)}}" className="sidebar__link">valuategory_nam</a>
            </li>
         </ul>
      </div>
    );
}

export default SidebarBox;