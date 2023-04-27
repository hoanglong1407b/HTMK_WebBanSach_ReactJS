import Category from "./Category";

function Bottom() {
   const items = [
      {cname: "danh mục"},
      {cname: "danh mục 1"},
      {cname: "danh mục 2"},
   ]
   const items2 = [
      {cname: "NXB 1"},
      {cname: "NXB 2"},{cname: "NXB 3"},{cname: "NXB 4"},
   ]
   return ( 
      <div className="header__bottom">
         <div className="grid">
            <div className="row">
               <div className="header-bottom__container col">
                  <Category title="Danh mục sản phẩm" items={items}/>
                  <Category title="Nhà xuất bản" items={items2}/>
               </div>
            </div>
         </div>
      </div>
    );
}

export default Bottom;