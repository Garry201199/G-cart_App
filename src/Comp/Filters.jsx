import React, { useContext, useState } from "react";
import CartContext from "../Context/CartContext";
// import Rating from "./Rating";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const Filters = () => {
  const {
    filterState: { byFastDelivery, byStock, sort, searchQuery, byRating },
    Filterdispatch
  } = useContext(CartContext);

  console.log(byFastDelivery, searchQuery, byStock, sort, byRating);
  // const [rate, setRate] = useState(byRating);

  return (
    <div className="flex flex-col overflow-y-auto overflow-x-hidden  gap-y-3 md:p-1">
      <h1 className="text-gray-900  text-xl md:text-[2rem] font-semibold">
        Filter Products
      </h1>
      {/* Radio */}
      <div className="flex flex-col gap-y-4">
        <div className="flex md:text-xl justify-between">
          <h1 className="text-[1rem] md:text-xl  ">Ascending</h1>
          <input
            checked={sort === "lowToHigh" ? true : false}
            onChange={() =>
              Filterdispatch({
                type: "SORT_BY_PRICE",
                payload: "lowToHigh"
              })
            }
            type="radio"
          />{" "}
        </div>
        <div className="flex md:text-xl justify-between">
          <h1 className="text-[1rem] md:text-xl  ">Descending</h1>
          <input
            checked={sort === "highToLow" ? true : false}
            onChange={() =>
              Filterdispatch({
                type: "SORT_BY_PRICE",
                payload: "highToLow"
              })
            }
            type="radio"
          />{" "}
        </div>
      </div>
      <div className="w-full border-1 border-t "></div>
      {/* checkBox */}
      <div className="flex flex-col gap-y-4">
        <div className="flex md:text-xl justify-between">
          <h1 className="text-[1rem] md:text-xl">Include Out of Stock</h1>
          <input
            type="checkbox"
            onChange={() =>
              Filterdispatch({
                type: "FILTER_BY_STOCK"
              })
            }
            checked={byStock}
          />{" "}
        </div>
        <div className="flex md:text-xl justify-between">
          <h1 className="text-[1rem] md:text-xl"> Fast Delivery Only</h1>
          <input
            type="checkbox"
            onChange={() =>
              Filterdispatch({
                type: "FILTER_BY_DELIVERY"
              })
            }
            checked={byFastDelivery}
          />{" "}
        </div>
      </div>

      <>
        <div className="flex flex-wrap ">
          {" "}
          <label className="text-lg">Rating : </label>
          <div className="flex ml-3 align-center items-center">
            {[...Array(5)].map((_, index) => (
              <button
                key={index}
                onClick={() =>
                  Filterdispatch({
                    type: "FILTER_BY_RATING",
                    payload: index + 1
                  })
                }
              >
                {byRating > index ? (
                  <AiFillStar size={20} />
                ) : (
                  <AiOutlineStar size={20} />
                )}
              </button>
            ))}
          </div>
        </div>
      </>
      <button
        onClick={() =>
          Filterdispatch({
            type: "CLEAR_FILTERS"
          })
        }
        className="px-3 py-2 rounded-md bg-slate-200 "
      >
        Clear Filters
      </button>
    </div>
  );
};

export default React.memo(Filters);
