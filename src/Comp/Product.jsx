import React, { useContext } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import CartContext from "../Context/CartContext";

const Product = ({ i }) => {
  const {
    state: { cart },
    dispatch
  } = useContext(CartContext);
  return (
    <div>
      <div
        className={`max-w-56 md:w-60 p-3 flex flex-col gap-y-2 rounded-tl-[50px] 
        rounded-lg p-2 bg-gray-300  `}
      >
        <img
          className=" rounded-tl-[50px] rounded-lg rounded-br-[50px]"
          src={i.image}
          alt="bjsd"
        />
        <div className="flex justify-between">
          {" "}
          <h1 className="font-semibold">
            {i?.name.length > 14 ? i?.name.slice(0, 10) + " ..." : i?.name}
          </h1>
          {i.inStock <= 3 && i.inStock !== 0 ? (
            <span className="px-2  text-base font-semibold  md:font-bold bg-red-100 rounded-full text-red-500">
              {" "}
              only {i.inStock} left
            </span>
          ) : (
            ""
          )}
        </div>

        <h1> ₹ {i.price} </h1>
        <h1>{i.fastDelivery ? "Fast Delivery" : "4 Days delivery"}</h1>
        <div className="flex">
          {[...Array(i.rating)].map((r, index) => (
            <AiFillStar key={index} />
          ))}
          {[...Array(5 - i.rating)].map((r, index) => (
            <AiOutlineStar key={index} />
          ))}
        </div>
        {cart.find((k) => k.id === i.id) ? (
          <button
            onClick={() => dispatch({ type: "RemoveFromCart", payload: i })}
            className={`px-3 py-2 bg-red-500 hover:bg-red-600
                  rounded-md text-white `}
          >
            Remove from cart
          </button>
        ) : (
          <button
            disabled={i.inStock === 0}
            onClick={() => dispatch({ type: "AddToCart", payload: i })}
            className={`px-3 py-2  ${
              i.inStock === 0 ? "bg-gray-700 " : "bg-blue-700 hover:bg-blue-600"
            }  
          rounded-md text-white  `}
          >
            {i.inStock === 0 ? "Out of stock" : " Add to cart"}
          </button>
        )}
      </div>
    </div>
  );
};
export default React.memo(Product);
