import React, { useContext, useEffect, useState } from "react";
import { Appcontext } from "../../Context/AppontextProvider";
import "./shoppingcart.css"
function ShoppingCart() {
  const { state, dispatch } = useContext(Appcontext);

  const { cart } = state;
  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  const changeQty = (id, qty) => {
    return dispatch({
      type: "CHANGE_CART_QTY",
      payload: {
        id: id,
        qty: qty,
      },
    });
  };

  return (
    <div className="cartpage">
      <b>Shopping Cart</b>
        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.id} className="cartitem" >
              <img src={item.imageURL} alt={item.title} />
                <div>
                  <span>{item.name}</span>
                  <b>$ {item.price}</b>
              </div>
              <div>
                <button onClick={() => changeQty(item.id, item.qty - 1)}>
                  -
                </button>
                <span>{item.qty}</span>
                <button onClick={() => changeQty(item.id, item.qty + 1)}>
                  +
                </button>
              </div>
               <div className="delete">
               <button
              onClick={() => dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: item,
                })
              }
            >
              Delete
            </button>
               </div>
            </div>
          ))
        ) : (
          <span>Cart is empty</span>
        )}
          <b>Total:  {total}</b>
      </div>
  );
}

export default ShoppingCart;
