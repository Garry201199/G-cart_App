import React, { useContext, useEffect, useState } from "react";
import CartContext from "../Context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const {
    state: { cart },
    dispatch,
    filterState: { searchQuery },
    Filterdispatch
  } = useContext(CartContext);

  // useEffect(() => {
  //   cart.filter((i) => {
  //     if (i.name.toLowerCase().includes(search.toLowerCase())) return i;
  //   });
  // }, [search]);

  return (
    <div className="bg-gray-900  sticky top-0 z-50 ">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link to="/">
            <div title="Company" className="inline-flex items-center">
              <svg
                className="w-8 text-teal-400"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                stroke="currentColor"
                fill="none"
              >
                <rect x="3" y="1" width="7" height="12" />
                <rect x="3" y="17" width="7" height="6" />
                <rect x="14" y="1" width="7" height="6" />
                <rect x="14" y="11" width="7" height="12" />
              </svg>
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                <span className="text-3xl font-semibold ">G</span>-cart
              </span>
            </div>
          </Link>
          <div className="flex  flex-1 justify-center items-center hidden space-x-8 lg:flex">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) =>
                Filterdispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value
                })
              }
              placeholder="search a product..."
              className="w-[60%] outline-none rounded-md  border-2 focus:border-teal-300 h-12 px-4 bg-gray-100 "
            />
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex relative items-center text-red-500 px-4 py-2 rounded bg-gray-600  hover:bg-gray-500 transition duration-300 space-x-8 lg:flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="#fafafa"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span
              className="absolute font-semibold top-1 right-1 text-teal-200 rounded-full w-6 h-6 flex justify-center
              bg-gray-900  "
            >
              {cart?.length}
            </span>
          </button>
          {isMenuOpen && (
            <div className="absolute  top-14 right-0 min-w-[40%] md:w-96   ">
              <div className="p-5 bg-white  border rounded shadow-sm">
                <div className="items-center ">
                  {/* mini cart */}
                  {cart.length > 0 ? (
                    <>
                      {cart.map((i) => (
                        <div key={i.id}>
                          <div
                            className={`w-full p-3 flex mb-4 gap-x-4 justify-between items-center
                        rounded-lg  bg-[#d3d3d3]  `}
                          >
                            <div>
                              <img
                                className=" rounded-full object-cover w-20 h-20 "
                                src={i.image}
                                alt="bjsd"
                              />
                            </div>
                            <div className="flex gap-y-3  flex-col">
                              <h1 className="font-semibold">
                                {i?.name?.length > 14
                                  ? i?.name.slice(0, 10) + " ..."
                                  : i?.name}
                              </h1>

                              <h1 className="text-slate-800 font-semibold">
                                {" "}
                                ₹ {i.price}{" "}
                              </h1>
                            </div>
                            <div>
                              <AiFillDelete
                                className="cursor-pointer"
                                onClick={() =>
                                  dispatch({
                                    type: "RemoveFromCart",
                                    payload: i
                                  })
                                }
                                size={30}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                      <div>
                        <button
                          className="px-4 py-2 w-full text-green-800 hover:text-green-100 font-bold  transition 
                        duration-200 rounded-lg bg-green-400 hover:bg-green-600
                         focus:outline-none 
                        focus:shadow-outline"
                          onClick={() => {
                            setIsMenuOpen(!isMenuOpen);
                            navigate("/cart");
                          }}
                        >
                          Go To Cart
                        </button>
                      </div>{" "}
                    </>
                  ) : (
                    "Cart is Empty"
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default React.memo(NavBar);
