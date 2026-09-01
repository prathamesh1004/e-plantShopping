
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  // Calculate the total price for this individual item
  const itemTotal = item.price * item.quantity;

  // Calculate the total amount of all items in the cart
  const calculateTotalCartAmount = () => {
    return cart.reduce(
      (total, cartItem) =>
        total + cartItem.price * cartItem.quantity,
      0
    );
  };

  const handleQuantityChange = (newQuantity) => {
    // Remove the item when its quantity reaches zero
    if (newQuantity <= 0) {
      dispatch(removeItem(item.id));
      return;
    }

    dispatch(
      updateQuantity({
        id: item.id,
        quantity: newQuantity,
      })
    );
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />

      <div className="cart-item-details">
        <h2>{item.name}</h2>

        <p>Unit Price: ₹{item.price}</p>

        <div className="quantity-controls">
          <button
            onClick={() => handleQuantityChange(item.quantity - 1)}
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
          Item Total: ₹{itemTotal}
        </p>

        <p className="cart-total-from-item">
          Total Cart Amount: ₹{calculateTotalCartAmount()}
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

