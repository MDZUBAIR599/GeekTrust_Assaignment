import React from "react";
import { Route, Routes } from "react-router-dom";

import Homepage from "../Pages/Homepage";
import ShoppingCart from "../Pages/CartPage/ShoppingCart";
import FilterBar from "../Components/Filter/FilterBar";
export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/cart" element={<ShoppingCart/>} />
        <Route path="/" element={<Homepage/>} />
        <Route path="/filter" element={<FilterBar/>} />
      </Routes>
    </div>
  );
}
