import SidebarBox from './SidebarBox';

function Sidebar() {
   const api = [
      {
         title: "Loại sách",
         data: [
            {
               cname: "loại sách 1"
            },
            {
               cname: "loại sách 2"
            },
            {
               cname: "loại sách 3"
            },
         ]
      },
      {
         title: "Sách mới",
         data: [
            {
               cname: "Sách mới 1"
            },
            {
               cname: "Sách mới 2"
            },
            {
               cname: "Sách mới 3"
            },
         ]
      },
      {
         title: "Nhà xuất bản",
         data: [
            {
               cname: "Nhà xuất bản 1"
            },
            {
               cname: "Nhà xuất bản 2"
            },
            {
               cname: "Nhà xuất bản 3"
            },
         ]
      },
   ]

   const types = api.map(function(item){
      return (
         <SidebarBox name={item.title} items={item.data}/>
      )
   })
   
   return ( 
      <div className="container__sidebar">
         {types}
      </div>
    );
}

export default Sidebar;