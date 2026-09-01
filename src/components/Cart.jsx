import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/CartSlice";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  if (cart.length === 0) {
    return (
      <div className="page-content">
        <h1>Your Cart 🛒</h1>
        <p>Your cart is currently empty.</p>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Your Cart 🛒</h1>

      {cart.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.name} />

          <div>
            <h2>{item.name}</h2>
            <p>₹{item.price}</p>

            <button onClick={() => dispatch(removeFromCart(item.id))}>
              Remove
            </button>
          </div>
        </div>
      ))}

      <h2>Total: ₹{total}</h2>
    </div>
  );
}

export default Cart;