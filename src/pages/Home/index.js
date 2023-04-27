// import ProductItem from "../../components/ProductItem";
import Slider from "../../components/Slider";
import ClassifyHome from "../../components/ClassifyHome";



function Home() {
   let items = [
      {
         pname: "Sách hay sách đỉnh sách xịn quá trời xịn",
         author: "HAHAHAHAHAHAH ",
         price: "1000000000đ",
         col: "col-3"
      },
      {
         pname: "Đọc làm chó hahahahahahhâ",
         author: "Long nef ",
         price: "1000000000đ",
         col: "col-3"
      },
      {
         pname: "Sách hay sách đỉnh sách xịn quá trời xịn",
         author: "đỉnh chưa ",
         price: "1000000000đ",
         col: "col-3"
      },
      {
         pname: "Sách hơi bị đink~",
         author: "Long nef ",
         price: "1000000000đ",
         col: "col-3"
      }
   ]
   return (
      <>
      <div className="grid">
         <div className="row">
            <div className="col">
               <Slider/>
            </div>
         </div>
      </div>
     
      <ClassifyHome title="Sách nổi bật" items={items}/>
      <ClassifyHome title="Sách nổi bật" items={items} grid="full"/>
      <ClassifyHome title="Sách nổi bật" items={items}/>

      </>

   )
}

export default Home;