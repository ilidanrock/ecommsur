import React from "react";
import s from "./styles/ProductInCart.module.css";

export const ProductInCart = ({ item, addToCart, removeFromCart }) => {
  return (
    <div className={s.wrapper}>
      <div>
        <h3>{item.name}</h3>
        <div className={s.information}>
          <p>Price: ${item.price}</p>
          <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
        </div>
        <div className={s.buttons}>
          <button onClick={() => removeFromCart(item._id)}>-</button>
          <p>{item.amount}</p>
          <button onClick={() => addToCart(item)}>+</button>
        </div>
      </div>
      <figure>
        <img
          src={`http://localhost:5000${item.image}`}
          alt=""
          className={s.image}
        />
      </figure>
    </div>
  );
};
