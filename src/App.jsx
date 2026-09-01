import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">Paradise Nursery</div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">Cart</Link>
        </div>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <main className="landing-page">
                <div className="landing-overlay">
                  <div className="landing-content">
                    <h1>Paradise Nursery</h1>
                    <h2>Bring Nature Into Your Home</h2>
                    <p>
                      Discover beautiful houseplants and create your own green
                      paradise.
                    </p>

                    <Link to="/plants" className="get-started-button">
                      Get Started
                    </Link>
                  </div>
                </div>
              </main>

              <AboutUs />
            </>
          }
        />

        <Route path="/plants" element={<ProductList />} />

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;