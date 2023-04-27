import CategoryItem from '../CategoryItem';

function Category({title, items}) {
   const abc = items.map(function(item){
      return (
         <CategoryItem 
            name={item.cname} 
         />
      )
   })
   return ( 
      <div className="header__category">
         <i className="header-category__icon fa-solid fa-bars"></i>
         <span className="header-category__title">
            {title}
         </span>
         <i className="header-category__icon fa-sharp fa-solid fa-caret-down"></i>
         <div className="header-category__dropdown">
            <ul className="header-dropdown__list">
               {abc}
            </ul>
         </div>
      </div>
    );
}

export default Category;