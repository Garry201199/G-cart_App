import React, { useContext } from "react";
import CartContext from "../Context/CartContext";
import SubTotal from "../Comp/SubTotal";
import CartProduct from "../Comp/CartProduct";
const Cart = () => {
  const {
    state: { cart }
  } = useContext(CartContext);
  console.log(cart);

  return (
    <div className="flex ">
      <div className=" mr-[40%] md:mr-[25%] flex-1 p-4 overflow-y-hidden min-h-screen">
        <div className="flex flex-col  items-center justify-center border-1 border-white gap-y-8">
          {cart.map((i) => (
            <CartProduct i={i} key={i.id} />
          ))}
        </div>
      </div>
      <div className=" fixed right-0 w-[40%]  md:w-[25%] overflow-hidden bg-slate-200 p-4 min-h-screen  ">
        <SubTotal />
      </div>
    </div>
  );
};

export default React.memo(Cart);
