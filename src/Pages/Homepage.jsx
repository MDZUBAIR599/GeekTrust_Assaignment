
import { useContext, useEffect } from "react";
import { FetchProducts } from "../Api/api";
import "../App.css";
import FilterBar from "../Components/Filter/FilterBar";
import ProductListing from "../Components/Products/ProductListing";
import SearchBar from "../Components/searchbar/SearchBar";
import { Appcontext } from "../Context/AppontextProvider";


function Homepage() {
  const  {state,dispatch} =useContext(Appcontext);
  useEffect(()=>{
    FetchProducts({state,dispatch})
  })
  return (
    <>
      <SearchBar />
      <div className="App">
        <FilterBar />
        <ProductListing />
      </div>
    </>
  );
}

export default Homepage;
