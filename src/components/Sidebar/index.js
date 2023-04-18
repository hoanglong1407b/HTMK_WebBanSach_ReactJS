import SidebarBox from './SidebarBox';

function Sidebar() {
   return ( 
      <div className="container__sidebar">
         <SidebarBox name="Loại sách"/>
         <SidebarBox name="Sách mới"/>
         <SidebarBox name="Hahahaha"/>
      </div>
    );
}

export default Sidebar;