import Category from "./Category";

function Bottom() {
   return ( 
      <div className="header__bottom">
            <div className="grid">
               {/* <!-- Xài bootstrap chắc biết =)) --> */}
               <div className="row">
                  <div className="header-bottom__container col">
                     {/* <!-- danh mục header --> */}
                     <Category title="Danh mục sản phẩm"/>
                     <Category title="Nhà xuất bản"/>
                  </div>
                  {/* <div className="col">
                        <div className="empty">
                        </div>
                  </div> */}
               </div>
            </div>
      </div>
    );
}

export default Bottom;