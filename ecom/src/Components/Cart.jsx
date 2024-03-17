import React from "react";
import "./Cart.css";

const Cart = ({ cartItems, removeFromCart }) => {
  // Function to remove an item from the cart
  const handleRemove = (item) => {
    removeFromCart(item);
  };

  // Function to calculate subtotal
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="cart">
      {/* <h2>Know your Product Added Items</h2> */}
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="imgC">
                {" "}
                <img src={item.image} alt={item.title} />
              </div>
              <div className="item-details">
                <p>{item.title}</p>
                <p>${item.price}</p>
                <button onClick={() => handleRemove(item)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
      <p className="total">Subtotal: ${calculateSubtotal()}</p>
    </div>
  );
};

export default Cart;
