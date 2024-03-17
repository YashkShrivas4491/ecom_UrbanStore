// import React, { Suspense } from "react";
// import { Routes, Route } from "react-router-dom";
// import Nav from "./Components/Nav";
// import "./index.css";

// // Use React.lazy to lazily load components
// const Product = React.lazy(() => import("./Components/Product"));
// const Cart = React.lazy(() => import("./Components/Cart"));

// function App() {
//   return (
//     <>
//       <div>
//         <Nav />
//         <Suspense fallback={<div>Loading...</div>}>
//           <Routes>
//             <Route path="/" element={<Product />} />
//             <Route path="cart" element={<Cart />} />
//           </Routes>
//         </Suspense>
//       </div>
//     </>
//   );
// }

// export default App;
// App.jsx
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
      <div>
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
      <ToastContainer />
    </>
  );
}

export default App;
