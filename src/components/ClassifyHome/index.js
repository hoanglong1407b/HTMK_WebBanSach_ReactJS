import ProductItem from "../ProductItem";

function ClassifyHome({title, items, grid}) {
   const abc = items.map(function(item, index){
         return (
            <ProductItem 
               key={index}
               name={item.pname} 
               author={item.author} 
               price={item.price} 
               col="col-3"/>
         )
      })
   const inside = (<div className="grid">
         <div className="row">
            <div className="col">
               <div className="classify">
                  <h2 className="classify__title">
                        <p>{title}</p>
                  </h2>
                  <div className="classify__products">
                     <div className="row">
                        {abc}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>);
   if(grid == null){
      return ( 
         inside
       );
   }else if(grid === "full"){
      return ( 
         <div className="grid__full-width app-class__container">
            {inside}
         </div>
       );
   }
   
}

export default ClassifyHome;