import React from "react";

const ProductCard = ({ name, description, price, image, addToCart }) => {
  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Цена: KZT {price}</p>
      <button onClick={addToCart}>Добавить в корзину</button>
    </div>
  );
};

export default ProductCard;
