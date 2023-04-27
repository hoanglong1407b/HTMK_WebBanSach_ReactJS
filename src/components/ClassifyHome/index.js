import ProductItem from "../ProductItem";

function ClassifyHome({title, items, grid}) {
   const abc = items.map(function(item){
         return (
            <ProductItem 
               name={item.pname} 
               author={item.author} 
               price={item.price} 
               col="col-3"/>
         )
      })
      console.log(grid);
   const inside = (<div class="grid">
         <div class="row">
            <div class="col">
               <div class="classify">
                  <h2 class="classify__title">
                        <p>{title}</p>
                  </h2>
                  <div class="classify__products">
                     <div class="row">
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
         <div class="grid__full-width app-class__container">
            {inside}
         </div>
       );
   }
   
}

export default ClassifyHome;