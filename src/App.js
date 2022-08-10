import NavBar from "./Comp/NavBar";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import React from "react";

const App = () => {
  return (
    <div className="  App">
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default React.memo(App);
