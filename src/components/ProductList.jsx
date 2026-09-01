
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = [
  // Air Purifying Plants
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
    name: "Spider Plant",
    price: 449,
    category: "Air Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Boston Fern",
    price: 549,
    category: "Air Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1614594575834-9c7c7b8c6e8e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "Rubber Plant",
    price: 649,
    category: "Air Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1597055181300-d7c5c6e0c9a7?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "ZZ Plant",
    price: 699,
    category: "Air Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1632207691143-5e6f6e7b9c9d?auto=format&fit=crop&w=600&q=80",
  },

  // Succulents
  {
    id: 7,
    name: "Aloe Vera",
    price: 399,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 8,
    name: "Jade Plant",
    price: 449,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 9,
    name: "Haworthia",
    price: 349,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 10,
    name: "Echeveria",
    price: 399,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1525490829609-d166ddb58678?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 11,
    name: "Zebra Haworthia",
    price: 379,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 12,
    name: "String of Pearls",
    price: 499,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80",
  },

  // Tropical Plants
  {
    id: 13,
    name: "Monstera",
    price: 699,
    category: "Tropical Plants",
    image:
      "https://images.unsplash.com/photo-1614594575834-9c7c7b8c6e8e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 14,
    name: "Areca Palm",
    price: 799,
    category: "Tropical Plants",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 15,
    name: "Bird of Paradise",
    price: 899,
    category: "Tropical Plants",
    image:
      "https://images.unsplash.com/photo-1616760851004-7b4f8b4b0f0a?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 16,
    name: "Calathea",
    price: 749,
    category: "Tropical Plants",
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 17,
    name: "Philodendron",
    price: 649,
    category: "Tropical Plants",
    image:
      "https://images.unsplash.com/photo-1545165375-2b1f7d3b1c55?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 18,
    name: "Fiddle Leaf Fig",
    price: 849,
    category: "Tropical Plants",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const isInCart = (plantId) => {
    return cart.some((item) => item.id === plantId);
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
              .map((plant) => (
                <div className="product-card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} />

                  <h3>{plant.name}</h3>

                  <p>₹{plant.price}</p>

                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={isInCart(plant.id)}
                  >
                    {isInCart(plant.id) ? "Added to Cart" : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
```

