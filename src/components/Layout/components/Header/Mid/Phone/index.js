function Phone({phone}) {
   return ( 
      <div className="header-mid__info">
         <i className="fa-regular fa-headset"></i>
         <div className="header-mid-info__title">
            <h2>{phone}</h2>
            <span>Hot line</span>
         </div>
      </div>
    );
}

export default Phone;