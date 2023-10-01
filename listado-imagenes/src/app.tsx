import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Cart } from "./components/cart";
import { List } from "./components/list";
import { CartProvider } from "./cartContext";

export const App = () => {
  return (
    <>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="/:id" element={<List />} />
          </Routes>
        </Router>
        <Cart />
      </CartProvider>
    </>
  );
};
