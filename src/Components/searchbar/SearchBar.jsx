import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { Appcontext } from '../../Context/AppontextProvider'
import styles from "./searchbar.module.css"
function Search_Bar() {
  const {state,dispatch}=useContext(Appcontext);
  const {products}=state;
  const [QueryText,SetQueryText]=useState('');
  const Handlechange=(event)=>{
    SetQueryText(event.target.value.toLowerCase())
  };
  const HandleSearch=()=>{
       if(QueryText){
         const SeacrhedItems=products.filter((item)=> item.name.toLowerCase().includes(QueryText))
         console.log(SeacrhedItems,"Search");
         dispatch({
          type:"SEARCHED_PRODUCTS",
          payload:SeacrhedItems
        })
       }
      
     
  };
  return (
    <div className={styles.serachbar}>     
    <div className={styles.serach_items}>     
       <input type="text"  placeholder='Search Product' onChange={Handlechange}/>
       <div className={styles.icon}>
       <i onClick={HandleSearch} className="fa fa-search"></i>
      
       </div>
       <div className={styles.filter}>
        <Link to="/filter"><i class="fa fa-filter" ></i></Link>
       </div>
    </div>
    
    </div>
  )
}

export default Search_Bar
