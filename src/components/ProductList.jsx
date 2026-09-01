import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    price: 499,
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee",
  },
  {
    id: 2,
    name: "Monstera",
    price: 699,
    image: "https://images.unsplash.com/photo-1614594575834-9c7c7b8c6e8e",
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 599,
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bb4",
  },
  {
    id: 4,
    name: "Aloe Vera",
    price: 399,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="products-page">
      <h1>Our Plants 🌱</h1>

      <div className="product-grid">
        {plants.map((plant) => (
          <div className="product-card" key={plant.id}>
            <img src={plant.image} alt={plant.name} />

            <h2>{plant.name}</h2>

            <p>₹{plant.price}</p>

            <button onClick={() => handleAddToCart(plant)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;