import React, { useContext } from 'react'
import { Appcontext } from '../../Context/AppontextProvider'
import styles from "./products.module.css"
export function ProductsCards({products}) {
    console.log(products,"cards")

 const{dispatch}=useContext(Appcontext)
 const HandleAddtoCart=(item)=>{
    dispatch({
      type:"ADD_TO_CART",
      payload:{
        id:item.id,
        imageURL:item.imageURL,
        name:item.name,
        price:item.price,
        quantity:item.quantity,
        qty:item.qty,
        },
    })
    
 }
  return (
    <div  className={styles.products}>
          { products && products.map((item)=>{
        return <div className={styles.card} key={item.id}>
            <div className={styles.itemdiv}>
                <div><span>{item.name}</span></div>
                <div>
                <img src={item.imageURL} alt={item.name}  style={{height:200,objectFit:'cover'}}/>
                </div>
            </div>
            <div className={styles.pricebutton_div}>
               
               <div>
               <b style={{ marginTop:"10px"}}>${item.price}</b>
               </div>
              
              <button onClick={()=>HandleAddtoCart(item)}>Add to cart</button>
            </div>
        </div>
      })
    }
</div>
  )
}



