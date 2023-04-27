function Search() {
   const items = [
      {cname: "danh mục"},
      {cname: "danh mục 1"},
      {cname: "danh mục 2"},
   ]
   const items2 = [
      {cname: "NXB 1"},
      {cname: "NXB 2"},{cname: "NXB 3"},{cname: "NXB 4"},
   ]
   const dm = items.map(function(item, index){
      return (<option key={index} value="" className="header-mid__option">{item.cname}</option>)
   })
   const nxb = items2.map(function(item, index){
      return (<option key={index} value="" className="header-mid__option">{item.cname}</option>)
   })
   
   return ( 
      <form className="header-mid__search-box" action="search" method="GET">
         <select className="header-mid__select header-mid__search-box__input" name="search-option" id="searchSelect">
            <option value="0" className="header-mid__option">Tất cả</option>
            {dm}
            {nxb}
         </select>
         <div className="header-mid__search-group">
            <input type="search" name="tukhoa" className="header-mid__search header-mid__search-box__input" placeholder="Bạn cần tìm gì?"/>
            <button className="header-mid__button header-mid__search-box__input"><i className="fa-solid fa-magnifying-glass"></i></button>
         </div>
      </form>
    );
}

export default Search;