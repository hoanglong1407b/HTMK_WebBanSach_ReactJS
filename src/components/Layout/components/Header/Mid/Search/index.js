function Search() {
   return ( 
      <form className="header-mid__search-box" action="search" method="GET">
         <select className="header-mid__select header-mid__search-box__input" name="search-option" id="searchSelect">
            <option value="0" className="header-mid__option">Tất cả</option>
            <option value="{{$value->category_id}}" className="header-mid__option">category_name</option>
         </select>
         <div className="header-mid__search-group">
            <input type="search" name="tukhoa" className="header-mid__search header-mid__search-box__input" placeholder="Bạn cần tìm gì?"/>
            <button className="header-mid__button header-mid__search-box__input"><i className="fa-solid fa-magnifying-glass"></i></button>
         </div>
      </form>
    );
}

export default Search;