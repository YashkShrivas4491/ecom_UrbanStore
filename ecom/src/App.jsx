import React, { Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import "./index.css";
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast
import "react-toastify/dist/ReactToastify.css";

const Product = React.lazy(() => import("./Components/Product"));
const Cart = React.lazy(() => import("./Components/Cart"));

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    toast.success("Wow 🥳 added to cart!");
  };

  // Function to remove an item from the cart
  const removeFromCart = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCart);
  };

  return (
    <>
      <div className="mn">
        <Nav cartItemCount={cartItems.length} />
        <h1 className="title">
          Urban <span>Store</span>
        </h1>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Product addToCart={addToCart} />} />
            <Route
              path="cart"
              element={
                <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
              }
            />
          </Routes>
        </Suspense>
      </div>
      <ToastContainer position="top-center" autoClose={5000} />
    </>
  );
}

export default App;
