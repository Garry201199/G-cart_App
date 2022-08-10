import React, { useContext, useState } from "react";
import { AiFillDelete, AiFillStar, AiOutlineStar } from "react-icons/ai";
import CartContext from "../Context/CartContext";

const CartProduct = ({ i }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { dispatch } = useContext(CartContext);

  return (
    <>
      <div
        className=" px-3 py-2 md:px-9 md:py-4 w-full gap-y-2 rounded-xl justify-center 
        md:justify-between items-center
        md:items-start flex md:flex-row flex-col bg-slate-200"
      >
        <img
          className=" h-[90px] w-[90px] md:w-[150px] justify-self-center md:h-[150px] rounded-lg "
          src={i.image}
          alt={i.name}
        />
        <h1 className="font-bold  text-lg">
          {i?.name?.length > 14 ? i?.name?.slice(0, 10) + " ..." : i?.name}
          {/* {i.name} */}
        </h1>
        <h1 className="font-semibold  text-base">₹ {i.price}</h1>
        <div className="flex">
          {[...Array(i.rating)].map((r, index) => (
            <AiFillStar key={index} />
          ))}
          {[...Array(5 - i.rating)].map((r, index) => (
            <AiOutlineStar key={index} />
          ))}
        </div>

        <div className="self-center md:self-start ">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            {i.qty}
            <svg
              className="ml-2 w-4 h-4"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          {isOpen && (
            <div
              id="dropdown"
              className=" absolute z-10 w-32 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
            >
              <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                {[...Array(i.inStock)].map((_, index) => (
                  <li
                    onClick={() => {
                      dispatch({
                        type: "ChangeCartQty",
                        payload: { id: i.id, qty: index + 1 }
                      });

                      setIsOpen(!isOpen);
                    }}
                    className=" py-2 px-4 
                  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    {index + 1}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <button className="px-2 py-1 bg-gray-400 rounded-xl ">
          <AiFillDelete
            size={30}
            onClick={() => dispatch({ type: "RemoveFromCart", payload: i })}
          />
        </button>
      </div>
    </>
  );
};

export default React.memo(CartProduct);
