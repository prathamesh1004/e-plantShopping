
import React from "react";
import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  const itemTotal = item.price * item.quantity;

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: newQuantity,
        })
      );
    }
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />

      <div className="cart-item-details">
        <h2>{item.name}</h2>

        <p>Price: ₹{item.price}</p>

        <div className="quantity-controls">
          <button
            onClick={() => handleQuantityChange(item.quantity - 1)}
            disabled={item.quantity <= 1}
          >
            -
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() => handleQuantityChange(item.quantity + 1)}
          >
            +
          </button>
        </div>

        <p className="item-total">
          Total: ₹{itemTotal}
        </p>

        <button
          className="remove-button"
          onClick={() => dispatch(removeItem(item.id))}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
```
