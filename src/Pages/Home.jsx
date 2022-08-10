import React, { useContext } from "react";
import Filters from "../Comp/Filters";
import Product from "../Comp/Product";
import CartContext from "../Context/CartContext";

const Home = () => {
  const {
    state: { products },
    filterState: { byFastDelivery, byStock, sort, searchQuery, byRating }
  } = useContext(CartContext);

  const transformedProducts = () => {
    let sortedProducts = products;
    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }
    if (!byStock) {
      sortedProducts = sortedProducts.filter((i) => i.inStock !== 0);
    }
    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((i) => i.fastDelivery);
    }
    if (byRating) {
      sortedProducts = sortedProducts.filter((i) => i.rating >= byRating);
    }
    if (searchQuery) {
      sortedProducts = sortedProducts.filter((i) =>
        i.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return sortedProducts;
  };

  return (
    <div className="flex ">
      <div className=" fixed w-[45%] md:w-[25%] overflow-hidden bg-slate-500 p-4 min-h-screen  ">
        <Filters />
      </div>
      <div className=" ml-[45%] md:ml-[25%] flex-1 p-4 overflow-y-hidden min-h-screen">
        <div className="flex items-center justify-center  flex-wrap gap-8">
          {transformedProducts().map((i, index) => (
            <Product i={i} key={i.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Home);
