import ProductItem from "../ProductItem";
function ClassifySelling({title, items}) {
   const books = items.map(function(item){
      // return (<ProductItem name="Sách hay sách đỉnh sách xịn quá trời xịn" author="Long nè" price="1000000000đ" col="col-4"/>)
      return (
         <ProductItem 
            name={item.pname} 
            author={item.author} 
            price={item.price} 
            col="col-4"/>
      )
   })
   return ( 
      <div className="classify">
         <h2 className="classify__title">{title}</h2>
         <div className="classify__products">
            <div className="row">
               {(items.length === 0) ? ( //Nếu không có sách
                  <div className="col-4">
                     <p className="classify-product__title">đang cập nhật</p>
                  </div> 
               ) : //In ra các sách
                  books
               }
            </div>
         </div>
         {/* <div className="paging__container">
            <p className="paging__box">1</p>
            <p className="paging__box">1</p>
         </div> */}
      </div>
    );
}

export default ClassifySelling;