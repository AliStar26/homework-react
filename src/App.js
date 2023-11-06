import React, { useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    {
      id: 1,
      name: "Товар 1",
      description: "Описание товара 1",
      price: 2800,
    },
    {
      id: 2,
      name: "Товар 2",
      description: "Описание товара 2",
      price: 500,
    },
  ];

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );
    if (existingItemIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity++;
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <div>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            addToCart={() => addToCart(product)}
          />
        ))}
      </div>
      <Cart cartItems={cartItems} />
    </div>
  );
}

export default App;
