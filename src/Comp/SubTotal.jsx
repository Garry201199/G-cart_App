import React, { useContext, useEffect, useState } from "react";
import CartContext from "../Context/CartContext";

const SubTotal = () => {
  const {
    state: { cart }
  } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(cart.reduce((accu, i) => accu + Number(i.price) * i.qty, 0));
  }, [cart]);
  return (
    <div className="flex gap-4 flex-col">
      <h1 className="text-[1.5rem] text-center  font-semibold md:text-[2rem] ">
        {" "}
        SubTotal ({cart.length}) items{" "}
      </h1>
      <h1 className="font-semibold ">Total : {total} </h1>
      <button
        className="px-3 py-2 rounded-md font-semibold text-gray-200 
      hover:bg-blue-700 bg-blue-600 "
      >
        Proceed to Checkout
      </button>
    </div>
  );
};
export default React.memo(SubTotal);
