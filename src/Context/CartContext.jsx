import React, { createContext, useReducer, useState } from "react";
import { data } from "../Utils/data";
import CartReducer from "./CartReducer";
import FilterReducer from "./FilterReducer";
const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [products, setProducts] = useState(data);

  const [state, dispatch] = useReducer(CartReducer, {
    products: products,
    cart: []
  });
  const [filterState, Filterdispatch] = useReducer(FilterReducer, {
    byFastDelivery: false,
    byStock: false,
    searchQuery: "",
    byRating: 0
  });
  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
        filterState,
        Filterdispatch
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
