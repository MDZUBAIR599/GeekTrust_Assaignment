import React, { useContext } from 'react'
import { Appcontext } from '../../Context/AppontextProvider'
import { ProductsCards } from './ProductsCards'
function ProductListing() {
  const  {state} =useContext(Appcontext)
  const {products,FilterProducts, SeacrhedProducts}=state
  console.log(FilterProducts.length,"pr")

  return(
     <>
      {
         FilterProducts.length>0 ?  <ProductsCards products={FilterProducts} />  : (SeacrhedProducts.length>0 ? <ProductsCards products={SeacrhedProducts} /> : <ProductsCards products={products} /> )
      }
    </>
  )
}

export default ProductListing

