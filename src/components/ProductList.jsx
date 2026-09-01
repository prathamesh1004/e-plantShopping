
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    price: 499,
    category: "Air Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 599,
    category: "Air Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae1bb4?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Aloe Vera",
    price: 399,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Jade Plant",
    price: 449,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "Monstera",
    price: 699,
    category: "Tropical Plants",
    image:
      "https://images.unsplash.com/photo-1614594575834-9c7c7b8c6e8e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "Areca Palm",
    price: 799,
    category: "Tropical Plants",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=600&q=80",
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const getQuantity = (plantId) => {
    const item = cart.find((item) => item.id === plantId);
    return item ? item.quantity : 0;
  };

  const categories = [...new Set(plants.map((plant) => plant.category))];

  return (
    <div className="products-page">
      <h1>Our Plants</h1>

      {categories.map((category) => (
        <section className="plant-category" key={category}>
          <h2>{category}</h2>

          <div className="product-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => {
                const quantity = getQuantity(plant.id);

                return (
                  <div className="product-card" key={plant.id}>
                    <img src={plant.image} alt={plant.name} />

                    <h3>{plant.name}</h3>

                    <p>₹{plant.price}</p>

                    <button
                      onClick={() => handleAddToCart(plant)}
                      disabled={quantity > 0}
                    >
                      {quantity > 0
                        ? `Added to Cart (${quantity})`
                        : "Add to Cart"}
                    </button>
                  </div>
                );
              })}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
```
