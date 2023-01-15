import React, { useContext,  useState } from "react";
import { Appcontext } from "../../Context/AppontextProvider";
import "./filter.css";
function FilterBar() {
  const {state,dispatch}=useContext(Appcontext)
  const {products}=state

  const [filter,setfilter]=useState({
    gender:"",
    colour:"",
    priceRange:"",
    type:"",
  })
   const {gender, colour, priceRange,  type} =filter
   
  function HandleChange(e){
    const {name,value}=e.target;
    setfilter({
      [name]:value
    })
    
    filterdfunction()
    
  }
  const filterdfunction = async()=>{
    
    const filteredProducts = await products.filter(product => {
      if (gender && product.gender !== gender) {
        return false;
      }
      if (colour && product.color !== colour) {
        return false;
      }
      if (priceRange && product.priceRange !== priceRange) {
        return false;
      }
      if (type && product.type !== type) {
        return false;
      }
      return true;
    });
    dispatch({
      type:"FILTERD_PRODUCTS",
      payload:filteredProducts
    })
  }
  return (
    <div className="mainbox">
      <div className="insidebox">
        <form>
          <div>
            <b>Colour</b>
            <div>
              <input
                type="checkbox"
                name="colour"
                value="Red"
                onChange={HandleChange}
                checked={colour === 'Red'}
              />
              <label>Red</label>
              <div></div>
              <input
                type="checkbox"
                name="colour"
                value={"Blue"}
                onChange={HandleChange}
                checked={colour === 'Blue'}
              />
              <label>Blue</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="colour"
                value={"Green"}
                onChange={HandleChange}
                checked={colour==="Green"}
              />
              <label>Green</label>
            </div>
          </div>
          <div>
            <b>Gender</b>
            <div>
              <input
                type="checkbox"
                name="gender"
                value="Men"
                onChange={HandleChange}
              />
              <label>Men</label>
              <div></div>
              <input
                type="checkbox"
                name="gender"
                value="Women"
                onChange={HandleChange}
              />
              <label>Women</label>
            </div>
          </div>
          <div>
            <b>Price</b>
            <div>
              <input
                type="checkbox"
                name="colour"
                value={"red"}
                onChange={HandleChange}
                checked={priceRange === 0- 250}
              />
              <label>0_Rs250</label>
              <div></div>
              <input
                type="checkbox"
                name="colour"
                value={"red"}
                onChange={HandleChange}
                checked={priceRange === 251-450}
              />
              <label>Rs251-450</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="colour"
                value={"red"}
                onChange={HandleChange}
                checked={priceRange === 450}
              />
              <label>Rs 450</label>
            </div>
          </div>
          <div>
            <b>Type</b>
            <div>
              <input
                type="checkbox"
                name="type"
                value="Polo"
                onChange={HandleChange}
                checked={type === 'Polo'}
              />
              <label>Polo</label>
              <div></div>
              <input
                type="checkbox"
                name="type"
                value="Hoddie"
                onChange={HandleChange}
                checked={type === 'Hoddie'}
              />
              <label>Hoddie</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="type"
                value="Basic"
                onChange={HandleChange}
                checked={type === 'Basic'}
              />
              <label>Basic</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FilterBar;
