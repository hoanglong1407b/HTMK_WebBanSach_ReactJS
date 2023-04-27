import Sidebar from "../../components/Sidebar";
import ClassifySelling from "../../components/ClassifySelling";

function Selling() {
   let items = [
      {
         pname: "Sách hay sách đỉnh sách xịn quá trời xịn",
         author: "HAHAHAHAHAHAH ",
         price: "1000000000đ",
      },
      {
         pname: "Đọc làm chó hahahahahahhâ",
         author: "Long nef ",
         price: "1000000000đ",
      },
      {
         pname: "Sách hay sách đỉnh sách xịn quá trời xịn",
         author: "đỉnh chưa ",
         price: "1000000000đ",
      },
      {
         pname: "Sách hơi bị đink~",
         author: "Long nef ",
         price: "1000000000đ",
      }
   ]
   return (
      <div className="grid">
         <div className="row">
            <div className="col-3">
               {/* truyền danh sách các thể loại */}
               <Sidebar/>
            </div>

            <div className="col-9">
               <ClassifySelling title="Catename" items={items}/>
            </div>
         </div>
   </div>
   );
}

export default Selling;