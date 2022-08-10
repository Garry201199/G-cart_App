const CartReducer = (state, action) => {
  switch (action.type) {
    case "AddToCart":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "RemoveFromCart":
      return {
        ...state,
        cart: [...state.cart.filter((i) => i.id !== action.payload.id)]
      };
    case "ChangeCartQty":
      return {
        ...state,
        cart: [
          ...state.cart.filter((i) =>
            i.id === action.payload.id ? (i.qty = action.payload.qty) : i.qty
          )
        ]
      };
    default:
      return state;
  }
};

export default CartReducer;
