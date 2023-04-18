import ProductItem from "../../components/ProductItem";
import Sidebar from "../../components/Sidebar";

function Selling() {
   return (
      <div className="grid">
         <div className="row">
            <div className="col-3">
               {/* truyền danh sách các thể loại */}
               <Sidebar/>
            </div>

            <div className="col-9">
               <div className="classify">
                  <h2 className="classify__title">cateName</h2>
                  <div className="classify__products">
                     <div className="row">
                        {/* <div className="col-4">
                           <p className="classify-product__title">đang cập nhật</p>
                        </div> */}
                        <ProductItem name="Sách hay sách đỉnh sách xịn quá trời xịn" author="Long nè" price="1000000000đ" col="col-4"/>
                        <ProductItem name="Sách hay sách đỉnh sách xịn quá trời xịn" author="Long nè" price="1000000000đ" col="col-4"/>
                     </div>
                  </div>
                  {/* <div className="paging__container">
                     <p className="paging__box">1</p>
                     <p className="paging__box">1</p>
                  </div> */}
               </div>
            </div>
         </div>
   </div>
   );
}

export default Selling;