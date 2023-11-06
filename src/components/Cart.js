import React from "react";

const Cart = ({ cartItems }) => {
  const cartList = cartItems.map((item, index) => (
    <li key={index}>{item.name}</li>
  ));

  const cartTotal = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart">
      <h2>Корзина</h2>
      <p>Количество товаров: {cartTotal}</p>
      <ul>{cartList}</ul>
    </div>
  );
};

export default Cart;
