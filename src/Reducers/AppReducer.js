export const cart_Reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_PRODUCTS": {
      return {
        ...state,
        products: payload,
      };
    }
    case "FILTERD_PRODUCTS": {
      return {
        ...state,
        FilterProducts: payload,
      };
    }
    case "SEARCHED_PRODUCTS": {
      return {
        ...state,
        SeacrhedProducts: payload,
      };
    }
    case "ADD_TO_CART": {
      return {
        ...state,
        cart: [{ ...payload, qty: 1 }, ...state.cart],
      };
    }
    case "CHANGE_CART_QTY": {
      return {
        ...state,
        cart: state.cart.filter((item) =>
          item.id === payload.id ? (item.qty = payload.qty) : item.qty
        ),
      };
    }
    case "REMOVE_FROM_CART": {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload.id),
      };
    }

    default:
      return state;
  }
};
